let form = document.querySelector('form');
let username = document.querySelector('input[name="username"]');
let password = document.querySelector('input[name="password"]');
let email = document.querySelector('input[name="email"]');
let country = document.querySelector('select[name="country"]');

let savedUser = window.sessionStorage.getItem('user');
let savedPassword = window.sessionStorage.getItem('pass');
let savedEmail = window.sessionStorage.getItem('email');
let savedCountry = window.sessionStorage.getItem('country');

if (savedUser) {
    username.value = savedUser;
}
if (savedPassword) {
    password.value = savedPassword;
}
if (savedEmail) {
    email.value = savedEmail;
}
if (savedCountry) {
    country.value = savedCountry;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let user = username.value;
    let pass = password.value;
    let emailVal = email.value;
    let countryVal = country.value;

    window.sessionStorage.setItem('user', user);
    window.sessionStorage.setItem('pass', pass);
    window.sessionStorage.setItem('email', emailVal);
    window.sessionStorage.setItem('country', countryVal);
});