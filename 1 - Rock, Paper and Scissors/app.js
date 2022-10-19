const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = capitalizeFirstLetter(userChoice);
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // possibleChoices.length
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    else if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    else {
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = capitalizeFirstLetter(computerChoice)
}

function getResult() {
    if (computerChoice === userChoice){
        result = 'Draw'
    }
    else if (computerChoice === 'rock' && userChoice === 'paper' || 
    computerChoice === 'paper' && userChoice === 'scissors' || 
    computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'You Win'
    }
    else  /* (computerChoice === 'rock' && userChoice === 'scissors' || 
    computerChoice === 'paper' && userChoice === 'rock' || 
    computerChoice === 'scissors' && userChoice === 'paper') */ {
        result = 'You Lose'
    }

    resultDisplay.innerHTML = result;
}

function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}