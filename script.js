
let userScore = 0;
let computerScore = 0;


function getUserInput(){
    let userInput = prompt("Rock (R), Paper (P), or Scissors (S): ");
    if (userInput.toLowerCase() != "r" && userInput.toLowerCase() != "p" && userInput.toLowerCase() != "s" ){
        console.log("Incorrect value");
        getUserInput();
    }
    return userInput;
}

function generateComputerInput(){
    let options = ['r', 's', 'p'];
    let index = Math.floor(Math.random() * 3);
    return options[index];
}


console.log(generateComputerInput())