const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const content = document.getElementById("content");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
});

// Main function
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const contentValue = content.value.trim();

    console.log(emailValue);

    if (usernameValue === "") {
        setError(username, "Please enter your username");
    } else {
        setSuccess(username);
    }

    if (emailValue === "") {
        setError(email, "Please enter your email");
    } else if (!isEmail(email)) {
        setError(email, "Please enter a valid email");
    } else {
        setSuccess(email);
    }

    if (phoneValue === "") {
        setError(phone, "Please enter your phone number");
    } else if (!isPhone(phone)) {
        setError(phone, "Please enter a valid phone number");
    } else {
        setSuccess(phone);
    }

    if (contentValue === "") {
        setError(content, "Please enter your content");
    } else {
        setSuccess(content);
    }
};

// Input error
const setError = (element, message) => {
    const formInfo = element.parentElement;
    const errorMessage = formInfo.querySelector("p");
    console.log(formInfo);
    errorMessage.innerText = message;
    formInfo.className = "form-info error";
};

// Input success
const setSuccess = (element) => {
    const formInfo = element.parentElement;
    console.log(formInfo);
    formInfo.className = "form-info success";
};

// Validation Email
const isEmail = (email) =>
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

// Validation phone number
const isPhone = (phone) => /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(phone);
