const readlineSync = require("readline-sync");

let aX = readlineSync.question("Enter x-axis of A: ")
let aY = readlineSync.question("Enter y-axis of A: ")
let bX = readlineSync.question("Enter x-axis of B: ")
let bY = readlineSync.question("Enter y-axis of B: ")

function calcDistance(aX, aY, bX, bY) {
    let x = aX - bX;;
    let y = aY - bY;
    return Math.sqrt(x * x + y * y)
}

console.log(calcDistance(aX, aY, bX, bY));