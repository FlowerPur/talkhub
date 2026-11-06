const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const registerLink = document.getElementById('register-link');
const loginHeading = document.getElementById('login-heading');
const loginButton = document.getElementById('login-button');

let isRegister = false;
document.getElementById('auth-form').addEventListener('submit', function (event) {
    errorMessage.textContent = "";
    if (passwordInput.value == "" || loginInput.value == "") {
        event.preventDefault();
        errorMessage.textContent = 'Введите логин и пароль!';
    }
    else if (passwordInput.value.length < 6) {
        event.preventDefault();
        errorMessage.textContent = 'Пароль должен содержать не менее 6 символов!';
    }
})
registerLink.addEventListener('click', function (event) {
    errorMessage.textContent = "";
    event.preventDefault();
    isRegister = !isRegister;
    if (isRegister === true) {
        registerLink.textContent = 'Уже есть аккаунт?';
        loginHeading.textContent = 'Регистрация';
        loginButton.textContent = 'Зарегистрироваться';
    }
    else {
        registerLink.textContent = 'Нет аккаунта?';
        loginHeading.textContent = 'Вход';
        loginButton.textContent = 'Войти';
    }
})