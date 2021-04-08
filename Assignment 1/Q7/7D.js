/**
 * Author :Someshwar Mirge
 * Email:mirgesomeshwar@gmail.com
 */
let readline = require("readline-sync");
let n = parseInt(readline.question("Enter  N:"));
let col = 0;
let row = 1;
let row_mirror = 0;
while (row <= n) {
    col = 0;
    while (col < n - row) {
        process.stdout.write("    ");
        col += 1;
    }
    col = 1;
    row_mirror = row;
    while (col <= (2 * row) - 1) {

        if (row <= n && col <= row) {

            process.stdout.write(String(row_mirror) + "   ");
            row_mirror += 1;


        } else {
            row_mirror -= 1;
            process.stdout.write(String(row_mirror - 1) + "   ");

        }
        col += 1;
    }

    console.log("");
    row++;
}