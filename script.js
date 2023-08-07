let num1 = null
let num2 = null
let operator = ''
let displayValue = '0'

const numberButtons = document.querySelectorAll('.num-btn')
const clearButton = document.querySelector('#clear')
const operatorButtons = document.querySelectorAll('.operator')
const decimalButton = document.querySelector('#decimal')
const equalsButton = document.querySelector('#equals')

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
    }
}

function changeDisplay() {
    const display = document.querySelector('#display');
    display.textContent = displayValue;
};

function clearDisplay() {
    clearButton.addEventListener('click', () => {
        displayValue = '0';
        num1 = '';
        num2 = '';
        operator = '';
        changeDisplay()
    });
}

//ask for help here haha (or show nick?)
function inputOperand() {
    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (operator === '') {
                if (displayValue === '0') {
                    displayValue = ''
                }
                displayValue += button.value;
                num1 = displayValue
                changeDisplay();
            } else {
                if (displayValue === num1) {
                    displayValue = ''
                }
                displayValue += button.value;
                num2 = displayValue
                changeDisplay();
            }
        })
     });
};

function inputSecondOperand() {
    //clears dispaly for second operand input
        if (num1 !== '' && operator !== '') {
            displayValue = ''
            changeDisplay()
        }
    }

function inputOperator() {
    operatorButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            operator = button.value;
        })
    });
}




inputOperand()
inputOperator()
clearDisplay();
