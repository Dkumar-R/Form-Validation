const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmpasswordEl = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');

const CheckUsername = () => {
    let valid = false;
    const min = 3;
    const max = 25;

    const username = usernameEl.value.trim();
    if (!isRequired(username)) {
        showError(usernameEl, 'User cannot be blink')
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl ,`Username must be between ${min} and ${max} charcter.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    } return valid;
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

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

   let isFormValid = isUsernameValid;
   if(isFormValid){

   }
});

const debounce = (fn, delay = 500)=>{
    let timeoutId;
    return(...args)=>{
        if (timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(()=>{
            fn.apply(null, args)
        },delay);
    };
};

form.addEventListener('input',debounce(function (e){
    switch (e.target.id) {
        case 'username':
            CheckUsername
            break;
    
    }
}));


