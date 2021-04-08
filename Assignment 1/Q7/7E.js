/**
 * Author : someshwar Mirge
 * email:mirgesomeshwar@gmail.com
 */

let readline = require("readline-sync");
let n = parseInt(readline.question("Enter  N:"));
let col = 1;
let row = 1;
let count = 1;
let count1 = 1;
while (row <= n + 1) {
    col = 1;
    count = 1;
    if (row % 2 == 0) {
        temp = row / 2;
    } else {
        temp = (row + 1) / 2;
    }
    while (col <= temp) {

        process.stdout.write(String(count) + "   ");
        count = count + jump(row, );
        col += 1;
    }
    while (col > temp && col <= row) {
        count1 = count - jump();
        process.stdout.write(String(count1) + "   ");
        col += 1;
    }

    console.log("");
    row += 1;
}

function jump(row, ) {
    let result = 0;

    return result;
}