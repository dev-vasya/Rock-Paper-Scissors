
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
function getHumanChoice() {
    let humanChoice = prompt("Write your power");
    return humanChoice.toLowerCase();
}

function playRound(computerPower, humanPower) {

    let roundScoreComputer = 0;
    let roundScoreHuman = 0;

    if (computerPower == "rock" && humanPower == "paper"
        || computerPower == "paper" && humanPower == "scissors"
        || computerPower == "scissors" && humanPower == "rock"
    ) {
        console.log(("You win! " + humanPower + " defeats " + computerPower))
        roundScoreHuman++;
    } else if (computerPower == "rock" && humanPower == "scissors"
        || computerPower == "paper" && humanPower == "rock"
        || computerPower == "scissors" && humanPower == "paper"
    ) {
        console.log(("You lose! " + humanPower + " loses " + computerPower))
        roundScoreComputer++;
    } else {
        console.log(("It's tie " + humanPower + " = " + computerPower))
        roundScoreHuman = roundScoreHuman;
        roundScoreComputer = roundScoreComputer;
    }

    if (roundScoreHuman > roundScoreComputer) {
        return "human"
    } else if (roundScoreHuman < roundScoreComputer) {
        return "computer"
    } else {
        return "tie"
    }

}
let computerSelection = getComputerChoice;
let humanSelection = getHumanChoice;

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(computerSelection(), humanSelection())

        if (result == "human") {
            humanScore++;
        } else if (result == "computer") {
            computerScore++;
        } else {
            humanScore = humanScore;
            computerScore = computerScore;
        }

        console.log("You " + humanScore + " : " + computerScore + " Computer")
    }
}

// playGame();
