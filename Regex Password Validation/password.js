function validatePassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regex.test(passwordInput)) {
        setMessage("Password is valid.", "green");
    } else {
        setMessage("Password is not valid. Please ensure it contains at least 8 characters, one special symbol, one digit, and starts with an uppercase letter.", "red");
    }
}

function setMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = color;
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput');
    const icon = document.querySelector('.toggle-password');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}
