const readlineSync = require("readline-sync");

console.log('Hello there ! Welcome to the world of Pokémon. My name is Rowan, people just calls me Pokémon Professor.');
let gender = readlineSync.question("Tell me a little bit about yourself. What is your genre ? ");
console.log("All right, so you're a " + gender)
let name = readlineSync.question("What's your name ? ");
console.log("It's nice to meet you " + name + ".");
let friendName = readlineSync.question("So this boy here, it's your friend, isn't ? What's his name ? ")
console.log("You're about to start a new journey " + name + ". I am sure that " + friendName + " and you will discover things about world, yourself and Pokémon !")