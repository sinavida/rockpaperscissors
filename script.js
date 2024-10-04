function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    return choices [Math.floor(Math.random() * 3)]
}


function getHumanChoice(){
    return prompt("rock, paper, or scissors").toLowerCase();
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice , computerChoice){
    if (humanChoice === computerChoice || computerChoice === humanChoice) {
        return console.log(`You tied! You both picked ${computerChoice}!`);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerChoice++;
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    } else {
        alert("Please enter rock, paper, or scissors.");
    }
}


for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Human: ${humanScore}\nComputer: ${computerScore}`);
}


winner()


function winner(){
    if (computerScore > humanScore){
        return console.log(`The Machines have taken over! \n Human: ${humanScore}\nComputer: ${computerScore}`);
    }else if (computerScore < humanScore){
        return console.log(`We Have Risen Victorious! \n Human: ${humanScore} \n Computer: ${computerScore}`);
    }else{
        console.log(`Wow Tie! \n Human: ${humanScore}\n Computer: ${computerScore}`);
    };
}

}

playGame()


