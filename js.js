function getComputerChoice() {
    let computer = (Math.random().toFixed(1) * 90);
    if (computer < 30) {
        return "rock"
    } else if (computer < 60) {
        return "paper"
    } else {
        return "scissors"
    }
}

let quest;
function getHumanChoice() {
    return prompt("Your choice (Rock / Paper / Scissors): ");
}
/*Increment every try because user win*/
let humanScore = 0;
/*Increment every try because user Computer*/
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        humanScore++;
        return console.log("You win! Rock beats Scissors") ;
    } else if(humanChoice == "ROCK" && computerChoice == "PAPER") {
        computerScore++;
        return console.log("You lose! Paper beats Rock")
    } else if(humanChoice == "ROCK" && computerChoice == "ROCK") {
        return console.log("Draw! ROCK and ROCK")
    }
    else if(humanChoice == "PAPER" && computerChoice == "ROCK") {
        humanScore++;
        return console.log("You win! PAPER beats ROCK")
    } else if(humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        computerScore++;
        return console.log("You lose! SCISSORS beats PAPER")
    } else if(humanChoice == "PAPER" && computerChoice == "PAPER") {
        return console.log("Draw! PAPER and PAPER")
    }
    else if(humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        humanScore++;
        return console.log("You win! Scissors beats Paper")
    } else if(humanChoice == "SCISSORS" && computerChoice == "ROCK") {
        return console.log("You lose! Rock beats Scissors")
    } else if(humanChoice == "SCISSORS" && computerChoice == "SCISSORS") {
        return console.log("Draw! Scissors and Scissors")
    }
}

function playGame(humanScore) {

}


let humanSelection = getHumanChoice().toUpperCase();
let computerSelection = getComputerChoice().toUpperCase();
console.log(humanSelection)
console.log(computerSelection)

counter = humanScore

playGame(humanScore)
playRound(humanSelection, computerSelection)

console.log(humanScore)
console.log(computerScore)