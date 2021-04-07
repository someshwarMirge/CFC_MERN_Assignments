/*
Author: Someshwar Mirge
Email: mirgesomeshwar@gmail.com
Problem Statement:
Write the pseudocode & a program to calculate the simple interestbased on the inputs(amount, rate, time) provided by the user.

*/
console.log("Enter P , T ,R values to calculate Simple interest");
let readline = require("readline-sync");
let P = parseInt(readline.question("Enter Principle amount:"));
let T = parseInt(readline.question("Enter Time Period:"));
let R = parseInt(readline.question("Enter Rate Of Interest:"));
console.log("Simple Interest =" + ((P * T * R) / 100));