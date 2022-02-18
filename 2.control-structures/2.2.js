const readlineSync = require("readline-sync");

let min = new Number (readlineSync.question("Give me a number "));
let max = new Number (readlineSync.question("Another one but greater "));
let current = new Number (readlineSync.question("A last one number between "));

if (current > min && current < max ) {
    console.log(current);
}

if (min > max) {
    console.log("I have to tell you that you... Hum... Oh look there, a bird !")
}