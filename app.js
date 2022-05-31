// Contain functions for all of the basic math operators

// const add = (num1, num2) => num1 + num2;
// const subtract = (num1, num2) => num1 - num2;
// const multiply = (num1, num2) => num1 * num2;
// const divide = (num1, num2) => num1 / num2;

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
        case '*':
            result = operationsObj.multi(num1, num2);
            break;
        case '/':
            result = operationsObj.divide(num1, num2);
            break;

        default:
            break;

    }
    return result;
}

console.log(operatingFunc('+', 21.35, 34.45));
console.log(operatingFunc('-', 21.35, 34.45));
console.log(operatingFunc('*', 21.35, 34.45));
console.log(operatingFunc('/', 21.35, 34.45));

// Create the functions that populate the display when 
// you click the number buttons… you should be storing the 
// ‘display value’ in a variable somewhere for use in the next step.


const btn_clear = document.querySelector('.ac');
const btn_sign = document.querySelector('.sign');
const btn_perc = document.querySelector('.perc');
const btn_add = document.querySelector('.add');
const btn_7 = document.querySelector('.7');
const btn_8 = document.querySelector('.8');
const btn_9 = document.querySelector('.9');
const btn_sub = document.querySelector('.sub');
const btn_4 = document.querySelector('.4');
const btn_5 = document.querySelector('.5');
const btn_6 = document.querySelector('.6');
const btn_multi = document.querySelector('.multi');
const btn_1 = document.querySelector('.1');
const btn_2 = document.querySelector('.2');
const btn_3 = document.querySelector('.3');
const btn_divide = document.querySelector('.divide');
const btn_0 = document.querySelector('.zero');
const btn_deci = document.querySelector('.deci');
const btn_equals = document.querySelector('.equals');

