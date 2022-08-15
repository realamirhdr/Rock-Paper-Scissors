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
    console.log(`Player chose ${playerChoice} and Computer chose ${computerChoice}`);
    
    if (playerChoice == computerChoice) {
        return "Draw";
    } else {
        if (playerChoice == "paper") {
            if (computerChoice == "scissors") {
                return "You lost";
            } else if (computerChoice == "rock") {
                return "You win";
            }
        } else if (playerChoice == "scissors") {
            if (computerChoice == "paper") {
                return "You won";
            } else if (computerChoice == "rock") {
                return "You lost";
            }
        } else if (playerChoice == "rock") {
            if (computerChoice == "paper") {
                return "You lost";
            } else if (computerChoice == "scissors") {
                return "You win";
            }
        }
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        if (playerScore > 2 || computerScore > 2) break;
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        if (result == "You win") {
            playerScore++;
        } else if (result == "You lost") {
            computerScore++;
        } else {
            i--;
        }
        console.log(`Computer: ${computerScore} | Player: ${playerScore}`);
    }
    if (playerScore > computerScore) {
        return "Player";
    } else {
        return "Computer";
    }
}

const winner = game();

console.log(`${winner} is the winner! :)`)
