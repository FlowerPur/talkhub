const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
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