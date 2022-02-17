const readlineSync = require("readline-sync");

let userFavNumb = new Number (readlineSync.question("What's your favorite number ? "))

while (userFavNumb != 42) {
    let userFavNumb = new Number (readlineSync.question("Are you sure? "))
    if (userFavNumb == 42) {
        console.log("Désolé")
        break
    }
}