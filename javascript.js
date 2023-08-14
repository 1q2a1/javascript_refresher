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

    console.log(`Computer selected ${computerSelection}`)
    console.log(`You selected ${playerSelection}`)

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



playRound(getComputerSelection(), getPlayerSelection())