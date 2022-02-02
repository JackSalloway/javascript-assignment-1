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

// create function for one round of rock, paper, scissors
const playRound = (computerSelection) => {

    // create player input
    const playerInput = window.prompt('Rock, paper, scissors - go!', '');
    const playerSelection = playerInput.toLowerCase();


    // assign player and computer choices to values
    // tie values
    if (computerSelection === playerSelection) {
        console.log(`The computer chose ${computerSelection}, and you chose ${playerSelection}`)
        return "It's a tie!"
    }
    // computer win values
    else if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')) {
        console.log(`The computer chose ${computerSelection}, and you chose ${playerSelection}`)
        return "The computer has won this round!"
    }
    // player win values
    else if ((computerSelection === 'rock' && playerSelection === 'paper') ||
        (computerSelection === 'scissors' && playerSelection === 'rock') ||
        (computerSelection === 'paper' && playerSelection === 'scissors')) {
        console.log(`The computer chose ${computerSelection}, and you chose ${playerSelection}`)
        return "You have won the round!"
    }
    // invalid inputs
    else {
        console.log(`The computer chose ${computerSelection}, and you chose ${playerSelection}`)
        return 'Please provided a valid input'
    }
}


// console.log(playRound(computerSelection));