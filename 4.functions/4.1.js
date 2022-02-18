const readlineSync = require("readline-sync")

let length = Number(readlineSync.question("What is the lenght in cm? "))
let width = Number(readlineSync.question("What is the width in cm? "))

function calcSurface (length, width) {
    return length * width
}

console.log(calcSurface(length, width) + "cm²")