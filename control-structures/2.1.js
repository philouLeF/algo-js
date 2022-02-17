const readlineSync = require("readline-sync");

let userAge = new Number (readlineSync.question("How old are you ? "));

if (userAge >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are no yet an adult");
}