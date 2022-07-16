
//Select randomly an option
const getComputerChoice = () => {
    let options = ['rock','paper', 'scissors']; 
    let randomSelection = Math.floor(Math.random() * 3);
    return options[randomSelection];
}

//GAME CONDITIONS 
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `ROW. (Your answer = ${playerSelection}, computer = ${computerSelection})`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lost. Paper covers rock";
    }
      else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You won. Rock beats scissors"
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You won. Scissors cuts paper ";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lost. Rock beats scissors";
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return  "You won. Paper covers rock";
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lost. Scissors cuts paper';
    }
     else {
        return 'Enter rock,paper or scissors';
    }
  }
  
  const playerSelection = prompt("Enter rock, paper or scissors").toLowerCase().trim();
  const computerSelection = getComputerChoice();

  //Play 5 times
  function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playerSelection, computerSelection);
    }
  }
console.log(game())
