let array = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    let randInt = Math.floor(Math.random() * array.length);
    let choice = array[randInt];
    return choice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection === 'ROCK') {
        if (computerSelection === 'SCISSORS'){
            return ('You win! Rock beats scissors');
        } else if (computerSelection === 'PAPER') {
            return ('You lose! Paper beats rock');
        } else {
            return ('It is a tie!');
        }
    }
    if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            return ('You win! Paper beats rock');
        } else if (computerSelection === 'SCISSORS') {
            return ('You lose! Scissors beat paper');
        } else {
            return ('It is a tie!');
        }
    }
    if (playerSelection === "SCISSORS") {
        if (computerSelection === 'PAPER') {
            return ('You win! Scissors beat paper');
        } else if (computerSelection === 'ROCK') {
            return ('You lose! Rock beats scissors');
        } else {
            return ('It is a tie!');
        }
    }
}

let playerSelection = "rock";
let computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));