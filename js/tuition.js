/*
Steven Gaona STE2342585
Date: 4/14/25
*/

// here i set my dom variables using the document object
inStateSelection = document.getElementById('in-state');
outStateSelection = document.getElementById('out-state');

function calculateTuition(tuition) {
    // this function takes the user selection and multiplies it by in state or out of state tuition cost. it stores the selection as a variable and converts it to an integer. it then calculates the total. it then targets the span element and updates the text with the total amount that is convereted to a formatted string that includes commas for thousands place using toLocaleString()
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

// this code attaches the event listeners to the semester selections and invokes the in state or out of state tuition cost and updates the total to the user on the screen. 
inStateSelection.addEventListener('change', () => {
    calculateTuition(5000);
});
outStateSelection.addEventListener('change', () => {
    calculateTuition(10000);
});