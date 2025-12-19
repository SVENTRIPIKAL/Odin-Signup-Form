// assign element variables via ID
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm-password");

// checks if values are same & sets custom validity text
function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Do Not Match");
    } else {
        confirm_password.setCustomValidity("");
    }
}

// runs validate password on every change in field
password.onchange = validatePassword;
// runs validate password on every key release in field
confirm_password.onkeyup = validatePassword;