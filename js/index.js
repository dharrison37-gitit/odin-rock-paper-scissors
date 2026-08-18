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

function getWinner(player, computer) {
    if (player === computer) {
        return "It's a tie game";
    } else if (player > computer) {
        return "You win!";
    } else {
        return "Computer wins";
    }
}

function updateScoreBoard(winner) {
    if (winner === "player") {
        runningScores.textContent = playerScore;
        gameResults.textContent = "Player wins!";
    } else if (winner === "computer") {
        runningScores.textContent = computerScore;
        gameResults.textContent = "Computer wins!";
    } else {
        gameResults.textContent = "A tie";
    }
}

function playRound(playerChoice, computerChoice) {
    if (!keepPlaying) return;
    let roundWinner;
    if (computerChoice === playerChoice) {
        roundWinner = "none";
    } else if (
        (computerChoice === "rock" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "rock")
    ) {
        playerScore++;
        roundWinner = "player";
    } else {
        computerScore++;
        roundWinner = "computer";
    }
    updateScoreBoard(roundWinner);
}

function playGame(pChoice) {
    let playerChoice = pChoice;
    let computerChoice = getComputerChoice();
    let message = "";
    let scores = "";
    let roundWinner = "";

    if (playerScore < 5) {
        playRound(playerChoice, computerChoice);
    } else {
        message = `Game Over - ${getWinner(playerScore, computerScore)}`;
        keepPlaying = false;
    }
    choices.textContent = `Player chose: ${playerChoice} | Computer chose: ${computerChoice}`;
    gameResults.textContent = message;
    runningScores.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

let playerScore = 0;
let computerScore = 0;
let keepPlaying = true;
const gameResults = document.querySelector("#game-results");
const runningScores = document.querySelector("#scores");
const playerControls = document.querySelector("#player-controls");
const choices = document.querySelector("#choices");
playerControls.addEventListener("click", (e) => {
    if (!keepPlaying) return;

    let playerChoice = e.target.id;
    playGame(playerChoice);
});
