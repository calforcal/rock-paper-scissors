let userChoice;
let opponentChoice;
let playerScore = 0;
let computerScore = 0;
let rock = "rock"

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerChoice() {

    let randomInt = getRandomInt(1, 3);

    if (randomInt == 1) {
        opponentChoice = "rock";
    }
    else if (randomInt == 2) {
        opponentChoice = "paper";
    }
    else if (randomInt == 3) {
        opponentChoice = "scissors";
    }

    return opponentChoice;
}

//Buttons to Start Game, make selection, and run a round
const choiceButtons = document.body;

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
rockBtn.addEventListener("click", e => {
    playRound(computerChoice(), "rock");

});

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
paperBtn.addEventListener("click", e => {
    playRound(computerChoice(), "paper");
});

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
scissorsBtn.addEventListener("click", e => {
    playRound(computerChoice(), "scissors");
});

choiceButtons.append(rockBtn);
choiceButtons.append(paperBtn);
choiceButtons.append(scissorsBtn);

//Button to restart the game
const restartBtn = document.createElement("button");
restartBtn.textContent = "Restart";
restartBtn.addEventListener("click", e => {
    computerScore = 0;
    playerScore = 0;
    resultsDiv.removeChild(resultsText);
    resultsDiv.removeChild(resultsScore);
    resultsDiv.removeChild(restartBtn);
})


//Space for displaying results after rounds
const resultsDiv = document.body;
const resultsText = document.createElement("h3");
const resultsScore = document.createElement("h3");

//When choice is made, playRound is called, winner and current score displayed.
function playRound(computerSelection, playerSelection) {
    userChoice = playerSelection;

    if (userChoice == "rock") {
        if (computerSelection == "rock") {
            resultsText.textContent = "It's a tie. You both picked Rock";
            resultsDiv.append(resultsText);
            resultsScore.textContent = `Player: ${playerScore} and Computer: ${computerScore}`
            resultsDiv.append(resultsScore);
        }
        else if (computerSelection == "paper") {
            resultsText.textContent = "You lose! Paper beats rock.";
            resultsDiv.append(resultsText);
            computerScore++;
            resultsScore.textContent = `Player: ${playerScore} and Computer: ${computerScore}`
            resultsDiv.append(resultsScore);
        }
        else if (computerSelection == "scissors") {
            resultsText.textContent = "You win! Rock beats scissors.";
            resultsDiv.append(resultsText);
            playerScore++;
            resultsScore.textContent = `Player: ${playerScore} and Computer: ${computerScore}`
            resultsDiv.append(resultsScore);
        }
    }
    else if (userChoice == "paper") {
        if (computerSelection == "rock") {
            resultsText.textContent = "You win! Paper beats rock.";
            resultsDiv.append(resultsText);
            playerScore++;
            resultsScore.textContent = `Player: ${playerScore} and Computer: ${computerScore}`
            resultsDiv.append(resultsScore);
        }
        else if (computerSelection == "paper") {
            resultsText.textContent = "It's a tie. You both picked Paper";
            resultsDiv.append(resultsText);
            resultsScore.textContent = `Player: ${playerScore} and Computer: ${computerScore}`
            resultsDiv.append(resultsScore);
        }
        else if (computerSelection == "scissors") {
            resultsText.textContent = "You lose! Scissors beats Paper.";
            resultsDiv.append(resultsText);
            computerScore++;
            resultsScore.textContent = `Player: ${playerScore} and Computer: ${computerScore}`
            resultsDiv.append(resultsScore);
        }
    }
    else if (userChoice == "scissors") {
        if (computerSelection == "rock") {
            resultsText.textContent = "You lose! Rock beats scissors.";
            resultsDiv.append(resultsText);
            computerScore++;
            resultsScore.textContent = `Player: ${playerScore} and Computer: ${computerScore}`
            resultsDiv.append(resultsScore);
        }
        else if (computerSelection == "paper") {
            resultsText.textContent = "You win! Scissors beats Paper.";
            resultsDiv.append(resultsText);
            playerScore++;
            resultsScore.textContent = `Player: ${playerScore} and Computer: ${computerScore}`
            resultsDiv.append(resultsScore);
        }
        else if (computerSelection == "scissors") {
            resultsText.textContent = "It's a tie. You both picked Scissors.";
            resultsDiv.append(resultsText);
            resultsScore.textContent = `Player: ${playerScore} and Computer: ${computerScore}`
            resultsDiv.append(resultsScore);
        }
    }
    // Checks if game is complete and final message to restart.
    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore > computerScore) {
            resultsText.textContent = "Player Wins!";
            resultsDiv.append(resultsText);
            computerScore = 0;
            playerScore = 0;
            resultsDiv.append(resultsScore);
            resultsDiv.append(restartBtn);

        }
        else if (computerScore > playerScore) {
            resultsText.textContent = "Computer Wins";
            resultsDiv.append(resultsText);
            resultsDiv.append(restartBtn);
        }
    }
}
