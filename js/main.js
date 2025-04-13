/*
Steven Gaona STE2342585
Date: 4/11/25
*/





// ********** FORM ********** //
const form = document.getElementById("form");
const firstNameInput = document.querySelector('.first-name input[type="text"]');
const lastNameInput = document.querySelector('.last-name input[type="text"]');
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const schoolID = document.getElementById('school-id');
const genButton = document.getElementById('gen-button');
const degreeSelection = document.getElementById('degree');
const submitButton = document.getElementById('submit');

const nameRegEx = /^[A-Za-z]{2,}$/;
const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegEx = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

let checkFirst = null;
let checkLast = null;
let checkEmail = null;
let checkPhone = null;
let checkID = null;
let checkDegree = null;

function inputValidation(tag, regex, validString, invalidString) {
    let regexValid = regex.test(tag.value);

    if (tag.value === "") {
        document.querySelector(validString).style.display = "none";
        document.querySelector(invalidString).style.display = "none";
        return false;
    }
    else if (regexValid) {
        document.querySelector(validString).style.display = "inline";
        document.querySelector(invalidString).style.display = "none";
        return true;
    } else {
        document.querySelector(invalidString).style.display = "inline";
        document.querySelector(validString).style.display = "none";
        return false;
    }
}

function generateStudentID() {
    return Math.floor(100000 + Math.random() * + 900000);
}

form.addEventListener('focusout', () => {
    checkFirst = inputValidation(firstNameInput, nameRegEx, ".first-valid", ".first-invalid");
    checkLast = inputValidation(lastNameInput, nameRegEx, ".last-valid", ".last-invalid");
    checkEmail = inputValidation(emailInput, emailRegEx, ".email-valid", ".email-invalid");
    checkPhone = inputValidation(phoneInput, phoneRegEx, ".phone-valid", ".phone-invalid");
});

genButton.addEventListener('click', () => {
    schoolID.value = generateStudentID();
    if (schoolID.value != "") {
        document.querySelector('.id-valid').style.display = "inline";
        document.querySelector('.id-invalid').style.display = "none";
        checkID = true;
    } else {
        checkID = false;
    }
})

degreeSelection.addEventListener('change', () => {
    if (degreeSelection.value != "") {
        document.querySelector('.degree-valid').style.display = "inline";
        document.querySelector('.degree-invalid').style.display = "none";
        checkDegree = true;
    } else {
        checkDegree = false;
    }
})

submitButton.addEventListener('click', () => {
    event.preventDefault();

    if (checkFirst && checkLast && checkEmail && checkPhone && checkID && checkDegree) {
        document.querySelector('.confirmation-container').style.display = "flex"
    } else {
        if (!checkFirst) {
            document.querySelector('.first-invalid').style.display = "inline";
            document.querySelector('.confirmation-container').style.display = "none"
        }
        if (!checkLast) {
            document.querySelector('.last-invalid').style.display = "inline";
            document.querySelector('.confirmation-container').style.display = "none"
        }
        if (!checkEmail) {
            document.querySelector('.email-invalid').style.display = "inline";
            document.querySelector('.confirmation-container').style.display = "none"
        }
        if (!checkPhone) {
            document.querySelector('.phone-invalid').style.display = "inline";
            document.querySelector('.confirmation-container').style.display = "none"
        }
        if (!checkID) {
            document.querySelector('.id-invalid').style.display = "inline";
            document.querySelector('.confirmation-container').style.display = "none"
        }
        if (!checkDegree) {
            document.querySelector('.degree-invalid').style.display = "inline";
            document.querySelector('.confirmation-container').style.display = "none"
        }
    }
})







