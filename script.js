const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function(){round(this.textContent, getComputerChoice())}));

function getComputerChoice () {
 const randomChoice = ["rock", "paper", "scissors"];
 return randomChoice[Math.floor(Math.random()*randomChoice.length)];    
}

function round(playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        const result = document.querySelector('.result');
        result.textContent = (`You chose ${playerSelection} and computer chose ${computerSelection}. It's a tie!`);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        const result = document.querySelector('.result');
        result.textContent = (`You chose ${playerSelection} and computer chose ${computerSelection}. You've won!`);
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        const result = document.querySelector('.result');
        result.textContent = (`You chose ${playerSelection} and computer chose ${computerSelection}. You've won!`);
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        const result = document.querySelector('.result');
        result.textContent = (`You chose ${playerSelection} and computer chose ${computerSelection}. You've won!`);
        playerScore++;
    } else {
        const result = document.querySelector('.result');
        result.textContent = (`You chose ${playerSelection} and computer chose ${computerSelection}. You've lost!`);
        computerScore++;
    }

    const winner = document.querySelector('.winner');
    winner.textContent = `Player score is: ${playerScore}\nComputer score is: ${computerScore}`;
    
    if (playerScore == 5) {
        const finalScore = document.querySelector('.finalScore');
        finalScore.textContent = (`You've won ${playerScore} rounds against computer's ${computerScore} rounds. You've won the game!`);
    } else if (computerScore == 5) {
        const finalScore = document.querySelector('.finalScore');
        finalScore.textContent = (`You've won ${playerScore} rounds against computer's ${computerScore} rounds. Computer has won the game!`);
    }
}
