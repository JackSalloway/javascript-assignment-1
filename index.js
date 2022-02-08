// create score variables
let computerScore = 0;
let playerScore = 0;

// create round counter
let round = 0;

// button query selectors & click events
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        round++;
        // e.target.value = the player selection
        playRound(e.target.value);
    });
})

// container query selector
const resultsContainer = document.querySelector('.results-container');

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
        console.log(`The computer chose ${computerSelection}, and you chose ${playerSelection}`)
        console.log("It's a tie!");
        return appendTie(computerSelection, playerSelection);
    }
    // computer win values
    else if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')) {
        console.log(`The computer chose ${computerSelection}, and you chose ${playerSelection}`)
        console.log("The computer has won this round!");
        appendWin(computerSelection, playerSelection);
        return computerScore++
    }
    // player win values
    else if ((computerSelection === 'rock' && playerSelection === 'paper') ||
        (computerSelection === 'scissors' && playerSelection === 'rock') ||
        (computerSelection === 'paper' && playerSelection === 'scissors')) {
        console.log(`The computer chose ${computerSelection}, and you chose ${playerSelection}`)
        console.log("You have won the round!");
        appendLoss(computerSelection, playerSelection)
        return playerScore++
    }
    // invalid inputs
    else {
        console.log(`The computer chose ${computerSelection}, and you chose ${playerSelection}`)
        console.log('Please provide a valid input');
    }
}

appendTie = (computerValue, playerValue) => {
    const tie = document.createElement('div');

    tie.classList.add('results');
    tie.textContent = `Round: ${round} - You chose ${playerValue}. The computer chose ${computerValue}. It's a tie!`;
    return resultsContainer.appendChild(tie);
}

appendWin = (computerValue, playerValue) => {
    const win = document.createElement('div');

    win.classList.add('results');
    win.textContent = `Round: ${round} - You chose ${playerValue}. The computer chose ${computerValue}. You have won the round!`;
    return resultsContainer.appendChild(win);
}

appendLoss = (computerValue, playerValue) => {
    const loss = document.createElement('div');

    loss.classList.add('results');
    loss.textContent = `Round: ${round} - You chose ${playerValue}. The computer chose ${computerValue}. you have lost the round!`;
    return resultsContainer.appendChild(loss);
}

// removed first to five function for now as getting basic dom manipulation working first

// create first to 5 loop function
// const firstToFive = () => {
//     while (computerScore < 5 && playerScore < 5) {
//         playRound();
//     }
// }
