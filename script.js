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

// Play a single round of rock paper scissors

// Report winner and loser after 5 games