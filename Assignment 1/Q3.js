/**
 * Author:Someshwar Mirge
 * Email:mirgesomeshwar@gmail.com
 * Problem Statement :
 * Write the pseudocode & the program to calculate GCD of two numbers
 */
let readline = require("readline-sync");
let num1 = parseInt(readline.question("Enter first number:"));
let num2 = parseInt(readline.question("Enter second number:"));

console.log("GCD =" + gcd(num1, num2));

function gcd(num1, num2) {
    if (num1 == 0)
        return num2;
    if (num2 == 0)
        return num1;


    if (num1 == num2)
        return num1;


    if (num1 > num2)
        return gcd(num1 - num2, num2);
    return gcd(num1, num2 - num1);
}