let humanScore = 0;
let computerScore = 0;
playGame(5)

function playGame(round){
    for (let i = 0; i < round; i++){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        if (humanSelection == "nothing"){break}
        playRound(humanSelection,computerSelection)
    }
    if (humanScore < computerScore){console.log("Computer Win! Suck it noob!")}
    else if (humanScore > computerScore){console.log("Human Win! AI will come after your job!")}
    else {console.log("It's a tie!")}
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
   if (choice == 0){
    return "rock"
   }
   else if (choice == 1){
    return "scissors"
   }
   else {
    return "paper"
   }
}

function generate(){
    for (let i = 0 ;i < 10; i++) {
        console.log(getComputerChoice())
    }
}

function promptShow(){
    let text = prompt("Rock, Paper or Scissors?")
    if (text == null | text == undefined)
        {return "nothing"}
    else {
    return text.toLowerCase()}
}

function getHumanChoice(){
    let text = promptShow()
    if (text=="rock" || text.toLowerCase()=="paper" || text.toLowerCase()=="scissors"){
        return text
    }
    else {
        console.log("Invalid Choice")
        return
    }
 }


 function playRound(humanChoise, computerChoice){
    if(humanChoise == "nothing"){return "nothing"}

    else if (humanChoise == "rock" && computerChoice == "scissors"){
        console.log("Human wins! Rock beats Scissors")
        humanScore++
        console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore)
    }
    else if (humanChoise == "rock" && computerChoice == "paper"){
        console.log("Computer wins! Paper beats Rock")
        computerScore++
        console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore)
    }
    else if (humanChoise == "scissors" && computerChoice == "paper"){
        console.log("Human wins! Scissors beats Rock")
        humanScore++
        console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore)
    }
    else if (humanChoise == "scissors" && computerChoice == "rock"){
        console.log("Computer wins! Rock beats Scissors")
        computerScore++
        console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore)
    }
    else if (humanChoise == "paper" && computerChoice == "rock"){
        console.log("Human wins! Paper beats Rock")
        humanScore++
        console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore)
    }
    else if (humanChoise == "paper" && computerChoice == "scissors"){
        console.log("Computer wins! Scissors beats Paper")
        computerScore++
        console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore)
    }
    else if (humanChoise == computerChoice){
        console.log("Draw! Both choices are the same")
        console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore)
    }
    else {
        return "nothing"
    }
 }

