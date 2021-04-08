/**
 * Author : someshwar Mirge
 * email:mirgesomeshwar@gmail.com
 */

let readline = require("readline-sync");
let n = parseInt(readline.question("Enter  N:"));
let col = 1;
let row = 1;
let temp = n;
while (row < 2 * n) {
    col = 1;
    while (col < 2 * n) {
        process.stdout.write("* ");

        col += 1;
    }
    row += 1;
    console.log("");
}