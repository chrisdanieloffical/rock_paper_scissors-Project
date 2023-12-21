//script.js
function getComputerChoice() {
 const randomNumber = Math.floor(Math.random() * 3)
 switch (randomNumber) {
 	case 0:
 		return 'rock';
 	case 1:
 		return 'paper';
 	case 2:
 		return 'scissors';
 	default:
 		console.error('Error: Invalid random Number');
 		return null;
 }
}


function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();

	//check for a tie
	if (playerSelection === computerSelection.toLowerCase()) {
		return "It a tie! Replay the round.";
	}

	// determine the winner
	if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
		return `You Win! ${playerSelection} beats ${computerSelection}`;
	} else {
		return`You Lose! ${computerSelection} beats ${playerSelection}.`;
	}

}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerChoice = prompt('Enter your choice (Rock, Paper, or Scissors):');
        const computerChoice = getComputerChoice();
        
        console.log(`Round ${round}:`);
        console.log(`You chose: ${playerChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        
        const result = playRound(playerChoice, computerChoice);
        console.log(result);

        // Update scores
        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }

        console.log(`Score - You: ${playerScore}, Computer: ${computerScore}\n`);
    }

    // Determine the winner of the game
    if (playerScore > computerScore) {
        console.log('Congratulations! You win the game!');
    } else if (playerScore < computerScore) {
        console.log('Sorry, you lose the game.');
    } else {
        console.log("It's a tie! No clear winner.");
    }
}

// Call the game function to start playing
game();

