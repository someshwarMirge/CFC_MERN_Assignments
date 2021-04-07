/*
Author:Someshwar Mirge

Problem Statement:

Write the pseudocode & a program to input credits of a Code for CauseCampus leader and then output the badge of the lead on the basis ofthe following criteria:

a.7500 <= credits : Tera leader
b.6000 <= credits < 7500 : Gega leader
c.4500 <= credits < 6000 : Mega leader
d.Credits < 4500 : Rising Star */

let readline = require("readline-sync");
let credits = parseInt(readline.question("Enter Credit value:"));
console.log(credits + 1);
process.stdout.write("Candidate is a ");
if (credits >= 7500) {
    console.log("Tera Leader")
} else if ((credits >= 6000) && (credits < 7500)) {
    console.log("Gega leader");
} else if ((credits >= 4500) && (credits < 6000)) {
    console.log("Mega leader");
} else if (credits < 4500) {
    console.log("Rising Star");
}