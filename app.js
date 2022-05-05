const goal=3;
const compChoiceDisp = document.getElementById("computer-choice");
const userChoiceDisp = document.getElementById("user-choice");
const resultDisp = document.getElementById("result");
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;
let playerScore = parseInt(document.getElementById("playerScore").innerHTML);
let playerScoreDisp = document.getElementById("playerScore");
let computerScore = parseInt(document.getElementById("computerScore").innerHTML);
let computerScoreDisp = document.getElementById("computerScore");


for(let i=0; i<possibleChoices.length; i++) {
  possibleChoices[i].addEventListener('click', (e) => {
  userChoice = e.target.className;
  userChoiceDisp.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
  })};

function generateComputerChoice() {
  const randNum = Math.floor(Math.random()*3)+1;
  if(randNum===1) {
    computerChoice = 'Rock';
  }
  if(randNum===2) {
    computerChoice = 'Scissors';
  }
  if(randNum===3) {
    computerChoice = 'Paper';
  }
  compChoiceDisp.innerHTML = computerChoice;
};


function getResult() {
  if (computerChoice == userChoice) {
      result = "IT'S A DRAW!"

  }
  if (computerChoice == 'Rock' && userChoice == "Paper") {
    result = 'YOU WON!';
    if(playerScore < goal && computerScore < goal) {
    playerScore++;
    playerScoreDisp.innerHTML = playerScore;
      if(playerScore === 3) {
        possibleChoices.forEach(elem => elem.disabled = true);
      }
    } 
  }
  if (computerChoice == 'Rock' && userChoice == "Scissors") {
    result = 'YOU LOSE!';
    if(playerScore < goal && computerScore < goal) {
    computerScore++;
    computerScoreDisp.innerHTML = computerScore;
      if(computerScore === 3) {
        possibleChoices.forEach(elem => elem.disabled = true);
      }
    } 
       
  }
  if (computerChoice == 'Paper' && userChoice == "Scissors") {
    result = 'YOU WON!'; 
    if(playerScore < goal && computerScore < goal) {
    playerScore++;
    playerScoreDisp.innerHTML = playerScore;
      if(playerScore === 3) {
        possibleChoices.forEach(elem => elem.disabled = true);
      }
    } 
       
  }
  if (computerChoice == 'Paper' && userChoice == "Rock") {
    result = 'YOU LOSE!';    
    if(playerScore < goal && computerScore < goal) {
    computerScore++;
    computerScoreDisp.innerHTML = computerScore;
      if(computerScore === 3) {
        possibleChoices.forEach(elem => elem.disabled = true);
      }
      
    } 
        
  }
  if (computerChoice == 'Scissors' && userChoice == "Rock") { 
    result = 'YOU WON!';    
    if(playerScore < goal && computerScore < goal) {
    playerScore++;
    playerScoreDisp.innerHTML = playerScore;
      if(playerScore === 3) {
        possibleChoices.forEach(elem => elem.disabled = true);
      }
    } 
          
  }
  if (computerChoice =='Scissors' && userChoice == "Paper") {
    result = 'YOU LOSE!';
    if(playerScore < goal && computerScore < goal) {
    computerScore++;
    computerScoreDisp.innerHTML = computerScore;
     if(computerScore === 3) {
        possibleChoices.forEach(elem => elem.disabled = true);

      }
    } 
  }
  resultDisp.innerHTML = result;
}

