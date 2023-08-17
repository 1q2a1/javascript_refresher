const SELECTIONS = ["rock", "paper", "scissors"]

let getComputerSelection = () => {
    let randNum = Math.floor(Math.random()*3)
    let selection = SELECTIONS[randNum]
    return selection
}

let getPlayerSelection = () => {
    let playerInput
    while (true){
        playerInput = prompt("what would u like to select?")
        if (!SELECTIONS.includes(playerInput.toLowerCase())){
            console.log("Invalid Selection")
        }
        else{
            break
        }
    }
    return playerInput.toLowerCase()
}

let playRound = (computerSelection, playerSelection) => {
    let posInArrayCom
    let posInArrayPlayer

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
    console.log(lastMatchDetails)
    lastMatchDetails.textContent=fullDescrip
    return result
}


const buttons = document.querySelectorAll("button")
buttons.forEach((btn) => btn.addEventListener('click', function() {
    const playerSelection = this.textContent.toLowerCase()
    const computerSelection = getComputerSelection()
    playRound(computerSelection, playerSelection)
}))


// let game = () => {
//     console.log("This is rock paper scissors, 5 rounds will be played")
//     let computerScore = 0
//     let playerScore = 0
//     for (let i=0; i<5; i++){
//         console.log(`Round ${i}`)
//         console.log(`Your score: Computer score is ${playerScore}:${computerScore}`)
//         let roundResult = playRound(getComputerSelection(), getPlayerSelection())
//         if (roundResult === "win"){
//             playerScore++ 
//         }
//         else if (roundResult === "lose"){
//             computerScore++
//         }
//     }
    
//     console.log(`Final Score is ${playerScore}:${computerScore}`)
//     if (playerScore>computerScore){
//         console.log("You Win!")
//     }
//     else if(playerScore<computerScore){
//         console.log("You Lose!")
//     }
//     else{
//         console.log("Draw!")
//     }
// }