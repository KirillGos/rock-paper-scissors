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
        return "You lost Paper covers rock";
    }
      else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You won Rock beats scissors"
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You won Scissors cuts paper";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lost Rock beats scissors";
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return  "You won Paper covers rock";
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lost Scissors cuts paper';
    }
     else {
        return 'Enter rock,paper or scissors';
    }
  }

    const playerSelection = "rock";
    const computerSelection = getComputerChoice();

//Play the game five times and see who is the winner computer or you
    let computerScore = 0;
    let yourScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        let result = playRound(prompt('Enter paper, scissors or rock').trim().toLowerCase(), getComputerChoice());
           
            if (result  === 'You won Rock beats scissors' ||
                result === "You won Scissors cuts paper" || 
                result === "You won Paper covers rock") {
                     yourScore +=  1;
            }  else if (result  === "You lost Rock beats scissors" ||
                result === "You lost Paper covers rock" || 
                result === 'You lost Scissors cuts paper') {
                    computerScore += 1;
            } 
              console.log(result)
    }  
        if (computerScore > yourScore) {
            console.log("You lost");
        } else if (yourScore > computerScore) {
             console.log("You won");
        } else {
            console.log('Equal ')
        }
}

      game()

  