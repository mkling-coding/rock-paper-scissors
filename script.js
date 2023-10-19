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
        return "You lose! Paper beats rock."
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        userScore ++;
        return "You win! Rock beats scissors."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        userScore ++;
        return "You win! Paper beats rock."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        cpuScore ++;
        return "You lose! Scissors beats paper."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        cpuScore ++;
        return "You lose! Rock beats scissors."
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        userScore ++;
        return "You win! Scissors beats paper."
    } else {
        userScore += 0;
        cpuScore += 0;
        return "Tie!"
    }
}


// Report winner and loser after 5 games