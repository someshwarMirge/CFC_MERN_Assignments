/*
Author : Someshwar Mirge 
Problem Statement:
Write a program to print even numbers after odd times jump.E.g: 2, 6, 14, 26, ...2 (then jump 1 even number 4) -> 66 (then jump 3 even numbers 8, 10, 12) -> 1414 (then jump 5 even numbers 16,18,20,22,24) -

*/
var readline = require("readline-sync")
let counter1 = 0;
let jump = 1;
let num = 2;

let upperlimit = readline.question("enter upper limit:");
console.log(num);
while (num < upperlimit) {
    counter = 0;
    while (counter <= jump) {
        num = num + 2;
        counter++;

    }
    console.log(num);
    jump += 2;
}