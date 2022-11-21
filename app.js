// 1. create a array that holds rock, paper and scissor. 
const data = ["rock", "paper", "scissor"]

// 2. create a function called "Random" that generate a random index between 0 to 3.

function random(){
    return Math.floor(Math.random()*3)
}
// console.log(data[random()])

// 3. Use random function as the index of the array so that it selects any of those three choices randomly and create another funcion called getComputerChoice that return either rock , paper or scissor.

function getComputerChoice(){
    return data[random()]
}
// console.log(getComputerChoice())


// 5. write function called playRound that playes a single round of the game. the function should take two parameter as playerSelection and computerSelection.-----why tow parameter?? because these two parameter is going hold the value of our choices, if the player selects rock its gonna tell the function that the player have selected rock, and its pretty flexible, we can chose paper or scissors in next round. where the coumperSelection will hold any ranodm choices that the function gonna make.


function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissor" || playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "paper"){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    }
    else if(computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissor" || computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock" || computerSelection.toLowerCase() === "scissor" && playerSelection.toLowerCase() === "paper"){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    }else{
        console.log("It's a Tie")
    }
}

// write a function called that calls playRound 5 times in a loop. so that the games runs fine time before declaring the winner.

// the mistake i have made here, i was calling palyRound wihout any arguments. and also console.log(playRound("rock", getComputerChoice)).
function playFiveRound(){
    for (i = 0; i < 5; i++){
        playRound(prompt("Rock Paper Scissor",""), getComputerChoice())
    }
}

console.log(playFiveRound())

// colsole is still trwoing undefined at the end . don't know why . have to find it.