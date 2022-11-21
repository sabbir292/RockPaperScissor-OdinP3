const data = ["rock", "paper", "scissor"]

function random(){
    return Math.floor(Math.random()*3)
}
// console.log(data[random()])


function getComputerChoice(){
    return data[random()]
}
// console.log(getComputerChoice())

function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection == "scissor" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissor" && computerSelection == "paper"){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    }
    else if(computerSelection == "rock" && playerSelection == "scissor" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissor" && playerSelection == "paper"){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    }else{
        console.log("It's a Tie")
    }
}


function playFiveRound(){
    for (i = 0; i < 5; i++){
        playRound("paper", getComputerChoice())
    }
}

console.log(playFiveRound())