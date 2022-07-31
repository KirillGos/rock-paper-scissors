//Select randomly an option
const getComputerChoice = () => {
    let options = ['rock','paper', 'scissors']; 
    let randomSelection = Math.floor(Math.random() * 3);
    return options[randomSelection];
}
   
  
   const result = document.querySelector('.result');


//GAME CONDITIONS 
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
       result.textContent = `ROW.  ${playerSelection} ${computerSelection}` ;
      // result.appendChild(text);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        result.textContent = "You lost Paper covers rock";
    }
      else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result.textContent = "You won Rock beats scissors"; 
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result.textContent = "You won Scissors cuts paper" ;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result.textContent ="You lost Rock beats scissors" ;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result.textContent = "You won Paper covers rock"  ;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result.textContent ='You lost Scissors cuts paper'  ;
    }
  }

  //Add event listeners to the buttons
   
  const buttons = document.querySelectorAll('button');
  const buttonsArr = Array.from(buttons);
  
  document.addEventListener('click', function(e){
    if(e.target.tagName=="BUTTON"){
     if(e.target.className == 'rock') {
        playRound(e.target.className, getComputerChoice());
     } else if (e.target.className == 'paper') {
        playRound(e.target.className, getComputerChoice());
     } else if (e.target.className == 'scissors') {
        playRound(e.target.className, getComputerChoice());
     }
    }   
  })
   
//Play the game five times and see who is the winner computer or you
  

function game(button) {
      let computerScore = 0;
   let yourScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(button, getComputerChoice());
           
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

    
