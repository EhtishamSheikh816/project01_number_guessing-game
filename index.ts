#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);

console.log("Wellcome to the Number Guessing Game!");

const number = await inquirer.prompt([
  {
    message: "Please guess a number between 1-6:",
    type: "number",
    name: "userGuessedNumber",
  },
]);

if (number.userGuessedNumber === randomNumber) {
  console.log("Congratulations, you guessed correctly.");
} else {
  console.log("Game Over, you guessed wrong number.");
}
