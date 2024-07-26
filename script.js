
let userScore = 0;
let computerScore = 0;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let info = document.querySelectorAll(".info h3")


rock.addEventListener("click", () => {
    playRound('r');
    changeInfo()
});

paper.addEventListener("click", () => {
    playRound('p');
    changeInfo()
});

scissors.addEventListener("click", () => {
    playRound('s');
    changeInfo()
});

function changeInfo(){
    info[2].textContent = `User score: ${userScore}` 
    info[3].textContent = `Computer score: ${computerScore}`;
}


function generateComputerInput(){
    let options = ['r', 's', 'p'];
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

function playRound(userMove){
    let userPlay = userMove
    let computerPlay = generateComputerInput();
    let winner = ""

    if (userPlay == computerPlay){
        info[1].textContent = "There has been a tie, no points gained";
        console.log("There has been a tie, no points gained");
    }
    else{
        if (userPlay == 'r' && computerPlay == 's') {userScore++; winner = 'u';}
        if (userPlay == 'r' && computerPlay == 'p') {computerScore++; winner = 'c';}
        if (userPlay == 'p' && computerPlay == 'r') {userScore++; winner = 'u';}
        if (userPlay == 'p' && computerPlay == 's') {computerScore++; winner = 'c';}
        if (userPlay == 's' && computerPlay == 'p') {userScore++; winner = 'u';}
        if (userPlay == 's' && computerPlay == 'r') {computerScore++; winner = 'c';}
    
        console.log("User: " + userPlay + "  Computer: " + computerPlay)
        winner == 'u' ? info[1].textContent = "You win this round!" : info[1].textContent = "You lose this round";
    }
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
