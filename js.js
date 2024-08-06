//Declare variable
let humanScore = 0;
let computerScore = 0;
let computerSelection;
let humanSelection;

// Win and lose function
function countt(humanScore){
if (humanScore == 5) {
   alert("You are win!")
   window.location.reload()
} else if (computerScore == 5){
    alert("You are lose!")
    window.location.reload()
}
}

//ComputerChoice
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


//Condition
function playRound(humanChoice, computerChoice) {
    countt(humanScore)
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

//DOM and Event Listeners
const rock = document.querySelector("#Rock")
const paper = document.querySelector("#Paper")
const scissors = document.querySelector("#Scissors")
const myScore = document.querySelector(".yourScore")
const myScore2 = myScore.textContent;
const enemyScore = document.querySelector(".computerScore")
const enemyScore2 = myScore.textContent;
const counter = document.querySelector(".counter")
const counter2 = counter.textContent;

  rock.addEventListener("click", () => {
    humanSelection ="ROCK";
    computerSelection = getComputerChoice().toUpperCase();
    playRound(humanSelection, computerSelection);
    myScore.innerHTML = `${myScore2} <br><br>&nbsp&nbsp&nbsp&nbsp${humanSelection}`
    enemyScore.innerHTML = `${enemyScore2} <br><br>&nbsp&nbsp&nbsp&nbsp${computerSelection}`
    counter.innerHTML = `${counter2} <br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${humanScore}:${computerScore}`
  })

  paper.addEventListener("click", () => {
    humanSelection ="PAPER"
    computerSelection = getComputerChoice().toUpperCase();
    playRound(humanSelection, computerSelection);
    myScore.innerHTML = `${myScore2} <br><br>&nbsp&nbsp&nbsp&nbsp${humanSelection}`
    enemyScore.innerHTML = `${enemyScore2} <br><br>&nbsp&nbsp&nbsp&nbsp${computerSelection}`
    counter.innerHTML = `${counter2} <br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${humanScore}:${computerScore}`
  })

  scissors.addEventListener("click", () => {
    humanSelection ="SCISSORS"
    computerSelection = getComputerChoice().toUpperCase();
    playRound(humanSelection, computerSelection);
    myScore.innerHTML = `${myScore2} <br><br>&nbsp${humanSelection}`
    enemyScore.innerHTML = `${enemyScore2} <br><br>&nbsp&nbsp&nbsp&nbsp${computerSelection}`
    counter.innerHTML = `${counter2} <br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${humanScore}:${computerScore}`
  })
