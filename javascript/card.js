// function handle Payment
function renderCart() {
  const historyCard = document.querySelector('.card-history')
  const userAccounts = JSON.parse(localStorage.getItem('user'))
  const infoUser = document.querySelector('.list-info')
  const cartPage = document.querySelector('.card-product')
  const renderLoginUser = document.querySelector('.account-user')
  const cardTable = document.querySelector('.card-table')
  cardTable.classList.remove('hidden')
  historyCard.classList.add('hidden')

  let userLogin = ""
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

  } else {
    userLogin += `
    <div class="user">${userAccounts.avatar ? '<img class="avata" src=' + userAccounts.avatar + 'alt="avata"></img>' : '<i class="fa-solid fa-user"></i>'}</div>
    <div class="login-register">
      <p class="user-name">${userAccounts.name}</p>
      <button onclick="handleLogout()" class="btn btn-logout" type="submit">Logout</button>
    </div>
    `
  }
  renderLoginUser.innerHTML = userLogin

  let renderInfo = ""
  renderInfo += `
  <li class="item-infor-user image-info">
    <img class="image-info" src="image/images.jpeg" alt="">
  </li>
  <li class="item-infor-user">
  <p>User Name :</p>
    <input class="edit-info infor-name" type="text" value="${userAccounts.name}" readonly>
  </li>
  <li class="item-infor-user">
  <p>Email :</p>
    <input class="edit-info infor-email" type="email" value="${userAccounts.email}" readonly>
  </li>
  <li class="item-infor-user">
  <p>Address :</p>
    <input class="edit-info infor-address" type="text" value="${userAccounts.address ? userAccounts.address : ''}" readonly>
  </li>
  <li class="item-infor-user">
  <p>Phone Number :</p>
    <input class="edit-info infor-phone" type="number" value="${userAccounts.phone ? userAccounts.phone : ''}" readonly>
  </li>
    `
  let renderTableCart = ""
  userAccounts.cart.forEach((element, i) => {
    total = (element.price * element.qty) * (100 - element.sale) / 100
    renderTableCart += `
    <tr>
                <td>${i + 1}</td>
                <td class="name-products">
                  <div>
                    <div class="card-img"><img src="${element.image}" alt="">
                    </div>
                    <h3 class="title-h3">${element.name}</h3>
                  </div>
                </td>
                <td class="qty">
                  <div>
                    <button onclick="handleMinus(${i})" class="btn btn-minus">-</button>
                    <input class="qty-input" type="number" value="${element.qty}" readonly>
                    <button onclick="handlePlus(${i})" class="btn btn-plus">+</button>
                  </div>
                </td>
                <td>${element.sale && element.sale + "%"}</td>
                <td>${element.price.toLocaleString('de-DE')}VND</td>
                <td>${total.toLocaleString('de-DE')}VND</td>
                <td>X</td>
              </tr>
    `
  })
  infoUser.innerHTML = renderInfo
  cartPage.innerHTML = renderTableCart
  renderPayment()
}
renderCart()
function renderPayment() {
  const cartUser = JSON.parse(localStorage.getItem('user'))
  const renderSale = document.querySelector('.sale')
  const renderTotal = document.querySelector('.total')
  let totalProducts = 0
  let saleProducts = 0
  cartUser.cart.forEach((e, i) => {
    total = (e.price * e.qty) * (100 - e.sale) / 100
    totalProducts += total
    saleProducts += e.sale
  })

  renderSale.innerHTML = `
  <p>Sale :</p>
  <p>${saleProducts}%</p>
  `
  renderTotal.innerHTML = `<p>Total:</p>
  <p>${totalProducts.toLocaleString('de-DE')}VND</p>`
}
renderPayment()
function handleEditInfo() {

  const updateInfo = document.querySelectorAll(".edit-info")
  const btnUpdate = document.querySelector('.btn-updateInfo')
  const infoEmail = document.querySelector('.infor-email')
  const btnEdit = document.querySelector('.btn-edit')
  btnUpdate.classList.remove('hidden')
  btnEdit.classList.add('hidden')
  updateInfo.forEach((e) => {
    if (e.type !== "email") {
      e.readOnly = false;
      e.style.backgroundColor = "white"
      e.style.color = "#0a6f0a"
    }
  })
}
renderCart
function handleUpdateInfo() {
  const userCart = JSON.parse(localStorage.getItem('user'))
  const accounts = JSON.parse(localStorage.getItem('accounts'))
  const infoAvata = document.querySelector(".image-info img").src
  const infoName = document.querySelector('.infor-name').value
  const infoEmail = document.querySelector('.infor-email').value
  const infoPhone = document.querySelector('.infor-phone').value
  const infoAddress = document.querySelector('.infor-address').value
  const btnUpdate = document.querySelector('.btn-updateInfo')
  const btnEdit = document.querySelector('.btn-edit')
  const updateInfo = document.querySelectorAll(".edit-info")

  if (infoName !== "" && infoEmail !== "" && infoPhone !== "" && infoAddress !== "") {
    userCart.avata = infoAvata
    userCart.name = infoName
    // userCart.email = infoEmai
    userCart.phone = infoPhone
    userCart.address = infoAddress
    accounts.forEach((e, i) => {
      if (e.email === userCart.email) {
        const newUser = { ...e, ...userCart }
        accounts.splice(i, 1, newUser)
      }
    })
  }
  localStorage.setItem('user', JSON.stringify(userCart))
  localStorage.setItem('accounts', JSON.stringify(accounts))

  btnUpdate.classList.add('hidden')
  btnEdit.classList.remove('hidden')
  updateInfo.forEach((e) => {
    e.readOnly = true;
    e.style.backgroundColor = "#40a944f2"
    e.style.color = "white"
  })
}
function handleMinus(index) {
  const user = JSON.parse(localStorage.getItem('user'))
  const accounts = JSON.parse(localStorage.getItem('accounts'))
  const qty = document.querySelector('.qty-input').value
  user.cart.forEach((e, i) => {
    if (index === i) {
      e.qty -= 1
      if (e.qty <= 0) {
        alert("san pham da bi xoa")
        user.cart.splice(i, 1);
      }
      localStorage.setItem('user', JSON.stringify(user))
    }
  })
  accounts.forEach((value, key) => {
    if (value.email === user.email) {
      accounts[key] = { ...value, ...user }
      localStorage.setItem('accounts', JSON.stringify(accounts))
    }
  })
  renderCart()
}
function handlePlus(index) {
  const user = JSON.parse(localStorage.getItem('user'))
  const accounts = JSON.parse(localStorage.getItem('accounts'))
  user.cart.forEach((e, i) => {
    if (index === i) {
      e.qty += 1
      localStorage.setItem('user', JSON.stringify(user))
    }
  })
  accounts.forEach((value, key) => {
    if (value.email === user.email) {
      accounts[key] = { ...value, ...user }
      localStorage.setItem('accounts', JSON.stringify(accounts))
    }
  })
  renderCart()
}
renderCart

function handleLogout() {
  localStorage.removeItem('user')

  window.location = "./"
}


function handlePayment() {
  const user = JSON.parse(localStorage.getItem('user'))
  const accounts = JSON.parse(localStorage.getItem('accounts'))
  isCheck = false
  const newOrders = {

  }
  accounts.forEach((e, i) => {
    if(e.email === user.email){
      if (user.cart.length === 0) {
        alert("chua co san pham de thanh toan")
        isCheck = true
      } else {
        accounts.splice(i, 1)
        newOrders.cart = [...e.cart]
        newOrders.date = new Date
        newOrders.status = 1
        newOrders.idUser = e.id
        newOrders.email = e.email
        let sum = 0
        newOrders.cart.forEach((value, index) => {
          sum += Number((value.price * value.qty) * (100 - value.sale) / 100)
        })
        newOrders.totalPrice = sum
        user.orders.push(newOrders)
        user.cart = []
        isCheck = false
        accounts.splice(i, 0, user)
      }
    }
  })
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('accounts', JSON.stringify(accounts))
  renderCart(user)
}

function renderHistrory() {
  const accounts = JSON.parse(localStorage.getItem('accounts'))
  const user = JSON.parse(localStorage.getItem('user'))
  const cardTable = document.querySelector('.card-table')
  const cardHistory = document.querySelector('.card-history')
  cardHistory.classList.remove('hidden')
  cardTable.classList.add('hidden')

  const renderHistrory = document.querySelector('.card-history-product')

  const allOrders = accounts.map((user) => user.orders)

  let tableHistory = ''
  allOrders.forEach((e) => {
    if (e !== undefined) {
      e.forEach((value, i) => {
        if (value.email === user.email) {
          let currentDate = value.date
          let date = new Date(currentDate);
          console.log('date', date);
          let day = date.getDate();
          let month = date.getMonth() + 1;
          let year = date.getFullYear();
          let formattedDate = day + "/" + month + "/" + year;
          tableHistory += `
          <tr>
          <td>${i + 1}</td>
          <td>${value.email}</td>
          <td>${formattedDate}</td>
          <td>${value.status == 1 ? 'watting' : value.status == 2 ? 'being delevery' : 'done'}</td>
          <td>${value.totalPrice.toLocaleString('de-DE')}VND</td>
          <td>${value.cart.map((item) => `<p> ${item.name}</p>`)}</td>
          </tr>
          `
        }
      })

    }
  })
  renderHistrory.innerHTML = tableHistory
}
