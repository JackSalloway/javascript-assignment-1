// create score variables
let computerScore = 0;
let playerScore = 0;

// create round state
let roundState = '';

// create round counter
let round = 0;

// container query selector
const resultsContainer = document.querySelector('.results-container');

// button query selectors & click events
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        // early returns to prevent the game being played once either side reaches 5 points
        if (computerScore === 5) {
            return console.log('The computer has won the game.');
        } else if (playerScore === 5) {
            return console.log('The player has won the game.');
        };

        round++;
        // e.target.value = the player selection
        playRound(e.target.value);
    });
})

// create function for one round of rock, paper, scissors
const playRound = (playerSelection) => {

    // generate computer selection
    const computerPlay = () => {
        // generate an integer between 0 and 2
        let computerChoice = Math.floor(Math.random() * 3);
        // assign computer choice to rock, paper or scissors and return
        if (computerChoice === 0) {
            return 'rock';
        } else if (computerChoice === 1) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }

    // assign computer selection to a variable
    const computerSelection = computerPlay();



    // assign player and computer choices to values
    // tie values
    if (computerSelection === playerSelection) {
        console.log(`Computer choice : ${computerSelection}. Player choice : ${playerSelection}`)
        console.log("Round tied.");
        roundState = 'tie';
        return appendElement(computerSelection, playerSelection);
    }
    // computer win values
    else if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')) {
        console.log(`Computer choice : ${computerSelection}. Player choice : ${playerSelection}`)
        console.log("Computer won the round.");
        roundState = 'loss';
        appendElement(computerSelection, playerSelection);
        incrementScore();

        // return computerScore++;
    }
    // player win values
    else if ((computerSelection === 'rock' && playerSelection === 'paper') ||
        (computerSelection === 'scissors' && playerSelection === 'rock') ||
        (computerSelection === 'paper' && playerSelection === 'scissors')) {
        console.log(`Computer choice : ${computerSelection}. Player choice : ${playerSelection}`)
        console.log("Player won the round");
        roundState = 'win';
        appendElement(computerSelection, playerSelection);
        incrementScore();

        // return playerScore++;
    }
    // invalid inputs
    else {
        console.log(`The computer chose ${computerSelection}, and you chose ${playerSelection}`)
        console.log('Please provide a valid input');
    }
}

appendElement = (computerValue, playerValue) => {
    const result = document.createElement('div');

    if (roundState === 'tie') {
        result.classList.add('results');
        result.textContent = `Round: ${round} - You chose ${playerValue}. The computer chose ${computerValue}. It's a tie!`;
        return resultsContainer.appendChild(result);
    } else if (roundState === 'loss') {
        result.classList.add('results');
        result.textContent = `Round: ${round} - You chose ${playerValue}. The computer chose ${computerValue}. you have lost the round!`;
        return resultsContainer.appendChild(result);
    } else if (roundState === 'win') {
        result.classList.add('results');
        result.textContent = `Round: ${round} - You chose ${playerValue}. The computer chose ${computerValue}. You have won the round!`;
        return resultsContainer.appendChild(result);
    } else {
        console.log('Something went wrong with the win state.')
    }
}

incrementScore = () => {
    const computerScoreboard = document.querySelector('#computer');
    const playerScoreboard = document.querySelector('#player');
    const gameEnd = document.createElement('div');

    if (roundState === 'loss') {
        computerScore++;
        computerScoreboard.textContent = `${computerScore}`;
        if (computerScore === 5) {
            gameEnd.classList.add('results');
            gameEnd.textContent = 'The Computer has reached 5 points - The robots have won!';
            return resultsContainer.appendChild(gameEnd);
        };
    } else if (roundState === 'win') {
        playerScore++;
        playerScoreboard.textContent = `${playerScore}`;
        if (playerScore === 5) {
            gameEnd.classList.add('results');
            gameEnd.textContent = 'You have reached 5 points - You won the game!';
            return resultsContainer.appendChild(gameEnd);
        }
    }
};