console.log("Hello world!");

function getRandomNumber(min, max) {
    return parseInt(Math.floor(Math.random() * (max - min) + min));
}

function getComputerChoice() {
    let computerChoiceNumber = getRandomNumber(1, 4);

    if (computerChoiceNumber == 1) {
        return "rock";
    } else if (computerChoiceNumber == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose between Rock, Paper and Scissors: ");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playRound(playerChoice, computerChoice) {
    console.log(playerChoice);
    console.log(computerChoice);
    if (playerChoice == computerChoice) {
        return "Draw";
    } else {
        if (playerChoice == "paper") {
            if (computerChoice == "scissors") {
                return "You lost, Scissors beat Paper! :)";
            } else if (computerChoice == "rock") {
                return "You win, Paper beats Rock! :)";
            }
        } else if (playerChoice == "scissors") {
            if (computerChoice == "paper") {
                return "You won, Scissors beat Paper! :)";
            } else if (computerChoice == "rock") {
                return "You lost, Rock beats Scissors! :)";
            }
        } else if (playerChoice == "rock") {
            if (computerChoice == "paper") {
                return "You lost, Paper beats Rock! :)";
            } else if (computerChoice == "scissors") {
                return "You win, Rock beats Scissors! :)";
            }
        }
    }
}

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));
