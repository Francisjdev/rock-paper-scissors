
let playeScore = 0;
let compScore = 0;

function compSelection (){
    let option=  Math.floor((Math.random()*(4-1)+1));
    console.log(option)
    switch (option) {
        case 1 : 
            
            option = "rock"
            return  option
            break;
        case 2 : 
            
            option = "paper"
            return  option
            break;
        case 3 :
            option = "scissors"
            return  option
            break;
        default: 
            break;

    }
 
}

function playerSelection(){
    let playerOption = prompt("Choose Rock, Paper or Scissors");
    return playerOption.toLowerCase();
}

function getResults(){
    let player=  playerSelection();
    console.log(player)
    let computer = compSelection();
    console.log(computer);
    if (player == "rock" && computer == "scissors"){
        console.log("player wins")

    } else {
        console.log("computer wins")
    }
}
function playRound(){
    playerSelection();
    compSelection();
    getResults(a,b);
}