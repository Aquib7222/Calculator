let currentInput = ''; // Store current input
let expression = ''; // Store the entire expression

// Function to append numbers to the display
function appendNumber(button) {
    // If the current input is '0', replace it with the new number
    if (currentInput === '0') {
        currentInput = button.textContent;
    } else {
        currentInput += button.textContent; // Add the number to the current input
    }
    updateDisplay();
}

// Function to set an operator
function setOperator(op) {
    if (currentInput === '') return; // Prevent setting operator without a number
    
    // If expression is empty, add current input to expression
    if (expression === '') {
        expression = currentInput;
    } else {
        expression += ' ' + currentInput; // Append current input to expression
    }
    expression += ' ' + op + ' '; // Add operator to expression
    currentInput = ''; // Clear current input for the next number
    updateDisplay();
}

// Function to calculate the result
function calculate() {
    if (currentInput !== '') {
        expression += currentInput; // Add the last number to the expression
    }
    if (expression === '') return; // Check if expression is empty

    try {
        // Evaluate the entire expression
        const result = eval(expression);
        currentInput = result.toString(); // Set the current input to the result
        expression = ''; // Clear the expression
        updateDisplay();
    } catch (error) {
        document.getElementById('show_output').innerText = 'Error'; // Display error
        clearAll(); // Reset the calculator
    }
}

// Function to clear all inputs
function clearAll() {
    currentInput = '';
    expression = '';
    updateDisplay(); // Reset display to be empty
}

// Function to clear the last input
function clearLast() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1); // Remove the last character
    }
    // If currentInput is empty after clearing, reset to an empty string
    if (currentInput === '') {
        currentInput = '';
    }
    updateDisplay();
}

// Function to update the display
function updateDisplay() {
    document.getElementById('show_output').innerText = expression + (currentInput ? ' ' + currentInput : ''); // Show current input or keep it empty
}

// Function to handle advanced operations
function advancedOperation(op) {
    if (currentInput === '') return; 

    let result;
    const currentNum = parseFloat(currentInput); // Get the current number
    switch (op) {
        case 'square':
            result = Math.pow(parseFloat(currentInput), 2);
            break;
        case 'sqrt':
            result = Math.sqrt(parseFloat(currentInput));
            break;
        case 'pi':
            result = currentNum*Math.PI;
            break;
        case 'e':
            result = currentNum*Math.E;
            break;
        case 'factorial':
            result = factorial(currentNum);
            break;
        default:
            return; 
    }

    currentInput = result.toString(); 
    updateDisplay();
}

function factorial(n) {
    if (n < 0) return 'Error'; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1; // 0! and 1! are both 1
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function greetings() {
    const greeting = document.getElementById('greeting');
    const buttons = document.querySelectorAll('.hide_button');
    const box_button =document.querySelectorAll('.box');
    // const button_text=document.querySelector('#modeToggle');
    
    if(window.innerWidth < 500 ){
        // button_text.textContent="Less";
        if (greeting.style.display === "none" ) {
            greeting.style.display = "block";  // Show the text
            
            buttons.forEach(function(button) {
                button.style.display="block";
                button.style.width="40px";
                button.style.height="40px";
                
            });
            box_button.forEach(function(boxes){
                boxes.style.width="40px";
                boxes.style.height="45px";
            });
            
        } else {
            greeting.style.display = "none";  // Hide the text

            buttons.forEach(function(button) {
                button.style.display="none"; 
            });
            box_button.forEach(function(boxes){
                boxes.style.width="50px";
                boxes.style.height="50px";
            });
        }
    }else if(window.innerWidth>500 && greeting.style.display==="none" ){
        greeting.style.display="block";
        // button_text.textContent="More";

    }else{
        greeting.style.display="none";
        // button_text.textContent="More";
    }
}


