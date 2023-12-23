let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    // check for a tie
    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie! Replay the round.";
    }

    // determine the winner
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// Get references to the buttons and result/score displays
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const resultDisplay = document.getElementById("resultDisplay");
const scoreDisplay = document.getElementById("scoreDisplay");

// Add event listeners to the buttons
rockBtn.addEventListener("click", function () {
    const result = playRound("rock", computerSelection());
    updateDisplay(result);
});

paperBtn.addEventListener("click", function () {
    const result = playRound("paper", computerSelection());
    updateDisplay(result);
});

scissorsBtn.addEventListener("click", function () {
    const result = playRound("scissors", computerSelection());
    updateDisplay(result);
});

// Function to generate computer selection (rock, paper, or scissors)
function computerSelection() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to update the display with results and scores
function updateDisplay(result) {
    resultDisplay.textContent = result;
    scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    // Check for a winner
    if (playerScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

// Function to announce the winner
function announceWinner() {
    if (playerScore === 5) {
        resultDisplay.textContent = "Congratulations! You are the winner!";
    } else {
        resultDisplay.textContent = "Computer wins. Better luck next time!";
    }

    // Reset scores for a new game
    playerScore = 0;
    computerScore = 0;
}
