/**
 * Author :Someshwar Mirge
 * Email:mirgesomeshwar@gmail.com
 */
let readline = require("readline-sync");
let n = parseInt(readline.question("Enter  N:"));
let col = 0;
let row = 0;
while (row < n) {
    col = 0;
    while (col <= row) {
        process.stdout.write("* ");
        col++;
    }

    console.log("");
    row++;
}