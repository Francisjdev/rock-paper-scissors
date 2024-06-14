
let playeScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll('#btn')

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let nombre =  e.target.getAttribute
        ('name');
       console.log(nombre);
       humanSelection(nombre);
        playRound(humanSelection(),compSelection())

    })
});
// codigo de la com para seleccionar su  opcion)
function compSelection (){
    let option=  Math.floor((Math.random()*(4-1)+1));
    switch (option) {
        case 1 : 
            
            option = "rock"
            console.log(option)
            return  option
            break;
        case 2 : 
            
            option = "paper"
            console.log(option)
            return  option
            break;
        case 3 :
            option = "scissors"
            console.log(option)
            return  option
            break;
        default: 
            break;

    }
 
}

function humanSelection(nombre){
    let playerOption = nombre;
    return playerOption
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

