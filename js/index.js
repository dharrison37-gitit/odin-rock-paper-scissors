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
        gameResults.textContent = "Player wins round.";
    } else if (winner === "computer") {
        runningScores.textContent = computerScore;
        gameResults.textContent = "Computer wins round";
    } else {
        gameResults.textContent = "Round Tie";
    }
}

function playRound(playerChoice, computerChoice) {
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
        if (playerScore >= PLAYER_MATCH_SCORE) {
            const gameOverEvent = new CustomEvent("gameOver", {
                detail: {
                    winner:
                        playerScore === computerScore
                            ? "It's a tie."
                            : playerScore > computerScore
                              ? "You won!"
                              : "Computer won.",
                },
            });
            window.dispatchEvent(gameOverEvent);
            keepPlaying = false;
            return;
        }
    } else {
        computerScore++;
        roundWinner = "computer";
    }
    updateScoreBoard(roundWinner);
}

function playGame(pChoice) {
    if (!keepPlaying) return;
    let computerChoice = getComputerChoice();
    let message = "";
    let scores = "";
    let roundWinner = "";

    playRound(pChoice, computerChoice);

    choices.textContent = `Player chose: ${pChoice} | Computer chose: ${computerChoice}`;
    runningScores.textContent = `Scores: Player: ${playerScore} | Computer: ${computerScore}`;
}

let playerScore = 0;
let computerScore = 0;
let keepPlaying = true;

const PLAYER_MATCH_SCORE = 5;
const gameResults = document.querySelector("#game-results");
const runningScores = document.querySelector("#scores");
const playerControls = document.querySelector("#player-controls");
const choices = document.querySelector("#choices");

playerControls.addEventListener("click", (e) => {
    if (!keepPlaying) return;

    const button = e.target.closest("button");
    if (!button) return;

    let playerChoice = button.id;
    playGame(playerChoice);
});

window.addEventListener("gameOver", (e) => {
    gameResults.textContent = `Game Over: ${e.detail.winner}`;
});
