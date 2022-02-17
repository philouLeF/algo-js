const readlineSync = require("readline-sync");

let a = new Number(readlineSync.question("Please enter a decimal number: "));
let b = new Number(readlineSync.question("And anoter one: "));

a = Math.trunc(a)

console.log("Here is your multiplication: " + a * b)