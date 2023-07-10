let array = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    let randInt = Math.floor(Math.random() * array.length);
    let choice = array[randInt];
    return choice;
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){

}