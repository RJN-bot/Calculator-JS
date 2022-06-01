let currentNum = '';
let previousNum = '';
const previousOperand = document.querySelector('.previous-operand')
const currentOperand = document.querySelector('.current-operand')
currentOperand.textContent = '';
previousOperand.textContent = '';

const operationsObj = {
    add: (num1, num2) => num1 + num2,
    sub: (num1, num2) => num1 - num2,
    multi: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
}

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

const operatingFunc = (operator, num1, num2) => {
    let result = 0;
    switch (operator) {
        case '+':
            result = operationsObj.add(num1, num2);
            break;
        case '-':
            result = operationsObj.sub(num1, num2);
            break;
        case 'x':
            result = operationsObj.multi(num1, num2);
            break;
        case '÷':
            result = operationsObj.divide(num1, num2);
            break;

        default:
            break;

    }
    return result;
}

// Create the functions that populate the display when 
// you click the number buttons… you should be storing the 
// ‘display value’ in a variable somewhere for use in the next step.


const btn_clear = document.querySelector('.clear');
const btn_sign = document.querySelector('.sign');
const btn_deci = document.querySelector('.deci');
const btn_equals = document.querySelector('.equals');


const dataNums = document.querySelectorAll('[data-number]');
const dataOperations = document.querySelectorAll('[data-operator]')

btn_clear.addEventListener('click', () => {
    currentOperand.textContent = '';
});

dataNums.forEach(num => {
    num.addEventListener('click', () => {
        currentOperand.append(num.textContent);
    })
});

let currentOperator = '';
dataOperations.forEach((oper) => {
    oper.addEventListener('click', () => {
        previousNum = parseInt(currentOperand.textContent);
        previousOperand.textContent = previousNum;
        currentOperand.textContent = '';
        console.log(previousNum);
        currentOperator = oper.textContent;
        console.log(currentOperator);
    })
})

btn_equals.addEventListener('click', () => {
    currentNum = parseInt(currentOperand.textContent);
    let operatedResult = operatingFunc(currentOperator, previousNum, currentNum)
    console.log(operatedResult);
    currentOperand.textContent = operatedResult

});