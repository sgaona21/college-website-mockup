/*
Steven Gaona STE2342585
Date: 4/11/25
*/

// ********** TUITION PAGE ********** //
inStateSelection = document.getElementById('in-state');
outStateSelection = document.getElementById('out-state');

function calculateTuition(tuition) {
    if (tuition == 5000) {
        let semesters = parseInt(inStateSelection.value);
        semesters = semesters * tuition;
        document.getElementById('in-state-total').innerText = `$${semesters.toLocaleString()}`;
    } else if (tuition == 10000) {
        let semesters = parseInt(outStateSelection.value);
        semesters = semesters * tuition;
        document.getElementById('out-state-total').innerText = `$${semesters.toLocaleString()}`;
    }
}

inStateSelection.addEventListener('change', () => {
    calculateTuition(5000);
});
outStateSelection.addEventListener('change', () => {
    calculateTuition(10000);
});






// ********** APPLICATION PAGE ********** //
// here all of my dom elements assigned to variables: 
const form = document.getElementById("form");
const firstNameInput = document.querySelector('.first-name input[type="text"]');
const lastNameInput = document.querySelector('.last-name input[type="text"]');
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const schoolID = document.getElementById('school-id');
const genButton = document.getElementById('gen-button');
const degreeSelection = document.getElementById('degree');
const submitButton = document.getElementById('submit');

// this code uses three regular expressions and assigns them each to their own variable. I used chatgpt to generate the RegEx formulas.
const nameRegEx = /^[A-Za-z]{2,}$/;
const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegEx = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

// this code is used for the form validation. the validation goes through 6 checks that check each section of the form. They will later be assigned a boolean. 
let checkFirst = null;
let checkLast = null;
let checkEmail = null;
let checkPhone = null;
let checkID = null;
let checkDegree = null;

// this function is used to validate the input for the first and last name, the email and phone mumber. it takes the input and makes sure it matches the regex validation. it checks to make sure the input is not blank or invalid. depending on pass or fail, it provides feedback to the user by displaying an emoji on the page. it then returns a boolean 
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
};

// this function uses the Math object to generate a random 6 digit number that is used for the student ID.
function generateStudentID() {
    return Math.floor(100000 + Math.random() * + 900000);
};

// this code attaches an event listener to the form. it uses the 'focusout' and applies it to each input. upon invoking the inputValidation function, it saves the output (a boolean) to a variable that is used for validation in the final submission. It also feeds custom arguments for each input. 
form.addEventListener('focusout', () => {
    checkFirst = inputValidation(firstNameInput, nameRegEx, ".first-valid", ".first-invalid");
    checkLast = inputValidation(lastNameInput, nameRegEx, ".last-valid", ".last-invalid");
    checkEmail = inputValidation(emailInput, emailRegEx, ".email-valid", ".email-invalid");
    checkPhone = inputValidation(phoneInput, phoneRegEx, ".phone-valid", ".phone-invalid");
});

// this code attaches an event listener to the generate button. it uses the click event. it invokes the gnerateStudentID function and assigns that value to the student id input box. it also checks to make sure the user clicked the generate button by checking for an empty string. upon being empty or present, it updates the checkID variable with a boolean value. 
genButton.addEventListener('click', () => {
    schoolID.value = generateStudentID();
    if (schoolID.value != "") {
        document.querySelector('.id-valid').style.display = "inline";
        document.querySelector('.id-invalid').style.display = "none";
        checkID = true;
    } else {
        checkID = false;
    }
});

// this code attaches an event listener to the selection box. it uses the change event to listen to changes in user selection. it also checks to make sure the user has made a selection but checking for an empty string. it then displays an emoji and updates the variable to a boolean. 
degreeSelection.addEventListener('change', () => {
    if (degreeSelection.value != "") {
        document.querySelector('.degree-valid').style.display = "inline";
        document.querySelector('.degree-invalid').style.display = "none";
        checkDegree = true;
    } else {
        checkDegree = false;
    }
});

// this code applies the final form validation before submission. it uses prevent default to prevent the page from refreshing and clearing the user inputs and selections. it uses if logic to check and make sure that all variables are true before dislaying a confirmation message to the user. 
// it then also perfoms some more if logic that makes sure the green or red emojis only display at the right times. if the user leaves any fields blank, it provides a red emoji next to each label. all fields must pass before cofirmation message appears
submitButton.addEventListener('click', () => {
    event.preventDefault();

    if (checkFirst && checkLast && checkEmail && checkPhone && checkID && checkDegree) {
        document.querySelector('.confirmation-container').style.display = "flex"
    } else {
        if (!checkFirst) {
            document.querySelector('.first-invalid').style.display = "inline";
            document.querySelector('.confirmation-container').style.display = "none";
        }
        if (!checkLast) {
            document.querySelector('.last-invalid').style.display = "inline";
            document.querySelector('.confirmation-container').style.display = "none";
        }
        if (!checkEmail) {
            document.querySelector('.email-invalid').style.display = "inline";
            document.querySelector('.confirmation-container').style.display = "none";
        }
        if (!checkPhone) {
            document.querySelector('.phone-invalid').style.display = "inline";
            document.querySelector('.confirmation-container').style.display = "none";
        }
        if (!checkID) {
            document.querySelector('.id-invalid').style.display = "inline";
            document.querySelector('.confirmation-container').style.display = "none";
        }
        if (!checkDegree) {
            document.querySelector('.degree-invalid').style.display = "inline";
            document.querySelector('.confirmation-container').style.display = "none";
        }
    }
});







