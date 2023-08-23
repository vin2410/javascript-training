const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const content = document.getElementById("content");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const formInfo = element.parentElement;
    const errorMessage = formInfo.querySelector("p");
    console.log(formInfo);
    errorMessage.innerText = message;
    formInfo.className = "form-info error";
};

// Right form submit
const setSuccess = (element) => {
    const formInfo = element.parentElement;
    formInfo.className = "form-info success";
};

// Validation Email
const isEmail = (email) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);


// Validation phone number

const isPhone = (phone) => /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(phone);

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const contentValue = content.value.trim();

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
