
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  if (roundsPlayed >= 10) {
    endGame();
    return;
  }

  const computerSelection = computerPlay();

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    document.getElementById('result').textContent = 'You win!';
  } else if (playerSelection === computerSelection) {
    document.getElementById('result').textContent = 'It\'s a tie!';
  } else {
    computerScore++;
    document.getElementById('result').textContent = 'Computer wins!';
  }

  updateScore();
  roundsPlayed++;
}

function updateScore() {
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  updateScore();
  document.getElementById('result').textContent = '';
}

function endGame() {
  let winner;
  if (playerScore > computerScore) {
    winner = 'Player';
  } else if (playerScore < computerScore) {
    winner = 'Computer';
  } else {
    winner = 'No one';
  }

  document.getElementById('result').textContent = `Game over! ${winner} wins!`;
  disableButtons();
}

function disableButtons() {
  const buttons = document.querySelectorAll('.choice');
  buttons.forEach(button => {
    button.disabled = true;
  });
}

