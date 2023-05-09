/*
        Designed by: SELECTO
        Original image: https://dribbble.com/shots/5311359-Diprella-Login
*/

let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (form = null) => {
    switchCtn.classList.add("is-gx");
    setTimeout(function () {
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let changeFormDefault = (form = null) => {

    switchCtn.classList.toggle("is-txr", true);

    switchCircle[0].classList.toggle("is-txr", true);
    switchCircle[1].classList.toggle("is-txr", true);
    let checkForm = (form == "register");

    switchC1.classList.toggle("is-hidden", !checkForm);
    switchC2.classList.toggle("is-hidden", checkForm);

    aContainer.classList.toggle("is-txl", true);
    bContainer.classList.toggle("is-txl", true);

    bContainer.classList.toggle("is-z200", !checkForm);
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons);
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);

let getParamURL = function (url_string = '', param_name = '') {
    let url = new URL(url_string);
    let value = url.searchParams.get(param_name);
    console.log(value);
    return value;
}


var form = getParamURL(window.location.href, "form");
changeFormDefault(form);

const formDefault = document.querySelector('#a-form')
formDefault.addEventListener("submit", (item) => {
    item.preventDefault();
})
// function renderUserLogin(){
//     const userAccounts = JSON.parse(localStorage.getItem('user'))
//     const renderLoginUser = document.querySelector('.account-user')

//     let userLogin = ""
//   userLogin += `
//   <div class="user"><img class="avata" src="${userAccounts.avata}" alt="logo"></div>
//   <div class="login-register">
//   <p class="user-name">${userAccounts.name}</p>
//   <button onclick="handleLogout()" class="btn btn-logout" type="submit">Logout</button>
//   </div>
//   `
//   renderLoginUser.innerHTML = userLogin
// }
// renderUserLogin()
function handleRegister() {

    const checkUser = JSON.parse(localStorage.getItem('accounts')) ?? []
    const inputName = document.querySelector('.name').value.toLowerCase().trim()
    const inputEmail = document.querySelector('.email').value.toLowerCase().trim()
    const inputPassword = document.querySelector('.password').value.toLowerCase().trim()
    const inputRepeatPassword = document.querySelector('.repeat-password').value.toLowerCase().trim()
    //error
    const checkErrorUserName = document.querySelector('.error-name')
    const checkErrorEmail = document.querySelector('.error-email')
    const checkErrorPassword = document.querySelector('.error-password')
    const checkErrorPasswordRepeat = document.querySelector('.error-passwordRp')

    const userRegister = {}
    const isCheck = false

    const signUpInfo = {
        name: inputName,
        email: inputEmail,
        password: inputPassword,
        repeatPassword: inputRepeatPassword,
        avatar: '',
        cart: [],
        status: true,
    };

    const checkValidator = validator(signUpInfo)
    if (checkValidator.isError) {
        checkErrorUserName.innerHTML = checkValidator.errorUserName;
        checkErrorEmail.innerHTML = checkValidator.errorEmail;
        checkErrorPassword.innerHTML = checkValidator.errorPassword;
        checkErrorPasswordRepeat.innerHTML = checkValidator.errorRepeatPassword;
        return;
    } else {
        checkErrorUserName.innerHTML = "",
            checkErrorEmail.innerHTML = "";
        checkErrorPassword.innerHTML = "";
        checkErrorPasswordRepeat.innerHTML = "";
    }
    checkUser.forEach((element) => {
        if (inputEmail === element.email.toLowerCase().trim()) {
            checkErrorUserName.innerHTML = "Email Đã Tồn Tại"
            isCheck =  true
        }
    })
    if (!isCheck) {
        let idCounter = 1
        for (let i = 0; i < checkUser.length; i++) {
            checkUser[i].id = idCounter;
            idCounter++;
          }
          userRegister.id = idCounter;
        userRegister.name = inputName
        userRegister.email = inputEmail
        userRegister.password = inputPassword
        userRegister.passwordRepeat = inputRepeatPassword
        userRegister.cart = [],
        userRegister.status = true,
        userRegister.role = false
        checkUser.push(userRegister)
        localStorage.setItem("accounts", JSON.stringify(checkUser))
        alert('Register Success')
    } else {
        alert("Email Đã Tồn Tại!! Đặt email khác!");
        return true
    }
}


// funtion login
function handleLogin() {
    const accounts = JSON.parse(localStorage.getItem('accounts'))
    const userLogin = JSON.parse(localStorage.getItem('user'))
    user = {}
    const isCheckLogin = true
    const loginEmail = document.querySelector('.login-input').value.toLowerCase().trim()
    const loginPass = document.querySelector('.password-input').value.toLowerCase().trim()
    if(loginEmail === 'admin@gmail.com' && loginPass === "admin"){
        const adminLogin = {}
        adminLogin.email = loginEmail
        adminLogin.name = "Admin"
        adminLogin.role = true
        window.location.href = "/admin.html"
        localStorage.setItem('admin-login', JSON.stringify(adminLogin))
    }
    accounts.forEach((e, i) => {

        if (e.email === loginEmail && e.password === loginPass) {
            user.id = i + 1
            user.email = loginEmail,
            user.name = e.name,
            user.cart = []
            user.avatar = e.avatar
            user.statusUser = e.status
            user.role = e.role
            user.orders = [],
            window.location.href = "../index.html"
            localStorage.setItem('user', JSON.stringify(user));
        }
        if (user.email === e.email) {
            user.cart = [...e.cart]
            localStorage.setItem('user', JSON.stringify(user));
        }
        // if(e.email !== loginEmail || e.password !== loginPass || loginEmail != "admin@gmail.com"){
        //     alert('Tài khoả hoặc mât khẩu không đúng!! Vui lòng thử lại')
        //     isCheck = false
        // }
    })

}


function validator(user) {
    let error = {
        isError: false,
        errorUserName: "",
        errorEmail: "",
        errorPassword: "",
        errorRepeatPassword: "",
        errorDuplicateEmail: "",
        errorEmailLogin: "",
        errorPasswordLogin: "",
    };
    if (!user.name) {
        error.isError = true
        error.errorUserName = "User Name không được để trống";
    }
    if (!user.email) {
        error.isError = true
        error.errorEmail = "Email không được để trống";
    }
    if (!user.password) {
        error.isError = true
        error.errorPassword = "Password không được để trống";
    }
    if (!user.repeatPassword) {
        error.isError = true
        error.errorRepeatPassword = "Repeat Password không được để trống";
    }
    if (user.repeatPassword !== user.password) {
        error.isError = true;
        error.errorRepeatPassword = "Password không trùng khớp, nhập lại";
    }
    return error;
}