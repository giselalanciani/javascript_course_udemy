const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOISE = "ROCK";

let gameIsRunning = false;

const getPlayerChoise = function() {
    const selection = prompt (`${ROCK}, ${PAPER} OR ${SCISSORS}?`, "").toUpperCase();
    if (
      selection !== ROCK &&
      selection !== PAPER &&
      selection !== SCISSORS  
    ) {
        alert (`Invalid choice! We chose ${DEFAULT_USER_CHOISE} for you!`);
        return DEFAULT_USER_CHOISE;
    }
    return selection;
}


startGameBtn.addEventListener("click", function() {
    if (gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log ("Game is starting...");
    const playerSelection = getPlayerChoise();
    console.log(playerSelection); 
});