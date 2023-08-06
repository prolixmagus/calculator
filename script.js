const num1 = 3
const num2 = 5
const operator = '+'

// arithmetic function expressions

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// operate functions
function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2)
        case 'x':
            return multiply(num1, num2);
        case '÷':
            return divide(num1, num2);
        default: 
            return "Invalid operator.";
    }
}