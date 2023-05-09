const products = JSON.parse(localStorage.getItem('products'))

const adminTableProducts = document.querySelector('.prodcuts-admin')
const adminTableOrders = document.querySelector('.orders-admin')
const adminTableUsers = document.querySelector('.users-admin')


const admin = {
  name: "admin",
  email: "admin@gmail.com",
  password: "admin",
  role: true
}
const checkAdmin = JSON.parse(localStorage.getItem('admin-login'))?.email === 'admin@gmail.com'
if (!checkAdmin) {
  window.location = '/'
}

function renderAdmin() {
  const renderLoginUser = document.querySelector('.account-user')
  const admin = JSON.parse(localStorage.getItem('admin-login'))
  let adminLogin = ""
  if (admin === null) {
    adminLogin += `
          </div>
          <div class="login-register">
            <a class="login-link" href="login.html?form=login">
              Login
            </a>
            <a class="register-link" href="login.html?form=register">Register</a>
          </div>
          `
  } else {
    adminLogin += `
    <div class="user">${admin.avatar ? '<img class="avata" src=' + admin.avatar + 'alt="avata"></img>' : '<i class="fa-solid fa-user"></i>'}</div>
    <div class="login-register">
      <p class="user-name">${admin.name}</p>
      <button onclick="handleLogoutAdmin()" class="btn btn-logout" type="submit">Logout</button>
    </div>
    `
  }
  renderLoginUser.innerHTML = adminLogin
}
renderAdmin(admin)

function renderProducts(index) {
  const btnManager = document.querySelectorAll('.btn-render')
  btnManager.forEach((value, item) => {
    if (index === item + 1) {
      // console.log("value",value);
      value.classList.add('btn-manager')
    } else {
      value.classList.remove('btn-manager')
    }
  })
  adminTableProducts.style.display = 'block'
  adminTableOrders.style.display = 'none'
  adminTableUsers.style.display = 'none'
  const adminProducts = document.querySelector('.item-products')
  let dataTable = ""
  products.forEach((e, i) => {
    console.log(i);
    dataTable += `
    <tr>
    <td>${i + 1}</td>
    <td>
      <div class="product-img"><img src="${e.image}" alt="">
      </div>
    </td>
    <td>${e.name}</td>
    <td>${e.content}</td>
    <td>${e.price.toLocaleString('de-DE')}VND</td>
    <td>${e.type}</td>
    <td>${e.sale && e.sale + "%"}</td>
    <td colspan="2">
      <div>
        <button onclick="handleDelete(${i})" class="btn btn-delete">X</button>
        <button onclick="handEdit(${i})" class="btn btn-edit">Edit</button>
      </div>
    </td>
  </tr>
    `
  });
  adminProducts.innerHTML = dataTable
}
renderProducts(products)
function renderOrders(index) {
  const btnManager = document.querySelectorAll('.btn-render')
  btnManager.forEach((value, item) => {
    if (index === item + 1) {
      value.classList.add('btn-manager')
    } else {
      value.classList.remove('btn-manager')
    }
  })
  const accounts = JSON.parse(localStorage.getItem('accounts'))
  adminTableOrders.style.display = 'block'
  adminTableProducts.style.display = 'none'
  adminTableUsers.style.display = 'none'
  const adminOrders = document.querySelector('.item-order')
  let dataTableOrder = ""
  const allOrders = accounts.map((user) => user.orders)
  allOrders.forEach((e) => {
    if (e !== undefined) {
      e.forEach((item, i) => {
        let currentDate = item.date
        let date = new Date(currentDate);
        console.log('date', date);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let formattedDate = day + "/" + month + "/" + year;
          dataTableOrder += `
          <tr>
          <td>${i + 1}</td>
          <td>${item.cart.map((x) => x.id)}</td>
          <td>${item.idUser}</td>
          <td>${item.email}</td>
          <td>${formattedDate}</td>
          <td>${item.totalPrice.toLocaleString('de-DE')}VND</td>
          <td>

          <select onchange="ChangeStatus('${item.email}', ${i})" name="" id="my-select">
                  <option value="1" ${item.status == 1 ? 'selected' : ''}>waiting for approval</option>
                  <option value="2" ${item.status == 2 ? 'selected' : ''}>being delivered</option>
                  <option value="3" ${item.status == 3 ? 'selected' : ''}>has received the goods</option>
                </select>
          </td>
        </tr>
          `

      })

    }
  })

  adminOrders.innerHTML = dataTableOrder
}
renderOrders()
function ChangeStatus(email, index) {

  const accounts = JSON.parse(localStorage.getItem('accounts'))
  const mySelect = document.getElementById('my-select')
  accounts.forEach((e) =>{
    if(email === e.email){
        e.orders[index].status = mySelect.value
    }
  })
  localStorage.setItem('accounts', JSON.stringify(accounts))
}
renderOrders

function renderUser(index) {
  const btnManager = document.querySelectorAll('.btn-render')
  btnManager.forEach((value, item) => {
    if (index === item + 1) {
      value.classList.add('btn-manager')
    } else {
      value.classList.remove('btn-manager')
    }
  })
  adminTableOrders.style.display = 'none'
  adminTableProducts.style.display = 'none'
  adminTableUsers.style.display = 'block'
  const accounts = JSON.parse(localStorage.getItem('accounts'))
  const adminUsers = document.querySelector('.item-user')
  let dataTableUser = ""
  accounts.forEach((e, i) => {
    dataTableUser += `
    <tr>
    <td>${i + 1}</td>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.email}</td>
    <td>
    <select onchange="handleChangeStatus(${e.id})" name="" id="select-status">
      <option value="${true}" ${e.statusUser == 'true' ? 'selected' : ''}>true</option>
      <option value="${false}" ${e.statusUser == 'false' ? 'selected' : ''}>false</option>
    </select>
    </td>
    <td>
    <select onchange="handleChangeRole(${e.id})" name="" id="select-role">
      <option value="${true}" ${e.role == 'true' ? 'selected' : ''}>true</option>
      <option value="${false}" ${e.role == 'false' ? 'selected' : ''}>false</option>
    </select>
    </td>
  </tr>
    `
  })
  adminUsers.innerHTML = dataTableUser
}
renderUser()
function handleChangeStatus(index){
  const selectStatus = document.getElementById('select-status')
  const accounts = JSON.parse(localStorage.getItem('accounts'))
  accounts.forEach((e, i) =>{
    if(e.id === index){
      e.statusUser = selectStatus.value
    }
  })
  localStorage.setItem('accounts', JSON.stringify(accounts))
}
function handleChangeRole(index){
  const selectRole = document.getElementById('select-role')
  const accounts = JSON.parse(localStorage.getItem('accounts'))
  accounts.forEach((e, i) =>{
    if(e.id === index){
      e.role = selectRole.value
      console.log(e.role);
    }
  })
  localStorage.setItem('accounts', JSON.stringify(accounts))
}
function handleCreate() {
  const form = document.querySelector('.form')
  form.classList.toggle('hidden')
  form.innerHTML = `
  <div class="close-tab"><button onclick="handleClose()" class="btn-close-tab">X</button></div>
  <h3 class="title title-h3">Admin Create products</h3>
  <input class="name-product" type="text" name="" id="" placeholder="Enter Name Produts">
  <p class="error-name"></p>
  <input class="img-product" type="file" name="" id="">
  <input class="price-product" type="number" name="" id="" placeholder="Enter Price">
  <p class="error-price"></p>
  <input class="sale-product" type="number" name="" id="" placeholder="Enter Sale">
  <input class="type-product" type="text" name="" id="" placeholder="Enter Type">
  <p class="error-type"></p>
  <textarea class="content-product" name="" id="" cols="30" rows="10" placeholder="Enter Content"></textarea>
  <p class="error-content"></p>
  <input onclick="handleAdd()" class="btn-add" type="submit" value="Add">
  `
}
function handleAdd() {
  const product = {}
  const form = document.querySelector('.form')
  const addIamge = document.querySelector('.img-product')
  const addName = document.querySelector('.name-product').value
  const addText = document.querySelector('.content-product').value
  const addType = document.querySelector('.type-product').value
  const addSale = document.querySelector('.sale-product').value
  const addPrice = document.querySelector('.price-product').value

  const checkErrorName = document.querySelector('.error-name')
  const checkErrorType = document.querySelector('.error-type')
  const checkErrorPrice = document.querySelector('.error-price')
  const checkErrorContent = document.querySelector('.error-content')

  if (addName != "" && addText != "" && addPrice != "" && addText != "") {
    product.id = products[products.length - 1].id + 1
    product.image = "../image/" + addIamge.value.slice(12);
    console.log(product.image);
    product.name = addName
    product.content = addText
    product.type = addType
    product.sale = addSale
    product.price = addPrice
    products.push(product)
    alert("Thêm sản phẩm thành công")
    localStorage.setItem('products', JSON.stringify(products))
  } else {
    alert('Bạn Chưa nhập Đủ Thông Tin')
  }
  renderProducts(products)
}

function handleDelete(i) {
  confirm('ban chac chan muon xoa')
  products.splice(i, 1);
  localStorage.setItem('products', JSON.stringify(products))
  renderProducts(products)
}


function handEdit(i) {
  const form = document.querySelector('.form');
  form.classList.remove('hidden');

  const imgProductInput = form.querySelector('.img-product'); // Lấy phần tử input file

  form.innerHTML = `
    <div class="show-img-edit"><img id="previewImg" src="${products[i].image}" alt=""></div>
    <input class="name-product" type="text" name="" id="" placeholder="Enter Name Produts" value="${products[i].name}">
    <input class="img-product" type="file" name="" id="" value="${products[i].image}">
    <input class="price-product" type="number" name="" id="" value="${products[i].price}">
    <input class="sale-product" type="number" name="" id="" value="${products[i].sale}">
    <input class="type-product" type="text" name="" id=""value="${products[i].type}">
    <textarea class="content-product" name="" id="" cols="30" rows="10" value="">${products[i].content}</textarea>
    <input onclick="handleUpdate(${i})" class="btn-update" type="submit" value="Update">
  `;

  console.log("products[i].image",products[i].image);
}
function handleUpdate(i) {
  const form = document.querySelector('.form')
  const addIamge = document.querySelector('.img-product')
  const addName = document.querySelector('.name-product').value
  const addText = document.querySelector('.content-product').value
  const addType = document.querySelector('.type-product').value
  const addSale = document.querySelector('.sale-product').value
  const addPrice = document.querySelector('.price-product').value
  console.log("addIamge",addIamge);
  const product = {}

  console.log("products[i].image",products[i].image);

  products.splice(i, 1)
  product.id = i + 1
console.log("addImage",addIamge.value);
  if(addIamge === undefined){
    product.image = products[i].image
  }else{
    product.image = "../image/" + addIamge.value.slice(12);
    product.name = addName
    product.content = addText
    product.sale = addSale
    product.price = addPrice
    product.type = addType
    console.log(product.image.value);
    products.splice(i, 0, product)
  }
  localStorage.setItem('products', JSON.stringify(products))
  form.classList.add('hidden')
  renderProducts()
}
function handleClose() {
  const form = document.querySelector('.form')
  form.classList.add("hidden")
}
function handleLogoutAdmin() {
  localStorage.removeItem('admin-login')
  window.location = './'
}
