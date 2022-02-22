const readlineSync = require("readline-sync");

function askTvSerie (name, productionYear, castMembers) {
    this.name = name;
    this.productionYear = productionYear;
    this.castMembers = castMembers;
}

let favoriteSerie = new askTvSerie(
    readlineSync.question("What's your favorite serie? "), readlineSync.question("What is its production year ? "), readlineSync.question("Who are the actors and actresses ? ")
)

console.log(askTvSerie())