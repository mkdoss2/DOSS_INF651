"use strict";

// =====================================================
// Challenge 1 - Type Conversion
// =====================================================

let numberString = "25";
let convertedNumber = Number(numberString);

console.log("Original value:", numberString);
console.log("Original data type:", typeof numberString);

console.log("Converted value:", convertedNumber);
console.log("Converted data type:", typeof convertedNumber);

console.log("Converted number + 10:", convertedNumber + 10);

// What I understood:
// Number() converts a numeric string into an actual number.
// After converting it, JavaScript can perform normal math operations with the value.


// =====================================================
// Challenge 2 - Type Coercion
// =====================================================

let stringNumber = "20";
let regularNumber = 5;

let additionResult = stringNumber + regularNumber;
let subtractionResult = stringNumber - regularNumber;
let multiplicationResult = stringNumber * regularNumber;

console.log("Addition:", additionResult, typeof additionResult);
console.log("Subtraction:", subtractionResult, typeof subtractionResult);
console.log("Multiplication:", multiplicationResult, typeof multiplicationResult);

// What I understood:
// When a string and number are added, JavaScript converts the number to a string and joins them.
// With subtraction and multiplication, JavaScript converts the numeric string to a number.


// =====================================================
// Challenge 3 - True and False Values
// =====================================================

let nonEmptyString = "Hello";
let emptyString = "";
let zeroValue = 0;
let positiveNumber = 10;
let nullValue = null;
let undefinedValue;

console.log("Non-empty string:", Boolean(nonEmptyString));
console.log("Empty string:", Boolean(emptyString));
console.log("Zero:", Boolean(zeroValue));
console.log("Positive number:", Boolean(positiveNumber));
console.log("Null:", Boolean(nullValue));
console.log("Undefined:", Boolean(undefinedValue));

// What I understood:
// Boolean() shows whether a value is truthy or falsy in JavaScript.
// Non-empty strings and positive numbers are truthy, while empty strings, 0, null, and undefined are falsy.


// =====================================================
// Challenge 4 - if/else
// =====================================================

let age1 = 20;

if (age1 >= 18) {
    console.log("Age:", age1);
    console.log("You are eligible.");
} else {
    console.log("Age:", age1);
    console.log("You are not eligible yet.");
}

let age2 = 16;

if (age2 >= 18) {
    console.log("Age:", age2);
    console.log("You are eligible.");
} else {
    console.log("Age:", age2);
    console.log("You are not eligible yet.");
}

// What I understood:
// An if/else statement chooses between two paths based on whether a condition is true or false.
// Here, a person is eligible when their age is 18 or older.


// =====================================================
// Challenge 5 - else if
// =====================================================

let score1 = 95;
let score2 = 84;
let score3 = 72;

function checkGrade(score) {
    let grade;

    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    console.log("Score:", score, "Grade:", grade);
}

checkGrade(score1);
checkGrade(score2);
checkGrade(score3);

// What I understood:
// else if lets me check several conditions in order until one of them is true.
// The grade ranges work because JavaScript stops checking once it finds a matching condition.


// =====================================================
// Challenge 6 - switch
// =====================================================

function checkService(service) {
    switch (service) {
        case "library":
            console.log("The library provides books and study resources.");
            break;

        case "tutoring":
            console.log("Tutoring provides academic help for students.");
            break;

        case "parking":
            console.log("Parking services can help with campus parking.");
            break;

        case "technology":
            console.log("Technology services can help with computer problems.");
            break;

        default:
            console.log("That campus service was not found.");
    }
}

checkService("library");
checkService("technology");
checkService("cafeteria");

// What I understood:
// A switch statement compares one value against several possible cases.
// break stops the switch after a matching case, and default handles values that do not match.


// =====================================================
// Challenge 7 - Ternary Operator
// =====================================================

let isLoggedIn = true;

console.log(isLoggedIn ? "Welcome back!" : "Please log in.");

isLoggedIn = false;

console.log(isLoggedIn ? "Welcome back!" : "Please log in.");

// What I understood:
// The ternary operator is a shorter way to choose between two results based on a condition.
// It returns the first value when the condition is true and the second when it is false.


// =====================================================
// Challenge 8 - Student Status Program
// =====================================================

let studentName = "Mack Doss";
let studentAge = 20;
let studentScore = 87;
let studentMajor = "Computer Science";
let enrollmentStatus = true;

let adultStatus;

if (studentAge >= 18) {
    adultStatus = "Yes";
} else {
    adultStatus = "No";
}

let studentGrade;

if (studentScore >= 90) {
    studentGrade = "A";
} else if (studentScore >= 80) {
    studentGrade = "B";
} else if (studentScore >= 70) {
    studentGrade = "C";
} else if (studentScore >= 60) {
    studentGrade = "D";
} else {
    studentGrade = "F";
}

let studentStatus = enrollmentStatus ? "Enrolled" : "Not Enrolled";

console.log(`
Student: ${studentName}
Age: ${studentAge}
Major: ${studentMajor}
Adult: ${adultStatus}
Score: ${studentScore}
Grade: ${studentGrade}
Status: ${studentStatus}
`);

// What I understood:
// This program combines conditionals, a ternary operator, variables, and a template literal.
// The conditions determine the student's adult status and grade, while the template literal displays all the information together.