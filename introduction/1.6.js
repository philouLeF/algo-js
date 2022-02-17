const readlineSync = require("readline-sync");

let a = new Number(readlineSync.question("Please enter a integer: "));
let b = new Number(readlineSync.question("And anoter one: "));

console.log("Here is the rest of the division: " + a % b)