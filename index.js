const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const pwdRegExp =   /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
const form  = document.querySelector('form');
const email = document.querySelector('#email');
const pwd = document.querySelector('#pwd');
const confirmPwd = document.querySelector('#confirm-pwd');
const emailError = document.querySelector('#email + span');
const pwdError = document.querySelector('#pwd + span');
const confirmPwdError = document.querySelector('#confirm-pwd + span');

console.log(pwdError);

email.addEventListener('input', () => {
    if(emailRegExp.test(email.value) === false) {
        emailError.textContent = "Please enter a valid email address !"
    } else {
        emailError.textContent = ""
    }
})

pwd.addEventListener('input', () => {
    // pwdError.classList.add('error')
    if (pwd.value.length > 0 && (pwd.value.length < 3 || pwd.value.length > 20)) {
        pwdError.textContent = "Password must contain between 8 and 20 caracters";
    }
    else if(pwdRegExp.test(pwd.value) === false) {
        // pwdError.classList.add('error')
        pwdError.textContent = "At least 8 caracters(upper case, lower caser, number and special caracter)";
    } 
    else {
        // pwdError.classList.toggle('valid-input')
        pwdError.textContent = "Good to go!"
    }
    
});

confirmPwd.addEventListener('input', () => {
    if(confirmPwd.value!==pwd.value) {
        // confirmPwdError.classList.add('error')
        confirmPwdError.textContent = "Does not match the password"
    } else {
        confirmPwdError.textContent = "It's a match"
        // confirmPwdError.classList.add('valid-input')
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if(pwd.value === "") {
        pwdError.textContent = ("Please enter a password !");
        event.preventDefault();
    }
    if(confirmPwd.value === "") {
        confirmPwdError.textContent = ("Please confirm the password !");
        event.preventDefault();
    } 
    if(email.value === "") {
        emailError.textContent = ("Please enter an email address!");
        event.preventDefault();
    } 
    else { 
    alert("You did it Joe !")
    };
})

// email.addEventListener("input", () => {
//     if (email.validity.typeMismatch) {
//       email.setCustomValidity("Please enter a valid address!");
//       email.reportValidity();
//     } else {
//       email.setCustomValidity("");
//     }
//   });
