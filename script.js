
let playeScore = 0;
let compScore = 0;
// codigo de la com para seleccionar su  opcion)
function compSelection (){
    let option=  Math.floor((Math.random()*(4-1)+1));
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

function humanSelection(){
    let playerOption = prompt("Choose Rock, Paper or Scissors");
    return playerOption.toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    // your code here!

    if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"){
        console.log("player wins")
        
        playeScore++;
        console.log("humans wins " + playeScore)

    } else if (humanChoice === computerChoice){
        console.log("tie")
        console.log(playeScore)
        console.log(compScore)
    } else {
        console.log("pc wins")
        
        compScore ++;
        console.log("pc wins " + compScore)
    }
  }

while (playeScore < 5 && compScore <5){
    playRound(humanSelection(), compSelection());
}
