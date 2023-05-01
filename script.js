const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

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
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(`You chose ${playerSelection} and computer chose ${computerSelection}. You've won!`);
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`You chose ${playerSelection} and computer chose ${computerSelection}. You've won!`);
        playerScore++;
    } else {
        console.log(`You chose ${playerSelection} and computer chose ${computerSelection}. You've lost!`);
        computerScore++;
    }
}

function game(numberOfRounds) {
    let counter = 0;
    while (counter < numberOfRounds) {
        let userInput = prompt("Please enter rock, paper or scissors: ");
        round(userInput);
        counter++;
    }
    if (playerScore === computerScore) {
        console.log(`You've won ${playerScore} rounds against computer's ${computerScore} rounds. It's a tie!`);
    } else if (playerScore > computerScore) {
        console.log(`You've won ${playerScore} rounds against computer's ${computerScore} rounds. You've won the game!`);
    } else {
        console.log(`You've won ${playerScore} rounds against computer's ${computerScore} rounds. Computer has won the game!`);
    }
}

game(5);
