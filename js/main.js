/*
Steven Gaona STE2342585
Date: 4/11/25
*/

function heyLOL() {
    console.log("hey LOL")
}


// ********** FORM ********** //
const firstNameInput = document.querySelector('.first-name input[type="text"]');

const nameRegEx = /^[A-Za-z]{2,}$/;

function inputValidation(tag, regex, validString, invalidString) {
    let regexValid = regex.test(tag.value);

    if (tag.value === "") {
        document.querySelector(validString).style.display = "none"
        document.querySelector(invalidString).style.display = "none"
    }
    else if (regexValid) {
        document.querySelector(validString).style.display = "inline"
        document.querySelector(invalidString).style.display = "none"
    } else {
        document.querySelector(invalidString).style.display = "inline"
        document.querySelector(validString).style.display = "none"
    }
}

firstNameInput.addEventListener('blur', () => {
    inputValidation(firstNameInput, nameRegEx, ".valid", ".invalid");
})






