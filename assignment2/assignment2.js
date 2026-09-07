// Assignment 2


// 1. Variables and Data Types

let personName = "Keith";
let age = 31;
let isStudent = true;

console.log(personName, typeof personName);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);


// 2. Basic Arithmetic Operations

let number1 = 10;
let number2 = 5;

console.log("Addition:", number1 + number2);
console.log("Subtraction:", number1 - number2);
console.log("Multiplication:", number1 * number2);
console.log("Division:", number1 / number2);


// 3. Working with Strings

let sentence = "JavaScript is fun to learn.";

console.log("Length:", sentence.length);
console.log("First character:", sentence[0]);
console.log("Last character:", sentence[sentence.length - 1]);


// 4. Math Object

let negativeNumber = -9;

console.log("Square root:", Math.sqrt(negativeNumber));
console.log("Squared:", Math.pow(negativeNumber, 2));
console.log("Absolute value:", Math.abs(negativeNumber));


// 5. Boolean Logic and Comparison Operators

let firstNumber = 10;
let secondNumber = 20;

console.log("Greater than:", firstNumber > secondNumber);
console.log("Less than:", firstNumber < secondNumber);
console.log("Equal to:", firstNumber === secondNumber);


// 6. Logical Operators

let isSunny = true;
let isWarm = false;

console.log("AND:", isSunny && isWarm);
console.log("OR:", isSunny || isWarm);
console.log("NOT isSunny:", !isSunny);


// 7. Using Template Literals

let firstName = "Keith";
let lastName = "Doss";

let greeting = `Hello, ${firstName} ${lastName}!`;

console.log(greeting);