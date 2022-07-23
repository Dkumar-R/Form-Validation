const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmpasswordEl = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');

const CheckUsername = () => {
    let valid = false;
    const min = 2;
    const max = 20;
   
    const username = usernameEl.value.trim();
    if (!isRequired(username)) {
        showError(usernameEl, '*User cannot be blink')
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `*Username must be between ${min} and ${max} charcter.`)
    }
    else {
        showSuccess(usernameEl);
        valid = true;
    } return valid;
};

const checkEmail = () =>{
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)){
        showError(emailEl, 'Email cannot be blank.');
    }else if (!isEmailValid(email)){
        showError(emailEl, 'Email is not valid');
    } else{
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = ()=>{
    let valid =false;
    const password = passwordEl.value.trim();
    if(isRequired(password)){
        showError(passwordEl, 'Password cannot be blank.');
    }else if (!isPasswordSecure(password)){
        showError(passwordEl, 'Password is not valid.')
    }else{
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
}


const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;
const isEmailValid = (email)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
const isPasswordSecure = (password) =>{
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
}

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isUsernameValid = CheckUsername();
        isEmailValid = checkEmail();
        isPasswordSecure = checkPassword();

    let isFormValid = CheckUsername && 
    isEmailValid &&
    isPasswordSecure;
    if (isFormValid) {

    }
});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            CheckUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break
        case 'confirm-password':
            checkPassword();

    }
}));


