const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("PlayerScoreDisplay");
const computerScoreDisplay = document.getElementById("ComputerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerchoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerchoice == computerChoice){
        result = "Its a Tie!";
    }
    else{
        switch(playerchoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "You Lost";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You Lost";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "You Lost";
                break;
            }
        }
        playerDisplay.textContent = `Player : ${playerchoice}`;
        computerDisplay.textContent = `Computer : ${computerChoice}`;
        resultDisplay.textContent = result;

        resultDisplay.classList.remove("greentext","redtext");

        switch(result){
            case "You Win!":
                resultDisplay.classList.add("greentext");
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                break;
            case "You Lost":
                resultDisplay.classList.add("redtext");
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                break;
        }
    }