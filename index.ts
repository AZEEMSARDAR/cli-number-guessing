#! /usr/bin/env node 

import inquirer from "inquirer";

// 1) computer will generate a random number - Done

// 2) user input for guessing number - Done

// 3) compare user input with computer generated number and show result - Done

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
    {name: "userGuessedNumber", 
    type: "number", 
    message: "Please guess a number:"},
]);

if (answer.userGuessedNumber === randomNumber ) {
    console.log("Congratulations! you guessed a right number");
} else {
    console.log("You guessed wrong number");
}