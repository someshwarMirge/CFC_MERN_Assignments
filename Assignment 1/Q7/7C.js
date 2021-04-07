/**
 * Author :Someshwar Mirge
 * Email:mirgesomeshwar@gmail.com
 */
let readline = require("readline-sync");
let n = parseInt(readline.question("Enter  N:"));
let col = 0;
let row = 1;
while (row <= n) {
    col = 0;
    while (col < n - row) {
        process.stdout.write("  ");
        col += 1;
    }
    col = 1;
    let num = 1;
    while (col <= ((2 * row) - 1)) {

        if (col < row) {
            process.stdout.write(String(num) + " ");
            num++;

        }
        if (col == row) {
            process.stdout.write(String(num) + " ");
        }
        if (col > row) {
            num--;
            process.stdout.write(String(num) + " ");


        }
        col = col + 1;
    }
    console.log("");
    row++;
}