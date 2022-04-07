function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'rock';
    } else if (random === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose! Paper beats rock.';
        } else {
            return 'You win! Rock beats scissors.';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You lose! Scissors beats paper.';
        } else {
            return 'You win! Paper beats rock.';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose! Rock beats scissors.';
        } else {
            return 'You win! Scissors beats paper.';
        }
    } else {
        return 'Invalid selection.';
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        if (result === 'You win! Rock beats scissors.' || result === 'You win! Paper beats rock.' || result === 'You win! Scissors beats paper.') {
            playerScore++;
        } else if (result === 'You lose! Paper beats rock.' || result === 'You lose! Scissors beats paper.' || result === 'You lose! Rock beats scissors.') {
            computerScore++;
        }
        console.log(result);
    }
    if (playerScore > computerScore) {
        return 'You win the game!';
    } else if (playerScore < computerScore) {
        return 'You lose the game!';
    } else {
        return 'It\'s a tie!';
    }
}

console.log(game());