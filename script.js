
let userScore = 0;
let computerScore = 0;


function getUserInput(){
    let userInput = String(prompt("Rock (R), Paper (P), or Scissors (S): "));

    while (userInput.toLowerCase() != "r" && userInput.toLowerCase() != "p" && userInput.toLowerCase() != "s" ){
        console.log("Incorrect value");
        userInput = String(prompt("Rock (R), Paper (P), or Scissors (S): "));
    }
    return userInput;
}

function generateComputerInput(){
    let options = ['r', 's', 'p'];
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

function playRound(){
    let userPlay = getUserInput();
    let computerPlay = generateComputerInput();
    let winner = ""

    if (userPlay == computerPlay){
        console.log("There has been a tie, no points gained")
    }
    else{
        if (userPlay == 'r' && computerPlay == 's') {userScore++; winner = 'u';}
        if (userPlay == 'r' && computerPlay == 'p') {computerScore++; winner = 'c';}
        if (userPlay == 'p' && computerPlay == 'r') {userScore++; winner = 'u';}
        if (userPlay == 'p' && computerPlay == 's') {computerScore++; winner = 'c';}
        if (userPlay == 's' && computerPlay == 'p') {userScore++; winner = 'u';}
        if (userPlay == 's' && computerPlay == 'r') {computerScore++; winner = 'c';}
    }
    console.log("User: " + userPlay + "  Computer: " + computerPlay)
    winner == 'u' ? console.log("You win this round!") : console.log("You lose this round");
}

function game(){
    while (userScore < 3 && computerScore < 3){
        playRound();
        console.log("Current score: User: " + userScore + " Computer: " + computerScore)
    }
    if (userScore > computerScore){
        console.log("You win!");
    }
    else {
        console.log("You lose");
    }
}
game();
