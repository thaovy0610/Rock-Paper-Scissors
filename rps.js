const container = document.querySelector("#container")
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const playerResult = document.querySelector("#humanscore")
const computerResult = document.querySelector("#computerscore")
const result = document.querySelector("#round-result")
const winnerMsg = document.querySelector("#game-result")
const optionBtn = document.querySelector("#option-btn")
const resetBtn = document.querySelector("#reset-btn")

let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerChoice = Math.random()
    return computerChoice < 1/3 ? "Rock"
         : computerChoice < 2/3 ? "Paper"
         : "Scissors"
}

function hasPlayerWinRound(player, computer) {
    return (player == "Rock" && computer == "Scissors"
     || player == "Paper" && computer == "Rock"
     || player == "Scissors" && computer == "Paper") 
}

function getRoundResult(playerChoice) {
    const computerChoice = getComputerChoice()
    if (hasPlayerWinRound(playerChoice, computerChoice)) {
        playerScore++
        playerResult.innerText = playerScore
        result.textContent = `You win! ${playerChoice} beats ${computerChoice}`
    } else if (playerChoice == computerChoice) {
        result.textContent = `Draw, both chose ${playerChoice}`
    } else {
        computerScore++
        computerResult.innerText = computerScore
        result.textContent = `You lose! ${computerChoice} beats ${playerChoice}`
    }
    if (playerScore == 5) {
        winnerMsg.textContent = "You have won the game !!!!"
        optionBtn.style.display = 'none'
        resetBtn.style.display = 'block'
    }
    if (computerScore == 5) {
        winnerMsg.textContent = "You have won the game !!!!"
        optionBtn.style.display = 'none'
        resetBtn.style.display = 'block'
    }
}

function resetGame() {
    playerScore = 0
    computerScore = 0
    playerResult.textContent = 0
    computerResult.textContent = 0
    result.textContent = ""
    winnerMsg.textContent = ""
    optionBtn.style.display = 'block'
    resetBtn.style.display = 'none'
}

rock.addEventListener("click", () => {
    getRoundResult("Rock")
})
paper.addEventListener("click", () => {
    getRoundResult("Paper")
})
scissors.addEventListener("click", () => {
    getRoundResult("Scissors")
})

resetBtn.addEventListener("click", resetGame)

// container.appendChild(result)
// container.appendChild(winnerMsg)
// container.appendChild(resetBtn)