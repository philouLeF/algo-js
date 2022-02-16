const readlineSync = require("readline-sync");

let name = readlineSync.question("Please tell me your name");
let firstName = readlineSync.question("And your first name ?");
let city = readlineSync.question("I finaly need to know where you live")

console.log("Your name is " + name + " " + firstName + " and you live in " + city + ".")