const num1 = null
const num2 = null
const operator = null
let displayValue = ''
// arithmetic function expressions

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => Number((num1 / num2).toFixed(7))

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

function changeDisplay() {
    const display = document.querySelector('#display');
    display.textContent = displayValue;
}

function buttonClick() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            displayValue += button.value;
            console.log(displayValue);
            changeDisplay()
        })
    })
}

buttonClick()