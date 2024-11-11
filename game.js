let humanScore = 0;
let computerScore = 0;
let round = 0
let userActiveInput = false;

const options = document.createElement("div")
options.classList.add("options")
const input = document.querySelector(".input")
const scoreboard = document.querySelector(".score")
const currentscore = document.createElement("div")
const text = document.createElement("h2")
const computertext = document.querySelector(".computer")


const rock = document.createElement("button")
rock.textContent = "Rock"


const paper = document.createElement("button")
paper.textContent = "Paper"


const scissors = document.createElement("button")
scissors.textContent = "Scissors"

input.appendChild(options)
scoreboard.appendChild(text)
scoreboard.appendChild(currentscore)


options.appendChild(rock)
options.appendChild(paper)
options.appendChild(scissors)

rock.addEventListener("click", () => {
    const humanChoice = getHumanChoice("Rock")
    Gameplay(humanChoice)
})
paper.addEventListener("click", () => {
    const humanChoice = getHumanChoice("Paper")
    Gameplay(humanChoice)
})
scissors.addEventListener("click", () => {
    const humanChoice = getHumanChoice("Scissors")
    Gameplay(humanChoice)
})

UpdateScoreBoard(humanScore,computerScore,"pick your move")

function Gameplay(humanChoice){
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)
    round += 1;
    endGame();
}

function endGame(){
    if (humanScore === 5 || computerScore === 5){
    switch (true){
        case (humanScore > computerScore):
            UpdateScoreBoard(humanScore, computerScore,"Congrats! You beat the computer, " + humanScore + " to " + computerScore + " !")
            alert("Congrats! You beat the computer")
            break
        case (humanScore < computerScore):
            UpdateScoreBoard(humanScore, computerScore,"Aww man! The Computer beat you, " + computerScore + " to " + humanScore + " !");
            alert("Aww man! The Computer beat you")
            break
        case (humanScore == computerScore):
            UpdateScoreBoard(humanScore, computerScore,"It's a tie, " + humanScore + " to " + computerScore + " !")
            alert("It's a tie!")
            break
    }
    }
}
function computerMove(text){
    computertext.textContent = text
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
   if (choice == 0){
    computerMove("Computer choose Rock")
    return "Rock"
   }
   else if (choice == 1){
    computerMove("Computer choose Scissors")
    return "Scissors"
   }
   else {
    computerMove("Computer choose Paper")
    return "Paper"
   }
}

function generate(){
    for (let i = 0 ;i < 10; i++) {
        console.log(getComputerChoice())
    }
}

function UpdateScoreBoard(humanScore,computerScore,extratext){
    text.textContent = extratext
    currentscore.textContent = "Human Score: " + humanScore + " | Computer Score: " + computerScore
}


function getHumanChoice(choice){
    console.log("Human choose " + choice)
    return choice    
}


 function playRound(humanChoise, computerChoice){
    if(humanChoise == "nothing"){return "nothing"}

    else if (humanChoise == "Rock" && computerChoice == "Scissors"){
        humanScore++
        UpdateScoreBoard(humanScore,computerScore,"Human wins! Rock beats Scissors")
    }
    else if (humanChoise == "Rock" && computerChoice == "Paper"){
        computerScore++
        UpdateScoreBoard(humanScore,computerScore, "Computer wins! Paper beats Rock")
    }
    else if (humanChoise == "Scissors" && computerChoice == "Paper"){
        humanScore++
        UpdateScoreBoard(humanScore,computerScore, "Human wins! Scissors beats Rock")
    }
    else if (humanChoise == "Scissors" && computerChoice == "Rock"){
        computerScore++
        UpdateScoreBoard(humanScore,computerScore, "Computer wins! Rock beats Scissors")
    }
    else if (humanChoise == "Paper" && computerChoice == "Rock"){
        humanScore++
        UpdateScoreBoard(humanScore,computerScore, "Human wins! Paper beats Rock")
    }
    else if (humanChoise == "Paper" && computerChoice == "Scissors"){
        computerScore++
        UpdateScoreBoard(humanScore,computerScore, "Computer wins! Scissors beats Paper")
    }
    else if (humanChoise === computerChoice){
        UpdateScoreBoard(humanScore,computerScore, "Draw! Both choices are the same")
    }
    else{
        console.log("something wrong")
    }
}
