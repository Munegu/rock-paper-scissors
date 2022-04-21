let playerScore = 0;
let computerScore = 0;
const displayPlayerScore = document.querySelector('.my-score');
const displayComputerScore = document.querySelector('.computer-score');
const displayResult = document.querySelector('.result');

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

function game(playerSelection){
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    displayResult.textContent = result;
    if (result === 'You win! Rock beats scissors.' || result === 'You win! Paper beats rock.' || result === 'You win! Scissors beats paper.') {
        playerScore++;
        displayPlayerScore.textContent = playerScore;
    } else if (result === 'You lose! Paper beats rock.' || result === 'You lose! Scissors beats paper.' || result === 'You lose! Rock beats scissors.') {
        computerScore++;
        displayComputerScore.textContent = computerScore;
    }

    if (5 === playerScore) {
        window.alert('You win the game!');
        clearGame();
    }

    if (5 === computerScore) {
        window.alert('You lose the game!');
       clearGame();
    }
  
}

function clearGame() {
    playerScore = 0;
    computerScore = 0;
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
    displayResult.textContent = null;
}


const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function() {
    playerChoice = button.outerText.toLowerCase();
    game(playerChoice);
}));
