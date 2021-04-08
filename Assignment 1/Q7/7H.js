/**
 * Author : someshwar Mirge
 * email:mirgesomeshwar@gmail.com
 */

let readline = require("readline-sync");
let n = parseInt(readline.question("Enter  N:"));
let col = 0;
let row = 0;
let count = n - 1;
let count1 = -1;
let count2 = n - 1;
while (row < 2 * n - 1) {
    col = 0;
    while (col <= count) {

        process.stdout.write("* ");

        col += 1;
    }
    col = 0;
    while (col < count1) {

        process.stdout.write("- ");

        col += 1;
    }
    col = 0;
    while (col <= count2) {

        process.stdout.write("* ");

        col += 1;
    }
    process.stdout.write("\n");
    if (row < n - 1) {
        count -= 1;
    } else {
        count += 1;
    }
    if (row < n - 1) {
        count1 += 2;
    } else {
        count1 -= 2;
    }
    if (row < n - 1) {
        count2 -= 1;
    } else {
        count2 += 1;
    }


    row += 1;
}