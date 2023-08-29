// New way with object
const formField = {
    username: {
        key: "username",
        requiredMessage: "Please enter a username",
    },
    email: {
        key: "email",
        regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        requiredMessage: "Please enter an email",
        invalidMessage: "Please enter an valid email",
    },
    phone: {
        key: "phone",
        regex: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
        requiredMessage: "Please enter a number phone",
        invalidMessage: "Please enter an valid number",
    },
    description: {
        key: "description",
        requiredMessage: "Please enter a description about yourself",
    },
};

const validateForm = (event) => {
    event.preventDefault();
    const errors = {};
    const form = document.getElementById("form");

    for (let field in formField) {
        const inputElement = document.getElementById(field);
        const fieldValue = inputElement.value.trim();
        const fieldConfig = formField[field];

        if (fieldConfig.requiredMessage && fieldValue === "") {
            errors[field] = fieldConfig.requiredMessage;
        } else if (fieldConfig.regex && !fieldConfig.regex.test(fieldValue)) {
            errors[field] = fieldConfig.invalidMessage;
        } else {
            const inputElement = document.getElementById(field);
            const formInfo = inputElement.parentElement;
            const errorElement = formInfo.querySelector("p");
            formInfo.className = "form-info success";
            errorElement.textContent = "";
        }
    }
    console.log(errors);

    if (Object.keys(errors).length > 0) {
        displayErrors(errors);
    } else {
        form.submit();
    }
};

const displayErrors = (errors) => {
    for (let field in errors) {
        const inputElement = document.getElementById(field);
        const formInfo = inputElement.parentElement;
        const errorElement = formInfo.querySelector("p");
        formInfo.className = "form-info error";
        errorElement.textContent = errors[field];
    }
};
