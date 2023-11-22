// Get the button element
let convertButton = document.getElementById("convertButton");

// Add event listener to the button
convertButton.addEventListener("click", function() {
    convertAgeToDays();
});

// Function to convert minutes to seconds
function convertAgeToDays() {
    // Get the value entered by the user
    let ageInput = document.getElementById("age").value;

    // Validate the input
    if (isNaN(ageInput) || ageInput < 0) {
    alert("Please enter a valid positive number for age.");
    return;
    }

       // Call the function to calculate seconds
       let days = calculateDays(parseFloat(ageInput));

       // Display the result in the DOM
       displayResult(days);
   }

// Function to calculate seconds from minutes
function calculateDays(age) {
    // 1 year = 365 days
    return age * 365.25;
}

 // Function to display the result in the DOM
 function displayResult(days) {
    // Get the result element
    let resultElement = document.getElementById("result");

// Format the result to two decimal places
    let formattedResult = days.toFixed(2);

// Display the result in the DOM
     resultElement.innerHTML = "Result: " + formattedResult + " days ";
 }