const readlineSync = require("readline-sync");

let userNumb = new Number (readlineSync.question("Give me a number between 1 and 7 "))

if (userNumb == 1) {
    console.log("Lundi !")
} else if (userNumb == 2) {
    console.log ("Mardi !")
}  else if (userNumb == 3) {
    console.log ("Mercredi !")
}  else if (userNumb == 4) {
    console.log ("Jeudi !")
}  else if (userNumb == 5) {
    console.log ("Vendredi !")
}  else if (userNumb == 6) {
    console.log ("Samedi !")
}  else if (userNumb == 7) {
    console.log ("Dimanche !")
}