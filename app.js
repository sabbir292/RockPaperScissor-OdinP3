

let playerScore = 0
let computerScore = 0


const data = ["rock", "paper", "scissor"]

//******************************* */
function random() {
    return Math.floor(Math.random() * 3)
}
function getComputerChoice() {
    return data[random()]
}



function playRound(playerSelection, computerSelection) {
    
    if (this.textContent === "✊") {
        playerSelection = "rock"
    } else if (this.textContent === "🖐️") {
        playerSelection = "paper"
    } else {
        playerSelection = "scissor"
    }
    computerSelection = getComputerChoice()


    if (playerSelection === computerSelection) {
        showResult.textContent = "it's a tie"
    }

    else if (playerSelection === "rock" && computerSelection === "scissor" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "✌️" && computerSelection === "paper") {
        showResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`
        playerScore++
        playerCount.textContent = `Player : ${playerScore}`

    }
    else if (computerSelection === "rock" && playerSelection === "scissor" || computerSelection === "paper" && playerSelection === "rock" || computerSelection === "scissor" && playerSelection === "paper") {

        showResult.textContent = `You lose!!! ${computerSelection} beats ${playerSelection}`
        computerScore++
        computerCount.textContent = `Computer : ${computerScore}`
    }
    showSelection(playerSelection, computerSelection)
    activeModal(playerScore, computerScore)
}


//***********convert to emoji ***************/

function showSelection(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            console.log("fist")
            playerChoice.textContent = "✊"
            break;
        case "paper":
            playerChoice.textContent = "🖐️"
            break;
        case "scissor":
            playerChoice.textContent = "✌️"
        default:
            break;
    }

    switch (computerSelection) {
        case "rock":
            computerChoice.textContent = "✊"
            break;
        case "paper":
            computerChoice.textContent = "🖐️"
            break;
        case "scissor":
            computerChoice.textContent = "✌️"
            break;

        default:
            break;
    }
}

//**********UI************* */

let buttons = document.querySelectorAll(".btn")
buttons.forEach(btn => btn.addEventListener("click", playRound))

const playerCount = document.querySelector(".player")
const computerCount = document.querySelector(".computer")

const showResult = document.querySelector(".show-result h2")
const finalMessage = document.querySelector(".message")

let computerChoice = document.querySelector(".computer-selection")
let playerChoice = document.querySelector(".player-selection")
const showModal = document.querySelector(".modal")
const playAgainbtn = document.querySelector(".modal-btn")

//******************Reset Game****************** */

function activeModal(playerScore, computerScore) {
    if (playerScore + computerScore === 5 || playerScore === 5 || computerScore === 5) {
        showModal.classList.add("show-modal")
        playAgainbtn.addEventListener("click", reset)
        playerScore > computerScore ? finalMessage.textContent = "You won" : finalMessage.textContent = "You lost"
    }
}


playAgainbtn.addEventListener("click", reset)

function reset() {
    playerScore = 0
    computerScore = 0
    playerCount.textContent = `player : ${playerScore}`
    computerCount.textContent = `player : ${computerScore}`
    playerChoice.textContent = "❓"
    computerChoice.textContent = "❓"
    showResult.textContent = "Most wins in 5 round wins"
    showModal.classList.remove("show-modal")

}