function getComputerChoice(min , max){
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