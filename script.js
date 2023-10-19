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
const game = () => {
    for (let i = 0; i < 5; i++) {
        // Get user choice
        let userChoice = prompt("Enter rock, paper, or scissors: ").toLowerCase();
        // Play round
        console.log(playRound(userChoice, getComputerChoice()));
    }

    if (userScore > cpuScore) {
        console.log(`You won the game with a score of ${userScore} to ${cpuScore}`)
    } else if (cpuScore > userScore) {
        console.log(`You lost the game with a score of ${userScore} to ${cpuScore}`)
    } else {
        console.log("The game was a tie!")
    }
}

game();