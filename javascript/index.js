const userAccounts = JSON.parse(localStorage.getItem('user'))
const products = JSON.parse(localStorage.getItem('products')) ?? []
// function render
function renderProducts(element) {
  console.log("element", element);
  const renderListProducts = document.querySelector('.list-products')
  const productsSale = document.querySelector('.list-sale')
  const renderPagination = document.querySelector('.pagination')
  const renderLoginUser = document.querySelector('.account-user')
  let userLogin = ""
  let qtyProduct = document.querySelector('.quantity')

  let totalQty = 0


  // nếu accounts = null thì không hiển thị logout
  if (userAccounts === null) {
    userLogin += `
          </div>
          <div class="login-register">
            <a class="login-link" href="login.html?form=login">
              Login
            </a>
            <a class="register-link" href="login.html?form=register">Register</a>
          </div>
          `
    qtyProduct.innerHTML = 0
  } else {
    userLogin += `
    <div class="user">${userAccounts.avatar ? '<img class="avata" src=' + userAccounts.avatar + 'alt="avata"></img>' : '<i class="fa-solid fa-user"></i>'}</div>
    <div class="login-register">
      <p class="user-name">${userAccounts.name}</p>
      <button onclick="handleLogout()" class="btn btn-logout" type="submit">Logout</button>
    </div>
    `
    if (userAccounts.cart !== "") {
      userAccounts.cart.forEach((e, i) => {
        totalQty += e.qty;
      })
    }
    qtyProduct.innerHTML = totalQty
  }
  renderLoginUser.innerHTML = userLogin

  let table = ""
  let dataTableSale = ""
  products.forEach((item, index) => {
    if (item.sale !== "") {
      dataTableSale += `
    <li id="${item.id}" class="item-product col-3">
              <a href="" class="link-product">
                <div class="img-product"><img src="${item.image}" alt="">
                </div>
                <div class="content-product">
                  <h3 class="title-h3">${item.name}</h3>
                  <p class="text-product">${item.content}</p>
                </div>
                <div class="sale">
                <p>${item.price.toLocaleString('de-DE')}VND</p>
                <p>${(item.price - item.price * item.sale / 100).toLocaleString('de-DE')}VND</p>
                </div>
              </a>
              <div class="badge">
                <p class="text badge-text">${item.sale}%</p>
              </div>
              <div class="btn-action">
                <button onclick="handleClickBuy(${index})" class="btn btn-buy">Buy Now</button>
                <button class="btn btn-favorite">Like</button>
              </div>
            </li>
    `
    }
  });
  // render products

  element.forEach((item, index) => {
    table += `
    <li id="${item.id}" class="item-product col-3">
              <a href="" class="link-product">
                <div class="img-product"><img src="${item.image}" alt="">
                </div>
                <div class="content-product">
                  <h3 class="title-h3">${item.name}</h3>
                  <p class="text-product">${item.content}</p>
                </div>
                <p>${(item.price.toLocaleString('de-DE'))}VND</p>
              </a>

              <div class="btn-action">
                <button onclick="handleClickBuy(${index})" class="btn btn-buy">Buy Now</button>
                <button class="btn btn-favorite">Like</button>
              </div>
            </li>
    `
    //   tablePagination = `
    //   <li class="page-item">
    //   <a class="page-link" href="#" aria-label="Previous">
    //     <span aria-hidden="true">&laquo;</span>
    //     <span class="sr-only">Previous</span>
    //   </a>
    // </li>
    // <li class="page-item"><a class="page-link" href="#">${totalPagination}</a></li>
    // <li class="page-item"><a class="page-link" href="#">${totalPagination + 1}</a></li>
    // <li class="page-item">
    //   <a class="page-link" href="#" aria-label="Next">
    //     <span aria-hidden="true">&raquo;</span>
    //     <span class="sr-only">Next</span>
    //   </a>
    // </li>
    //   `
  });
  renderListProducts.innerHTML = table
  productsSale.innerHTML = dataTableSale

}

renderProducts(products)

//  count down sale
const countdownElement = document.querySelector(".time");
let count = 87400;
renderCountDown = ""
const countdown = setInterval(() => {
  // Giảm thời gian đếm ngược
  count--;

  // Tính toán số giờ, phút và giây
  const days = Math.floor(count / 86400);
  const hours = Math.floor((count % 86400) / 3600);
  const minutes = Math.floor((count % 3600) / 60);
  const seconds = count % 60;

  renderCountDown = `
  <div>${days}</div>
  <div>${hours}</div>
  <div>${minutes}</div>
  <div>${seconds}</div>
  `
  countdownElement.innerHTML = renderCountDown

  // Kiểm tra xem thời gian đếm ngược đã đạt tới 0 chưa
  if (count === 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = "Đếm ngược đã kết thúc";
  }
}, 1000);

// handle search
function handleSearch() {
  const valuesearch = document.querySelector(".input-search").value;
  const renderFillter = document.querySelector('.error-fillter');
  const datasearch = [];
  let hasResults = false; // Biến để kiểm tra xem có kết quả tìm kiếm hay không

  products.forEach((item) => {
    if (item.name.toLowerCase().includes(valuesearch.toLowerCase()) || item.type.toLowerCase().includes(valuesearch.toLowerCase())) {
      datasearch.push(item);
      hasResults = true; // Đánh dấu có kết quả tìm kiếm
      return;
    }
  });

  if (hasResults) {
    renderFillter.classList.add('hidden'); // Ẩn thông báo lỗi nếu có kết quả tìm kiếm
  } else {
    renderFillter.classList.remove('hidden'); // Hiển thị thông báo lỗi nếu không có kết quả tìm kiếm
  }

  renderProducts(datasearch);
}

function handleLogout() {
  localStorage.removeItem('user')
  const renderLoginUser = document.querySelector('.account-user')
  window.location = '/'
}
function handleClickBuy(element) {
  const accounts = JSON.parse(localStorage.getItem('accounts'));
  const user = JSON.parse(localStorage.getItem('user'))
  const products = JSON.parse(localStorage.getItem('products'))
  let qtyProduct = document.querySelector('.quantity')
  let checkCart = false
  const cart = {}
  if (user === null) {
    alert('vui long dang nhap de mua san pham')
  } else {
    products.forEach((value, index) => {
      if (index == element) {
        cart.id = value.id
        cart.name = value.name
        cart.content = value.content
        cart.image = value.image
        cart.content = value.content
        cart.sale = value.sale
        cart.price = value.price
        cart.date = new Date
        cart.qty = 1
      }
    })
    user.cart.forEach((e, i) => {
      if (cart.id == e.id) {
        e.qty++
        checkCart = true
      }
    })
    if (checkCart == false) {
      user.cart.push(cart)
      // orders.push(cart)
    }
  }
  localStorage.setItem('user', JSON.stringify(user))
  // localStorage.setItem('orders', JSON.stringify(orders))
  accounts.forEach((item) => {
    if (user.email === item.email) {
      JSON.parse(localStorage.getItem('accounts'));
      item.cart = user.cart
      let totalQty = 0;
      for (let i = 0; i < item.cart.length; i++) {
        totalQty += item.cart[i].qty;
      }
      qtyProduct.innerHTML = totalQty
    }
  })
  alert('Đã Thêm Vào Giõ Hàng')
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('accounts', JSON.stringify(accounts))
}