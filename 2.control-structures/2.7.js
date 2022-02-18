const readlineSync = require("readline-sync");

let n = Number (readlineSync.question("Please give me a number "))
let sum = 0

for (i = 0; i < n; i++) {
    let a = Number (readlineSync.question("Another "));
    sum += a;
    if (i == n) {
        break
    }
}


console.log(sum);