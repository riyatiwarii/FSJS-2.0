// node Q29,30.js

// Write a javascript program which takes the input of filename as string and 
// prints the extension of the file in the console.

// let filename = prompt("Enter the file name")

// let printExtension = filename.split(".").pop();

// console.log(printExtension);

// Create a simple calculator program in JavaScript which can perform the
// addition, substraction, multiplication and division on given numbers.

const operator = prompt("Enter the operator to perform the calculation.")

const num1 = parseFloat(prompt("Enter the first number"))
const num2 = parseFloat(prompt("Enter the second number"))

switch(operator) {
    case '+':
        result = num1 + num2;
        break;

    case '-':
        result = num1 - num2;
        break;

    case '*':
        result = num1 * num2;
        break;

    case '/':
        result = num1 / num2;
        break;

    default:
        console.log('Enter the correct operator, it was invalid.');
        break;
}

window.alert(`The result is: ${result}`)
