
// function calculates random number in range from 1 to 3, and then assigns string with game-value 
function getComputerChoice() {
    // get random number in rage from 1 to 3 include
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    let computerChoice;

    //asigns game-value, for further comparison
    if (randomNumber == 1) {
        return computerChoice = "rock"
    } else if (randomNumber == 2) {
        return computerChoice = "paper"
    } else {
       return computerChoice = "scissors"
    }
}

// function take user input from modal window and return game-value(power)
function getHumanChoice(){
    let humanChoice = prompt("Write your power");
    return humanChoice.toLowerCase();
}



