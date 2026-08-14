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

