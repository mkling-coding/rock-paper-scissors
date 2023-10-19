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
const playRound = (user, cpu) => {
    if (user === "rock" && cpu === "paper") {
        cpuScore ++;
    } else if (user === "rock" && cpu === "scissors") {
        userScore ++;
    } else if (user === "paper" && cpu === "rock") {
        userScore ++;
    } else if (user === "paper" && cpu === "scissors") {
        cpuScore ++;
    } else if (user === "scissors" && cpu === "rock") {
        cpuScore ++;
    } else if (user === "scissors" && cpu === "paper") {
        userScore ++;
    } else {
        userScore += 0;
        cpuScore += 0;
    }
}

// Report winner and loser after 5 games