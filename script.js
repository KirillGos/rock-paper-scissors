//Select randomly an option
const getComputerChoice = () => {
    let options = ['rock','paper', 'scissors']; 
    let randomSelection = Math.floor(Math.random() * 3);
    return options[randomSelection];
}
   
  
   const yourResult = document.querySelectorAll('span')[0];
   const computerResult = document.querySelectorAll('span')[1];
  const result1 = document.querySelector('.result');


//GAME CONDITIONS 
function playRound(playerSelection, computerSelection) {
   
    if (playerSelection == computerSelection) {
      return `ROW.  ${playerSelection} ${computerSelection}` ;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    
        return "You lost Paper covers rock";
    }
      else if (playerSelection === 'rock' && computerSelection === 'scissors') {
 
        return "You won Rock beats scissors"; 
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
   
        return "You won Scissors cuts paper" ;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
   
        return "You lost Rock beats scissors" ;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
       
        return"You won Paper covers rock"  ;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    
        return 'You lost Scissors cuts paper' ;
    }
  }

  //Add event listeners to the buttons
   
       let yourScore = 0;
      let computerScore =  0;
  const resultLi = document.querySelector('#result-li');
  document.addEventListener('click', function(e){
     
    if(e.target.parentElement.className=="buttons"){
      console.log(e.target, e.target.className)
      if (yourScore < 5 && computerScore < 5) {
       
        let choice = e.target.className;
         let result = playRound(choice, getComputerChoice());
            
            // The second statement rock, paper
            if (result === "You lost Paper covers rock" ) {
               computerScore += 1;
               yourResult.innerText = yourScore;
               computerResult.innerText = computerScore;
               resultLi.innerText = result;
            } 

            // The third statement rock, scissors
            else if (result ===  "You won Rock beats scissors") {
              // Create new container
              resultLi.innerText = result;
              yourScore += 1;
              yourResult.innerText = yourScore;
              computerResult.innerText = computerScore;      
           } 

           // The fourth statement scissors, paper
            else if (result === "You won Scissors cuts paper") {
              resultLi.innerText = result;
              yourScore += 1;
              yourResult.innerText = yourScore;
              computerResult.innerText = computerScore;
           } 

            // The fifth statement scissors, rock
            else if (result === "You lost Rock beats scissors") {
              computerScore += 1;
              yourResult.innerText = yourScore;
              computerResult.innerText = computerScore;
              resultLi.innerText = result;
           } 

              // The sixth statement paper, rock
            else if (result === "You won Paper covers rock") {
              resultLi.innerText = result;
              yourScore += 1;
              yourResult.innerText = yourScore;
              computerResult.innerText = computerScore;
            }

              // The seventh statement paper, scissors
            else if (result === 'You lost Scissors cuts paper' ) {
                computerScore += 1;
                yourResult.innerText = yourScore;
                computerResult.innerText = computerScore;
                resultLi.innerText = result;
             }  else {
                    resultLi.innerText = result;
                    yourResult.innerText = yourScore;
                    computerResult.innerText = computerScore;
             }


    } 
    
        if (computerScore === 5 || yourScore === 5) {
            if (computerScore > yourScore){
                alert( `You lost.Your score: ${yourScore}, computer score: ${computerScore} `)
            } else if (computerScore < yourScore){
                alert( `You won.Your score: ${yourScore}, computer score: ${computerScore} `)
            }
        }
    }
});
   
  const reset = document.getElementById('reset');
  reset.addEventListener('click', function(){
    yourScore = 0;
    computerScore = 0;
    yourResult.innerText = 0;
    computerResult.innerText = 0;
    if(resultLi.innerText !== "The result")
    resultLi.innerText = "The result";
})
//Play the game five times and see who is the winner computer or you
  

