let humanScore = 0;
let computerScore = 0;

function play() {
while (humanScore < 5 && computerScore < 5) {
    playGame();
    sex(humanScore, computerScore);
 } 
}
function sex(humanScore, computerScore) {
    if (humanScore == 5) {
        alert("You are win!!!")
    } else if (computerScore == 5){
        alert("You are lose!!!")
    }
}


function playGame() {
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

    function getHumanChoice() {
        return prompt("Your choice (Rock / Paper / Scissors): ");
    }


function playRound(humanChoice, computerChoice) {
    if(humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        ++humanScore;
        return console.log("You win! Rock beats Scissors") ;
    } else if(humanChoice == "ROCK" && computerChoice == "PAPER") {
        ++computerScore;
        return console.log("You lose! Paper beats Rock")
    } else if(humanChoice == "ROCK" && computerChoice == "ROCK") {
        return console.log("Draw! ROCK and ROCK")
    }
    else if(humanChoice == "PAPER" && computerChoice == "ROCK") {
        ++humanScore;
        return console.log("You win! PAPER beats ROCK")
    } else if(humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        ++computerScore;
        return console.log("You lose! SCISSORS beats PAPER")
    } else if(humanChoice == "PAPER" && computerChoice == "PAPER") {
        return console.log("Draw! PAPER and PAPER")
    }
    else if(humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        ++humanScore;
        return console.log("You win! Scissors beats Paper")
    } else if(humanChoice == "SCISSORS" && computerChoice == "ROCK") {
        ++computerScore
        return console.log("You lose! Rock beats Scissors")
    } else if(humanChoice == "SCISSORS" && computerChoice == "SCISSORS") {
        return console.log("Draw! Scissors and Scissors")
    }
}


let humanSelection = getHumanChoice().toUpperCase();
let computerSelection = getComputerChoice().toUpperCase();
console.log("Your choice: " + humanSelection)
console.log("Computer choice: " + computerSelection)

playRound(humanSelection, computerSelection)

console.log("Your score: " + humanScore)
console.log("Computer score: " + computerScore)

}
