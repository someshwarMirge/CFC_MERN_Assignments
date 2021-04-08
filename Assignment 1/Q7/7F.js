/**
 * Author : someshwar Mirge
 * email:mirgesomeshwar@gmail.com
 */

let readline = require("readline-sync");
let n = parseInt(readline.question("Enter  N:"));
let col = 1;
let row = 1;
while (row < 2 * n) {
    col = 1;
    if (row <= n) {
        while (col <= n - row) {
            process.stdout.write("  ");
            col += 1;

        }
        col = 1;
        while (col <= (2 * row) - 1) {
            process.stdout.write("* ");
            col += 1;
        }
    }
    if (row > n && row < (2 * n)) {
        col = 1;
        while (col <= row - n) {
            process.stdout.write("  ");
            col += 1;
        }
        col = 1;
        while (col <= (2 * ((2 * n) - row)) - 1) {
            process.stdout.write("* ");
            col += 1;
        }
    }




    console.log("");
    row += 1;
}