/*
1. Prompt user to start new game

2. There are 5 rounds each game

3. Initialize two variables that store user's score and computer's score
start from 0

4. Initialize a variable that stores the current round number starts with 1

5. Generate a random move that's either 'Rock', 'Paper', 'Scissors'
as the computer's move 

6. Get user's move through prompt and store it in a variable and check if it's a valid value

7. Compare user's move with the computer's move following
the Rock Paper Scissors game rules

8. Display the winner of the round and increment the winner's score

9. Check if either player's score has reached 3
    If true announce that player as the winner of the game and end the game
    and return to the 1st step
    If false check if the round number has reached 5
        If true compare player's score with computer's score and announce
        the winner of the game and end the game
        If false increment the round number and return to step 5
*/
// Initialize game meta(user's score, computer's score, round number)
let playerScore = 0,
  computerScore = 0;
let roundNumber = 1;

// Function that generates a random move for computer
function getComputerChoice() {
  let choiceNumber = getRandomInt(3);
  return choiceNumber === 0
    ? "Rock"
    : choiceNumber === 1
    ? "Paper"
    : "Scissors";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Function for each round in a game
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let playerSelectionNumber =
    playerSelection === "rock" ? 0 : playerSelection === "paper" ? 1 : 2;
  let computerSelectionNumber =
    computerSelection === "rock" ? 0 : computerSelection === "paper" ? 1 : 2;
  if (
    (playerSelectionNumber === 0 && computerSelectionNumber === 2) ||
    (playerSelectionNumber === 2 && computerSelectionNumber === 0)
  ) {
    if (playerSelectionNumber > computerSelectionNumber) {
      displayResult(
        `Round ${roundNumber}: You lose! ${computerSelection} beats ${playerSelection}`
      );
      computerScore++;
    } else {
      displayResult(
        `Round ${roundNumber}: You win! ${playerSelection} beats ${computerSelection}`
      );
      playerScore++;
    }
  } else if (playerSelectionNumber === computerSelectionNumber) {
    displayResult(`Round ${roundNumber}: Draw!`);
  } else {
    if (playerSelectionNumber > computerSelectionNumber) {
      displayResult(
        `Round ${roundNumber}: You win! ${playerSelection} beats ${computerSelection}`
      );
      playerScore++;
    } else {
      displayResult(
        `Round ${roundNumber}: You lose! ${computerSelection} beats ${playerSelection}`
      );
      computerScore++;
    }
  }
}

function checkWinner() {
  if (playerScore === 3 || computerScore === 3) {
    displayWinner(`The winner is ${playerScore === 3 ? "Player" : "Computer"}`);
    resetGame();
  } else if (roundNumber === 5 && playerScore === computerScore) {
    displayWinner("Draw!");
    resetGame();
  } else if (roundNumber === 5) {
    displayWinner(
      `The winner is ${playerScore > computerScore ? "Player" : "Computer"}`
    );
    resetGame();
  } else if (
    roundNumber === 4 &&
    ((playerScore === 2 && computerScore === 0) ||
      (computerScore === 2 && playerScore === 0))
  ) {
    displayWinner(
      `The winner is ${playerScore > computerScore ? "Player" : "Computer"}`
    );
    resetGame();
  } else {
    roundNumber++;
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundNumber = 1;
}

// Revisiting Rock Paper Scissors

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const clearBtn = document.querySelector("#clearBtn");

clearBtn.addEventListener("click", () => {
  resultContainer.textContent = "";
  resetGame();
  gameStatus();
});

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
  checkWinner();
  gameStatus();
});
paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  checkWinner();
  gameStatus();
});
scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
  checkWinner();
  gameStatus();
});
const resultContainer = document.querySelector(".ResultContainer");

function displayResult(resultArgument) {
  resultContainer.textContent = resultArgument;
}

function displayWinner(winnerAnnouncement) {
  const announcement = document.createElement("p");
  announcement.textContent = winnerAnnouncement;
  resultContainer.appendChild(announcement);
}

const currentRound = document.querySelector("#currentRound");
const currentPlayerScore = document.querySelector("#currentPlayerScore");
const currentComputerScore = document.querySelector("#currentComputerScore");

function gameStatus() {
  currentRound.textContent = `Round ${roundNumber}`;
  currentPlayerScore.textContent = `Player score: ${playerScore}`;
  currentComputerScore.textContent = `Computer score: ${computerScore}`;
}
