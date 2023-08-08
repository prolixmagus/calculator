//global variables
let num1 = null
let num2 = null
let operator = ''
let displayValue = '0'
let result = ''
let percentValue = ''

//button querySelectors
const numberButtons = document.querySelectorAll('.num-btn');
const clearButton = document.querySelector('#clear');
const operatorButtons = document.querySelectorAll('.operator');
const decimalButton = document.querySelector('#decimal');
const equalsButton = document.querySelector('#equals');
const percentButton = document.querySelector('#percent');
const squareRootButton = document.querySelector('#square-root')

// arithmetic logic
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) =>  num1 / num2;

//number display
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

//button input (event listeners)
const equals = () => equalsButton.addEventListener('click', evaluate)
const decimal = () => decimalButton.addEventListener('click', inputDecimal)
const percent = () => percentButton.addEventListener('click', inputPercent)
const squareRoot = () => squareRootButton.addEventListener('click', inputSquareRoot)

//calculator logic
function inputOperand() {
    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (operator === '') {
                if (displayValue === '0') {
                    displayValue = ''
                }
                displayValue += button.value;
                limitDisplay(displayValue)
                num1 = displayValue
                changeDisplay();
            } else {
                if (displayValue === num1) {
                    displayValue = ''
                }
                displayValue += button.value;
                limitDisplay(displayValue)
                num2 = displayValue
                changeDisplay();
            }
        })
     });
};

function inputOperator() {
    operatorButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
                evaluate()
                operator = button.value
                console.log(operator)
        });
    });
}

function limitDisplay(string) {
    if (string.length > 11) {
        displayValue = displayValue.substring(0, 11)
    }
}
function inputDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.'
        changeDisplay()
    }
}

function inputPercent(e) {
    displayValue = (+displayValue / 100).toString();
    limitDisplay(displayValue)
    num1 = displayValue;
    result = displayValue;
    changeDisplay();
}

function inputSquareRoot() {
    if (displayValue !== '0' && displayValue !== null) { 
        displayValue = Math.sqrt(+num1).toString();
        limitDisplay(displayValue)
        num1 = displayValue;
        result = displayValue;
        changeDisplay();
    }
}

function evaluate() {
        if (num1 !== null && operator !== '' && num2 !== null) {
            result = operate(Number(num1), operator, Number(num2));
            if (operator === '÷' && num2 === '0') {
                result = '(╯°□°)╯'
                displayValue = result;
                changeDisplay(); 
            }
            if (result.toString().length > 11) {         //limit display length
                displayValue = result.toString().substring(0, 11)
            } else {
                displayValue = result.toString()
            }
            num1 = displayValue                         // for chaining operators
            num2 = null;                               // reset the value of num2
            changeDisplay();  
        } 
    }

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2)
        case 'x':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

function calculate() {
    inputOperand()
    inputOperator()
    clearDisplay();
    equals()
    decimal()
    percent()
    squareRoot()
    keyboardInput()
}

//all together now
calculate()

function keyboardInput() {
    window.addEventListener('keypress', (e) => {
        const key = document.querySelector(`button[value="${e.key}"]`)
        if (key) {
            if (e.key === "/") {
                e.preventDefault();
            }
            key.click();
        }
    })
}

    