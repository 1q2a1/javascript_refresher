const SELECTIONS = ["rock", "paper", "scissors"]

let computerScore = 0
let playerScore = 0
let playerScoreDisp = document.querySelector(".player-score")
let computerScoreDisp = document.querySelector(".computer-score")

let getComputerSelection = () => {
    let randNum = Math.floor(Math.random()*3)
    let selection = SELECTIONS[randNum]
    return selection
}


let playRound = (computerSelection, playerSelection) => {

    const playerSelDescrip = `You selected ${playerSelection}`
    const computerSelDescrip = `Computer selected ${computerSelection}`
    const selectionsDescrip = `${playerSelDescrip} - ${computerSelDescrip} - `

    let resultDescrip
    let result 
    if (playerSelection === computerSelection){
        resultDescrip = "DRAW"
        result = "draw"
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors")||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
    ){
        resultDescrip = "YOU WIN"
        result = "win"
    }
    else {
        resultDescrip = "YOU LOSE"
        result = "lose"
    }

    const fullDescrip = `${selectionsDescrip}${resultDescrip}`
    const lastMatchDetails = document.querySelector(".last-match-details")
    lastMatchDetails.textContent=fullDescrip
    return result
}


const buttons = document.querySelectorAll("button")
buttons.forEach((btn) => btn.addEventListener('click', function() {
    const playerSelection = this.textContent.toLowerCase()
    const computerSelection = getComputerSelection()
    let roundResult = playRound(computerSelection, playerSelection)
    if (roundResult === "win"){
        playerScore++ 
    }
    else if (roundResult === "lose"){
        computerScore++
    }
    playerScoreDisp.textContent = `Your Score: ${playerScore}` 
    computerScoreDisp.textContent = `Computer Score: ${computerScore}`
}))










// if (playerScore>computerScore){
//     console.log("You Win!")
// }
// else if(playerScore<computerScore){
//     console.log("You Lose!")
// }
// else{
//     console.log("Draw!")
// }
