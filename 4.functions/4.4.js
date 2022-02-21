/* Je mets celui-là de côté pour le moment */

const readlineSync = require("readline-sync")

let n = Number(readlineSync.question("Test"))


/* Entier entre 1 et 10 */
function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

/* Array de nombre aléatoire */
function multiRand(n) {
    arr = []
    for (i = 0; i < n; i++) {
        arr[i] = rand10()
    }
    return arr
}

/* Calcul de la moyenne */
function average(arr) {
    let arr = []
    for (i = 0; i < arr.lenght; i++) {
        let average = average + arr[i]
    }
    return average / arr.lenght
}

/* Trouver le plus petit */
function min(arr){
    let min = Math.min(...arr);
    return min
}

/* Trouver le plus grand */
function max(arr){
    let max = Math.max(...arr)
    return max
}

console.log(multiRand(n))
console.log(average(arr))
console.log(min(arr))
console.log(max(arr))