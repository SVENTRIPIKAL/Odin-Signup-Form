// create & assign constants
const invalidText = "Invalid Format.\nExample:";
const phoneRegex = new RegExp(/(\d{10}|\d{3}-\d{3}-\d{4})/);
const emailRegex = new RegExp(/[^\s\n@]+@[a-zA-Z]+\.(com|net|org|edu|gov)/);
const passwordRegex = new RegExp(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/)
const passwordText = `
Password Must Contain:
-1 Digit
-1 Uppercase Letter
-1 Lowercase Letter
-1 Special Character
-8 Or More Characters
`

// assign element variables by ID
var email = document.getElementById("email");
var phoneNumber = document.getElementById("phone-number");
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm-password");



// checks if email is formatted correctly & sets validity text
function validateEmail() {
    if (emailRegex.test(email.value)) {
        email.setCustomValidity("");
    } else { 
        email.setCustomValidity(`${invalidText} JohnDoe@gmail.com`);
    }
}

// checks if phone number is formatted correctly & sets validity text
function validatePhoneNumber() {
    if (phoneRegex.test(phoneNumber.value)) {
        phoneNumber.setCustomValidity("");
    } else {
        phoneNumber.setCustomValidity(`${invalidText} 123-456-7890 or 1234567890`);
    }
}

// checks if passwords match & sets validity text
function validatePassword() {
    if (!passwordRegex.test(password.value)) {
        password.setCustomValidity(`${passwordText}`)
        
    } else if (password.value != confirm_password.value) {
        password.setCustomValidity("")
        confirm_password.setCustomValidity("Passwords Do Not Match.");
        
    } else {
        confirm_password.setCustomValidity("");
    }
}



// validates each field on every key release
email.onkeyup = validateEmail;
phoneNumber.onkeyup = validatePhoneNumber;
password.onkeyup = validatePassword;
confirm_password.onkeyup = validatePassword;