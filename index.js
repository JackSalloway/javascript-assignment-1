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

const playRound = (playerSelection, computerSelection) => {
    // tie assigned values to computerPlay result and return to console

    if (computerSelection === 'rock' && playerSelection === 'paper') {
        return 'Computer chose rock - You win!';
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return 'Computer chose rock - You lose.';
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return 'Computer chose scissors - You win!';
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return 'Computer chose scissors - You lose.';
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return 'Computer chose paper - You win!';
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return 'Computer chose paper - You lose.';
    } else if (computerSelection === playerSelection) {
        return "It's a tie!";
    } else {
        console.log(computerSelection);
        console.log(playerSelection);
        return 'Please provide a valid input';
    }
}

const playerInput = window.prompt('Rock, paper, scissors - go!', '');
const playerSelection = playerInput.toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));