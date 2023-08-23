const form = document.getElementById("form");
const fname = document.getElementById("fname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const content = document.getElementById("content");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
});

const setError = (input, message) => {
    const formInfo = input.parentElement;
    const errorDisplay = formInfo.querySelector("small");

    errorDisplay.innerText = message;
    formInfo.className = "form-info error";
};

// Right form submit
const setSuccess = (input) => {
    const formInfo = input.parentElement;
    formInfo.className = "form-info success";
};

// Validation Email
const isValidEmail = (email) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

// Validation phone number
const isValidPhoneNumber = (phoneNumber) => {
    return /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phoneNumber);
};

const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phoneNumber.value.trim();
    const contentValue = content.value.trim();

    if (fnameValue === "") {
        setError(fname, "Please enter your full name");
    } else {
        setSuccess(fname);
    }
    if (emailValue === "") {
        setError(email, "Please enter your email");
    } else if (isValidEmail(email)) {
        setSuccess(email);
    } else {
        setError(email, "Please enter a valid email");
    }

    if (phoneValue === "") {
        setError(phoneNumber, "Please enter your phone number");
    } else if (isValidPhoneNumber(phoneNumber)) {
        setSuccess(phoneNumber);
    } else {
        setError(phoneNumber, "Please enter a valid phone number");
    }

    if (contentValue === "") {
        setError(content, "Please enter your content");
    } else {
        setSuccess(content);
    }
};
