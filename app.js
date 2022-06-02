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

    result = Math.round(result * 100) / 100;
    return result;
}

const btn_clear = document.querySelector('.clear');
const btn_sign = document.querySelector('.sign');
const btn_deci = document.querySelector('.deci');
const btn_equals = document.querySelector('.equals');
const dataNums = document.querySelectorAll('[data-number]');
const dataOperations = document.querySelectorAll('[data-operator]')

btn_clear.addEventListener('click', () => {
    currentOperand.textContent = '';
    previousOperand.textContent = '';
    currentNum = '';
    previousNum = '';
});

dataNums.forEach(num => {
    num.addEventListener('click', () => {
        currentOperand.append(num.textContent);
    })
});
let currentOperator = '';
let previousOperator = '';
dataOperations.forEach((oper) => {
    oper.addEventListener('click', () => {
        previousOperator = currentOperator;
        currentOperator = oper.textContent;
        if (previousNum !== '') {
            previousNum = parseFloat(previousOperand.textContent);
            currentNum = parseFloat(currentOperand.textContent);
            let operatedResult = operatingFunc(previousOperator, previousNum, currentNum)
            currentOperand.textContent = operatedResult;
        }
        previousNum = parseFloat(currentOperand.textContent);
        previousOperand.textContent = previousNum;
        currentOperand.textContent = '';
        console.log(previousNum);
        i++;
    })
});

btn_equals.addEventListener('click', () => {
    currentNum = parseFloat(currentOperand.textContent);
    let operatedResult = operatingFunc(currentOperator, previousNum, currentNum)
    currentOperand.textContent = operatedResult
    previousOperand.textContent = '';
});

// 12 + 7 - 5 * 3 = should yield 42