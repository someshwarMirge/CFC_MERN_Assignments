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
        process.stdout.write("   ");
        col += 1;
    }
    col = 1;

    while (col <= ((2 * row) - 1)) {

        if (col < row) {

            process.stdout.write(String(col + row - 1) + "  ");


        }
        if (col == row) {
            process.stdout.write(String((2 * row) - 1) + "  ");
        }
        if (col > row) {


            process.stdout.write(String(((row - col) + ((2 * n) - 1))) + "  ");


        }
        col = col + 1;
    }
    console.log("");
    row++;
}