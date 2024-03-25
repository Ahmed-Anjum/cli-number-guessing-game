#!/usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a randon number
// 2) User input for guessing number
// 3)Compare user input with user input & generate answer
const randomNumber = Math.floor(Math.random()* 10+1);

// const randomNumber = 13
const answers = await inquirer.prompt([
{
name: "userGuessedNumber",
type: "number",
message: "Please guess a number between 1-10",

}
]);
if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations ! You Guessed Right Number")
}
else console.log("You Guessed Wrong Number")
console.log(answers)


