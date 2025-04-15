/*
Steven Gaona STE2342585
Date: 4/14/25
*/


// DOM variable creation
const busButton = document.getElementById('bus-button');
const techButton = document.getElementById('tech-button');
const busPrograms = document.getElementById('business-program-container');
const techPrograms = document.getElementById('tech-program-container');

// this variable sets the state of the program and keeps track of which degree field is selected. upon page load, it sets the value to the business degrees so they show on the page.
let buttonState = "Business";

// this code immediatly invokes the function and updates the degree fields on the page
displayDegrees();

function updateButtonState() {
    // this function allows the button state to toggle between technology and business
    buttonState = event.target.innerText;
};

function displayDegrees() {
    // this function takes the value of the button state and displayes the corresponding degrees for that program field. it also makes sure the button is the correct color depending on the state
    if (buttonState == "Business") {
        busPrograms.style.display = "grid";
        techPrograms.style.display = "none"
        busButton.style.backgroundColor = "aquamarine";
        techButton.style.backgroundColor = "rgb(232, 232, 232)";
    } else if (buttonState == "Technology") {
        busPrograms.style.display = "none";
        techPrograms.style.display = "grid";
        busButton.style.backgroundColor = "rgb(232, 232, 232)";
        techButton.style.backgroundColor = "aquamarine";
    }
}

// these two peices of code attach an event listener to each button and then invoke the updateButtonState() and displayDegrees() functions upon clicking them
busButton.addEventListener('click', () => {
    updateButtonState();
    displayDegrees();
});
techButton.addEventListener('click', () => {
    updateButtonState();
    displayDegrees();
})



  