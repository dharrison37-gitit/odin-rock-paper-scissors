"use srtict";

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else if (randomNumber === 3) {
        return "scissors";
    }
}

// function getHumanChoice() {
//     let choice = prompt("Choose: rock, paper, or scissors");
//     return choice;
// }

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let message = "";

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("Tie!");
        } else if (
            (computerChoice === "rock" && humanChoice === "paper") ||
            (computerChoice === "paper" && humanChoice === "scissors") ||
            (computerChoice === "scissors" && humanChoice === "rock")
        ) {
            message = `You win! ${humanChoice} beats ${computerChoice}`;
            // console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            message = `You lose! ${computerChoice} beats ${humanChoice}`;
            // console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        gameResults.textContent = message;
    }

    const gameResults = document.querySelector("#game-results");
    const playerControls = document.querySelector("#player-controls");
    playerControls.addEventListener("click", (e) => {
        playRound(e.target.id, getComputerChoice());
        gameResults.textContent = message;
    });

    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        message = "You have won the game!";
        console.log("You have won the game!");
    } else if (humanScore === computerScore) {
        message = "The game is a draw";
        console.log("The game is a draw");
    } else {
        message = "The computer has won the game";
        console.log("The computer has won the game.");
    }
}

// let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playGame();
