/**
 * Author:Someshwar Mirge
 * Email:mirgesomeshwar@gmail.com
 * 
 * Problem Statement:
 * Write a program to reverse a number (9735 -> 5379)
 */

let readline = require("readline-sync");
let number = parseInt(readline.question("Enter number to reverse:"));
console.log("reversed number is " + reverseNumber(number));


function reverseNumber(number) {
    let digit = 1;
    let reverse = 0;
    while (number > 0) {
        digit = number % 10;

        number = parseInt(number / 10);
        reverse = reverse * 10 + digit;
    }
    return reverse;
}