let buttons = document.querySelector("#buttons")
let messageToUser = document.querySelector("#messageToUser")

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

// Checks who won and gives them the appropriate end game screen
const checkWhoWon = (userScore, cpuScore) => {
    if (userScore >= 5) {
        window.location.href = "winner.html";
    } else if (cpuScore >= 5) {
        window.location.href = "loser.html";
    } else {
        messageToUser.textContent = "Error determining winner"
    }
}

// Play a single round of rock paper scissors
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === "rock" && computerSelection === "paper") {
        cpuScore ++;
        // If user or CPU won, run checkWhoWon function
        if (userScore >= 5 || cpuScore >= 5) {
            checkWhoWon(userScore, cpuScore)
        // Else, print message to user and adjust score
        } else {
            messageToUser.textContent = "You lose! CPU chose paper, and paper beats rock.";
            document.querySelector("#cpuScore").textContent = `CPU Score: ${cpuScore}`;
        }
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        userScore ++;
        if (userScore >= 5 || cpuScore >= 5) {
            checkWhoWon(userScore, cpuScore)
        } else {
            messageToUser.textContent = "You win! CPU chose scissors, and rock beats scissors.";
            document.querySelector("#userScore").textContent = `User Score: ${userScore}`;
        }
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        userScore ++;
        if (userScore >= 5 || cpuScore >= 5) {
            checkWhoWon(userScore, cpuScore)
        } else {
            messageToUser.textContent = "You win! CPU chose rock, and paper beats rock.";
            document.querySelector("#userScore").textContent = `User Score: ${userScore}`;
        }
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        cpuScore ++;
        if (userScore >= 5 || cpuScore >= 5) {
            checkWhoWon(userScore, cpuScore)
        } else {
            messageToUser.textContent = "You lose! CPU chose scissors, and scissors beats paper.";
            document.querySelector("#cpuScore").textContent = `CPU Score: ${cpuScore}`;
        }
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        cpuScore ++;
        if (userScore >= 5 || cpuScore >= 5) {
            checkWhoWon(userScore, cpuScore)
        } else {
            messageToUser.textContent = "You lose! CPU chose rock, and rock beats scissors.";
            document.querySelector("#cpuScore").textContent = `CPU Score: ${cpuScore}`;
        }
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        userScore ++;
        if (userScore >= 5 || cpuScore >= 5) {
            checkWhoWon(userScore, cpuScore)
        } else {
            messageToUser.textContent = "You win! CPU chose paper, and scissors beats paper.";
            document.querySelector("#userScore").textContent = `User Score: ${userScore}`;
        }
    } else {
        userScore += 0;
        cpuScore += 0;
        messageToUser.textContent = "Tie!"
    }
}

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function (e) {
        let userChoice = (button.childNodes[1].textContent).toLowerCase();
        playRound(userChoice, getComputerChoice());
    })
})
