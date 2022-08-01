//Select randomly an option
const getComputerChoice = () => {
    let options = ['rock','paper', 'scissors']; 
    let randomSelection = Math.floor(Math.random() * 3);
    return options[randomSelection];
}
   
  
   const yourResult = document.querySelectorAll('p')[0];
   const computerResult = document.querySelectorAll('p')[1];
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

  document.addEventListener('click', function(e){
     
    if(e.target.parentElement.className=="buttons"){
      console.log(e.target, e.target.className)
      if (yourScore < 5 && computerScore < 5) {
       
        let choice = e.target.className;
         let result = playRound(choice, getComputerChoice());
            
            // The second statement rock, paper
             if (result === "You lost Paper covers rock" ) {
               // Create new container
               let newDiv = document.createElement('div');
               // Create new list item for result
               let listItem = document.createElement('li')
               //inserting the result into the list item
               listItem.innerText = result;
               // displaying the score
                computerScore += 1;
               //Show results 

               yourResult.innerText = yourScore;
               computerResult.innerText = computerScore;
               newDiv.appendChild(listItem); 
               result1.appendChild(newDiv);
              
            } 

            // The third statement rock, scissors
            else if (result ===  "You won Rock beats scissors") {
              // Create new container
              let newDiv = document.createElement('div');
              // Create new list item for result
              let listItem = document.createElement('li')
              //inserting the result into the list item
              listItem.innerText = result;
              let score = document.createElement('li');
              // displaying the score
             yourScore += 1;
              
              newDiv.appendChild(listItem);
              yourResult.innerText = yourScore;
               computerResult.innerText = computerScore;
              result1.appendChild(newDiv);
              
           } 

           // The fourth statement scissors, paper
           else if (result === "You won Scissors cuts paper") {
            // Create new container
            let newDiv = document.createElement('div');
            // Create new list item for result
            let listItem = document.createElement('li')
            //inserting the result into the list item
            listItem.innerText = result;
            let score = document.createElement('li');
            // displaying the score
            yourScore += 1;
            newDiv.appendChild(listItem);
            yourResult.innerText = yourScore;
               computerResult.innerText = computerScore;
            result1.appendChild(newDiv);
           
         } 

            // The fifth statement scissors, rock
            else if (result === "You lost Rock beats scissors") {
              // Create new container
              let newDiv = document.createElement('div');
              // Create new list item for result
              let listItem = document.createElement('li')
              //inserting the result into the list item
              listItem.innerText = result;
              let score = document.createElement('li');
              // displaying the score
              computerScore += 1;
              
              newDiv.appendChild(listItem);
              yourResult.innerText = yourScore;
               computerResult.innerText = computerScore;
              result1.appendChild(newDiv);
              
           } 

              // The sixth statement paper, rock
              else if (result === "You won Paper covers rock") {
                // Create new container
                let newDiv = document.createElement('div');
                // Create new list item for result
                let listItem = document.createElement('li')
                //inserting the result into the list item
                listItem.innerText = result;
                let score = document.createElement('li');
                // displaying the score
                yourScore += 1;
                
                newDiv.appendChild(listItem);
                yourResult.innerText = yourScore;
               computerResult.innerText = computerScore;
                result1.appendChild(newDiv)
                
             } 

             
              // The seventh statement paper, scissors
              else if (result === 'You lost Scissors cuts paper' ) {
                // Create new container
                let newDiv = document.createElement('div');
                // Create new list item for result
                let listItem = document.createElement('li')
                //inserting the result into the list item
                listItem.innerText = result;
                let score = document.createElement('li');
                // displaying the score
                computerScore += 1;
                
                newDiv.appendChild(listItem);
                yourResult.innerText = yourScore;
                computerResult.innerText = computerScore;
                result1.appendChild(newDiv)
             }  else {
                    // Create new container
              let newDiv = document.createElement('div');
              // Create new list item for result
              let listItem = document.createElement('li')
              //inserting the result into the list item
              listItem.innerText = result;
              let score = document.createElement('li');
              // displaying the score
               
              newDiv.appendChild(listItem);
              yourResult.innerText = yourScore;
               computerResult.innerText = computerScore;
              result1.appendChild(newDiv);
             }


    } else  if (computerScore > yourScore){
        alert( `You lost.Your score: ${yourScore}, computer score: ${computerScore} `)
    } else if (computerScore < yourScore){
      alert( `You won.Your score: ${yourScore}, computer score: ${computerScore} `)
  }
  }
});
   
  const reset = document.getElementById('reset');
  reset.addEventListener('click', function(){
    yourScore = 0;
    computerScore = 0;
    yourResult.innerText = 0;
    computerResult.innerText = 0;
    result1.innerText = '';
})
//Play the game five times and see who is the winner computer or you
  

