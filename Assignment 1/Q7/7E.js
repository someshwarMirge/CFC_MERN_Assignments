/**
 * Author : someshwar Mirge
 * email:mirgesomeshwar@gmail.com
 */

let readline = require("readline-sync");
let n = parseInt(readline.question("Enter  N:"));
let col = 0;
let row = 0;
while (row <= n) {
    col = 1;
    while (col <= row) {
        process.stdout.write("* ");
        col += 1;
    }
    console.log("");
    row += 1;
}