"use srtict"

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

function getHumanChoice() {
    let choice = prompt("Choose: rock, paper, or scissors"); 
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
    
        if(humanChoice === computerChoice){
            console.log("Tie!")
        } else if(computerChoice === "rock" && humanChoice === "paper" 
            || computerChoice === "paper" && humanChoice === "scissors"
            || computerChoice === "scissors" && humanChoice === "rock") {
                
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    
    }

    for(let i = 1; i < 5; i++) {
        playRound(humanChoice, computerChoice);
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
    }

    console.log(`Human: ${humanScore} | Computer: ${computerScore}`)
    if(humanScore > computerScore) {
        console.log("You have won the game!");
    } else if (humanScore === computerScore) {
        console.log("The game is a draw");
    } else {
        console.log("The computer has won the game.");
    }
}


let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playGame();
