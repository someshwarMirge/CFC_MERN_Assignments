/**
 * Author:Someshwar Mirge
 * Email:mirgesomeshwar@gmail.com
 * 
 * Problem Statement:
 * Write a program to count the number of digits in a number
 * 
 */
let readline = require("readline-sync");
let number = parseInt(readline.question("Enter multi digit number:"));

let answer = counterFuntion(number);
console.log(number + " contains " + answer + "  digits. ");

function counterFuntion(number) {
    let count = 0;
    while (number > 0) {
        number = parseInt(number / 10);
        count = count + 1;
    }
    return count;
}