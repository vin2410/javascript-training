const form = document.getElementById("form");
const fname = document.getElementById("fname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const content = document.getElementById("content");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
});

var setError = (element, message) => {
    const formInfo = element.parentElement;
    const errorDisplay = formInfo.querySelector(".error");

    errorDisplay.innerText = message;
    formInfo.classList.add("error");
    formInfo.classList.remove("success");
    return formInfo;
};

var setSuccess = (element) => {
    const formInfo = element.parentElement;
    const errorDisplay = formInfo.querySelector(".error");

    errorDisplay.innerText = "";
    formInfo.classList.add("success");
    formInfo.classList.remove("error");
    return formInfo;
};

var isValidEmail = (email) => {
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return regex.test(email);
};

var isValidPhoneNumber = (phoneNumber) => {
    const regex = new RegExp("[0-9]{10}");
    return regex.test(phoneNumber);
};

var validateInputs = () => {
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
