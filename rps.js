const container = document.querySelector("#container")
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const playerResult = document.querySelector("#humanscore")
const computerResult = document.querySelector("#computerscore")
const result = document.createElement("p")

let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerChoice = Math.random()
    return computerChoice < 1/3 ? "Rock"
         : computerChoice < 2/3 ? "Paper"
         : "Scissors"
}

function hasPlayerWinRound(player, computer) {
    if (player == "Rock" & computer == "Scissors"
     || player == "Paper" & computer == "Rock"
     || player == "Scissors" & computer == "Paper") {
        return true
     } else return false
}

function getRoundResult(playerChoice) {
    const computerChoice = getComputerChoice()
    if (hasPlayerWinRound(playerChoice, computerChoice)) {
        playerScore++
        playerResult.innerText = playerScore
    } else {
        computerScore++
        computerResult.innerText = computerScore
    }
}

function battle() {
    rock.addEventListener("click", () => {
        console.log("RUN")
        getRoundResult("Rock")
    })
}
battle()
container.appendChild(result)