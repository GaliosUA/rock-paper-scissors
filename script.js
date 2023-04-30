function getComputerChoice () {
 const randomChoice = ["rock", "paper", "scissors"];
 return randomChoice[Math.floor(Math.random()*randomChoice.length)];    
}

function round(playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        console.log(`You chose ${playerSelection} and computer chose ${computerSelection}. It's a tie!`);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(`You chose ${playerSelection} and computer chose ${computerSelection}. You've won!`);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(`You chose ${playerSelection} and computer chose ${computerSelection}. You've won!`);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`You chose ${playerSelection} and computer chose ${computerSelection}. You've won!`);
    } else {
        console.log(`You chose ${playerSelection} and computer chose ${computerSelection}. You've lost!`);
    }
}

const computerSelection = getComputerChoice();