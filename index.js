// create score variables
let computerScore = 0;
let playerScore = 0;

// create player choice variable
let playerSelection = '';

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
    }
    // computer win values
    else if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')) {
        console.log(`The computer chose ${computerSelection}, and you chose ${playerSelection}`)
        console.log("The computer has won this round!");
        return computerScore++
    }
    // player win values
    else if ((computerSelection === 'rock' && playerSelection === 'paper') ||
        (computerSelection === 'scissors' && playerSelection === 'rock') ||
        (computerSelection === 'paper' && playerSelection === 'scissors')) {
        console.log(`The computer chose ${computerSelection}, and you chose ${playerSelection}`)
        console.log("You have won the round!");
        return playerScore++
    }
    // invalid inputs
    else {
        console.log(`The computer chose ${computerSelection}, and you chose ${playerSelection}`)
        console.log('Please provide a valid input');
    }
}


const buttons = document.querySelectorAll('.button');

console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = e.target.value;
        playRound(playerSelection);
    });
})

// removed first to five function for now as getting basic dom manipulation working first

// create first to 5 loop function
// const firstToFive = () => {
//     while (computerScore < 5 && playerScore < 5) {
//         playRound();
//     }
// }
