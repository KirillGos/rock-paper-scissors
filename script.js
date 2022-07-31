//Select randomly an option
const getComputerChoice = () => {
    let options = ['rock','paper', 'scissors']; 
    let randomSelection = Math.floor(Math.random() * 3);
    return options[randomSelection];
}
   
  
   const result1 = document.querySelector('.result');


//GAME CONDITIONS 
function playRound(playerSelection, computerSelection) {
    let yourScore = 0;
    let computerScore = 0;
    if (playerSelection == computerSelection) {
      return `ROW.  ${playerSelection} ${computerSelection}` ;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        return "You lost Paper covers rock";
    }
      else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        yourScore += 1;
        return "You won Rock beats scissors"; 
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        yourScore += 1;
        return "You won Scissors cuts paper" ;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        return"You lost Rock beats scissors" ;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        yourScore += 1;
        return"You won Paper covers rock"  ;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        return 'You lost Scissors cuts paper' ;
    }
  }

  //Add event listeners to the buttons
   
 
  
  document.addEventListener('click', function(e){
    if(e.target.tagName=="BUTTON"){
     if(e.target.className == 'rock') {
        result1.textContent = playRound(e.target.className,  getComputerChoice());
     } else if (e.target.className == 'paper') {
        result1.textContent =  playRound(e.target.className,  getComputerChoice());
     } else if (e.target.className == 'scissors') {
        result1.textContent =  playRound(e.target.className,  getComputerChoice());
     }
    }   
  })
   
//Play the game five times and see who is the winner computer or you
  

