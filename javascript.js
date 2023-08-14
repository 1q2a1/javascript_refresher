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
    posInArrayCom = SELECTIONS.indexOf(computerSelection)
    posInArrayPlayer = SELECTIONS.indexOf(playerSelection)

    console.log(`You selected ${playerSelection}`)
    console.log(`Computer selected ${computerSelection}`)
    

    if (posInArrayCom === posInArrayPlayer){
        console.log("DRAW")
        return "draw"
    }
    else if ((posInArrayPlayer > posInArrayCom) || (posInArrayPlayer === 0 && posInArrayCom === 2)){
        console.log("YOU WIN")
        return "win"
    }
    else {
        console.log("YOU LOSE")
        return "lose"
    }
}

let game = () => {
    console.log("This is rock paper scissors, 5 rounds will be played")
    let computerScore = 0
    let playerScore = 0
    for (let i=0; i<5; i++){
        console.log(`Round ${i}`)
        console.log(`Your score: Computer score is ${playerScore}:${computerScore}`)
        let roundResult = playRound(getComputerSelection(), getPlayerSelection())
        if (roundResult === "win"){
            playerScore++ 
        }
        else if (roundResult === "lose"){
            computerScore++
        }
    }
    
    console.log(`Final Score is ${playerScore}:${computerScore}`)
    if (playerScore>computerScore){
        console.log("You Win!")
    }
    else if(playerScore<computerScore){
        console.log("You Lose!")
    }
    else{
        console.log("Draw!")
    }
}

game()

