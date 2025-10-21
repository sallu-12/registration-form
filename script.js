const form = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    if (validateForm()) {
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
            form.reset();
        }, 3000); // hide message after 3 seconds
    }
});

function validateForm() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const mobile = document.getElementById('mobile');
    const address = document.getElementById('address');

    let isValid = true;

    // First Name Validation
    if (!/^[A-Za-z]{6,}$/.test(firstName.value)) {
        showError(firstName, "First Name must contain only letters and minimum 6 characters");
        isValid = false;
    } else {
        showSuccess(firstName);
    }

    // Last Name Validation
    if (lastName.value.trim() === "") {
        showError(lastName, "Last Name cannot be empty");
        isValid = false;
    } else {
        showSuccess(lastName);
    }

    // Email Validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
        showError(email, "Invalid Email format");
        isValid = false;
    } else {
        showSuccess(email);
    }

    // Password Validation
    if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters");
        isValid = false;
    } else {
        showSuccess(password);
    }

    // Mobile Validation
    if (!/^\d{10}$/.test(mobile.value)) {
        showError(mobile, "Mobile number must be exactly 10 digits");
        isValid = false;
    } else {
        showSuccess(mobile);
    }

    // Address Validation
    if (address.value.trim() === "") {
        showError(address, "Address cannot be empty");
        isValid = false;
    } else {
        showSuccess(address);
    }

    return isValid;
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('small');
    error.innerText = message;
    input.style.borderColor = 'red';
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('small');
    error.innerText = '';
    input.style.borderColor = '#6a11cb';
}
