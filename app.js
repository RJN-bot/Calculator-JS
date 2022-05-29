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




// Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.