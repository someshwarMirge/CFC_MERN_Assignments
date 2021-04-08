/**
 * Author : someshwar Mirge
 * email:mirgesomeshwar@gmail.com
 */

let readline = require("readline-sync");
let n = parseInt(readline.question("Enter  N:"));
let col = 0;
let row = 0;
let row_mirror = 0;
let row2 = 2 * n - 2;
let row3 = 0;
while (row_mirror < (2 * n) - 1) {
    col = 0;
    while (col <= row) {
        process.stdout.write("* ");
        col += 1;
    }
    col = 0;
    while (col <= row2) {
        process.stdout.write("  ");
        col += 1;
    }
    col = 0;
    while (col <= row3) {
        process.stdout.write("* ");
        col += 1;
    }
    process.stdout.write("\n");

    if (row_mirror < n - 1) {
        row += 1;
    } else {
        row -= 1;
    }
    //for row 2
    if (row_mirror < n - 1) {
        row2 -= 2;
    } else {
        row2 += 2;
    }
    if (row_mirror < n - 1) {
        row3 += 1;
    } else {
        row3 -= 1;
    }



    row_mirror += 1;
}