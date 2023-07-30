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
let userScore = 0,
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
// console.log(getComputerChoice()) ;

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
      alert(
        `Round ${roundNumber}: Player: ${userScore} Computer: ${computerScore}\nYou lose! ${computerSelection} beats ${playerSelection}`
      );
      computerScore++;
    } else {
      alert(
        `Round ${roundNumber}: Player: ${userScore} Computer: ${computerScore}\nYou win! ${playerSelection} beats ${computerSelection}`
      );
      userScore++;
    }
  } else if (playerSelectionNumber === computerSelectionNumber) {
    alert(
      `Round ${roundNumber}: Player: ${userScore} Computer: ${computerScore}\nDraw!`
    );
  } else {
    if (playerSelectionNumber > computerSelectionNumber) {
      alert(
        `Round ${roundNumber}: Player: ${userScore} Computer: ${computerScore}\nYou win! ${playerSelection} beats ${computerSelection}`
      );
      userScore++;
    } else {
      alert(
        `Round ${roundNumber}: Player: ${userScore} Computer: ${computerScore}\nYou lose! ${computerSelection} beats ${playerSelection}`
      );
      computerScore++;
    }
  }
}
// playRound(getUserChoice(), getComputerChoice());

// This function prompt user to choose a move and return the user chosen choice
function getUserChoice() {
  let userChoice = prompt(
    `Round ${roundNumber}: Player: ${userScore} Computer: ${computerScore}\nChoose a move among 'Rock', 'Paper', 'Scissors'`
  );
  userChoice = userChoice.toLowerCase();
  userChoice =
    userChoice === "rock"
      ? "Rock"
      : userChoice === "paper"
      ? "Paper"
      : userChoice === "scissors"
      ? "Scissors"
      : undefined;
  if (userChoice === undefined) {
    alert(
      `Round ${roundNumber}: Player: ${userScore} Computer: ${computerScore}\nYour chosen move is not valid! Please choose again`
    );
    return getUserChoice();
  }
  return userChoice;
}

// console.log(getUserChoice());

function game() {
  playRound(getUserChoice(), getComputerChoice());
  roundNumber++;
  playRound(getUserChoice(), getComputerChoice());
  roundNumber++;
  playRound(getUserChoice(), getComputerChoice());
  checkWinner();
  playRound(getUserChoice(), getComputerChoice());
  checkWinner();
  playRound(getUserChoice(), getComputerChoice());
  checkWinner();
}

function checkWinner() {
  if (userScore === 3 || computerScore === 3) {
    alert(`The winner is ${userScore === 3 ? "User" : "Computer"}`);
    resetGame();
  } else if (roundNumber === 5 && userScore === computerScore) {
    alert("Draw!");
    resetGame();
  } else if (roundNumber === 5) {
    alert(`The winner is ${userScore > computerScore ? "User" : "Computer"}`);
    resetGame();
  } else if (
    roundNumber === 4 &&
    ((userScore === 2 && computerScore === 0) ||
      (computerScore === 2 && userScore === 0))
  ) {
    alert(`The winner is ${userScore > computerScore ? "Player" : "Computer"}`);
    resetGame();
  } else {
    roundNumber++;
  }
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  roundNumber = 1;
  game();
}

game();
