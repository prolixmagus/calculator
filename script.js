//global variables
let num1 = null
let num2 = null
let operator = ''
let displayValue = '0'
let result = ''

//button querySelectors
const numberButtons = document.querySelectorAll('.num-btn')
const clearButton = document.querySelector('#clear')
const operatorButtons = document.querySelectorAll('.operator')
const decimalButton = document.querySelector('#decimal')
const equalsButton = document.querySelector('#equals')

// arithmetic function expressions
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
function inputOperand() {
    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (operator === '') {
                if (displayValue === '0') {
                    displayValue = ''
                }
                displayValue += button.value;
                num1 = displayValue
                console.log(num1)
                changeDisplay();
            } else {
                if (displayValue === num1) {
                    displayValue = ''
                }
                displayValue += button.value;
                num2 = displayValue
                console.log(num2)
                changeDisplay();
            }
        })
     });
};

function inputOperator() {
    operatorButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            // (3 + 4) +
            if (num1 !==null && operator !== '' && num2 !== null) {
                evaluate()
                operator = button.value
            } else {
            operator = button.value
            }
        });
    });
}

function equals() {
    equalsButton.addEventListener('click', evaluate)
}


function evaluate() {
        if (num1 !== null && operator !== '' && num2 !== null) {
            result = operate(Number(num1), operator, Number(num2));
            if (result === Infinity) {
                result = '(╯°□°)╯︵ ┻━┻';
                displayValue = result;
                changeDisplay(); 
            }
            result = roundLargeNumbers(result);
            displayValue = result;      // display initial result
            num1 = result               // for chaining operators
            num2 = null;                // reset the value of num2
            changeDisplay();  
        } else {
            displayValue = '0';
            changeDisplay();
        };
    };

function roundLargeNumbers(){
    if (result.toString().includes('.')) {
        if (result.toString().split('.')[1].length > 4) {
            return result.toFixed(6);
          }
        }
        return result;
      }

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

function calculate() {
    inputOperand()
    inputOperator()
    clearDisplay();
    equals()
}

//all together now
calculate()
