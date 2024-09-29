humanScore = 0
computerScore = 0



function getComputerChoice(_min , _max){
    const computerChose = Math.floor(Math.random() * 3) + 1;
if (computerChose === 1){
    return "Rock";
}if (computerChose === 2){
    return "Paper";
}else{
    return "Scissors";
}return;
}
console.log(getComputerChoice());


function getHumanChoice(){
    let humanChoice = prompt("rock, paper, or scissors");
    if (humanChoice === "rock"){
        return ("Rock");
    }if (humanChoice === "paper"){
        return ("Paper");
    }if (humanChoice === "scissor"){
        return ("Scissor");
    }else{
        return ("Try Again!")
    }
}
console.log(getHumanChoice())
