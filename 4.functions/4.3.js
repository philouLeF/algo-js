const readlineSync = require("readline-sync")

let n = Number(readlineSync.question("Test"))

function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

function multiRand(n) {
    arr = []
    for (i = 0; i < n; i++) {
        arr[i] = rand10()
    }
    return arr
}

console.log(multiRand(n))