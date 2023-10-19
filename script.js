// Initialize scores
let userScore = 0;
let cpuScore = 0;

// Get computer choice
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Get user choice
let userChoice = prompt("Enter rock, paper, or scissors: ").toLowerCase();

// Play a single round of rock paper scissors
const playRound = (playerSelection, computerSelection) => {
    // console.log(`Player choice: ${playerSelection}`)
    // console.log(`CPU choice: ${computerSelection}`)
    if (playerSelection === "rock" && computerSelection === "paper") {
        cpuScore ++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        userScore ++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        userScore ++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        cpuScore ++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        cpuScore ++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        userScore ++;
    } else {
        userScore += 0;
        cpuScore += 0;
    }
}

// Report winner and loser after 5 games