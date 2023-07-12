let array = ['Rock', 'Paper', 'Scissors'];
let playerWins = 0;
let compWins = 0;

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
            alert ('You win! Rock beats scissors');
            playerWins += 1;
        } else if (computerSelection === 'PAPER') {
            alert ('You lose! Paper beats rock');
            compWins += 1;
        } else {
            alert ('It is a tie!');
        }
    }
    if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            alert ('You win! Paper beats rock');
            playerWins += 1;
        } else if (computerSelection === 'SCISSORS') {
            alert ('You lose! Scissors beat paper');
            compWins += 1;
        } else {
            alert ('It is a tie!');
        }
    }
    if (playerSelection === "SCISSORS") {
        if (computerSelection === 'PAPER') {
            alert ('You win! Scissors beat paper');
            playerWins += 1;
        } else if (computerSelection === 'ROCK') {
            alert ('You lose! Rock beats scissors');
            compWins += 1;
        } else {
            alert ('It is a tie!');
        }
    }
}

function game () {
    let numGames = 0;
    while (numGames < 5) {
        let playerSelection = prompt('Please enter an option to play: ');
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        numGames++;
        alert('Computer: ' + compWins + ' Player: ' + playerWins);
    }
    alert('Game finished!');
}
/*let playerSelection = prompt('Please enter an option to play: ');
let computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));*/
console.log(game())