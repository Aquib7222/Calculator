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

        function greetings() {
            const greeting = document.getElementById('greeting');
            
            
            if (greeting.style.display === "none") {
                greeting.style.display = "block";  // Show the text
            } else {
                greeting.style.display = "none";  // Hide the text
            }
        }
        