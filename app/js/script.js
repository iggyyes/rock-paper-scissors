// method 3
const resultDisplay = document.querySelector('#result');
const choicesDisplay = document.querySelector('#choices');

const choices = ['rock', 'paper', 'scissors'];

const handleClick = (e) => {
    getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)]);
}
choices.forEach(choice => {
    const button = document.createElement('button');
    button.innerHTML = choice;
    button.addEventListener('click', handleClick);
    choicesDisplay.appendChild(button);

})

const getResults = (userChoice, computerChoice) => {
    switch (userChoice + computerChoice) {
        case 'scissorsscissors' :
        case 'paperpaper' :
        case 'rockrock' :
            resultDisplay.innerHTML = 'you chose ' + userChoice + ' and the computer chose ' + computerChoice + ', its a draw!';
            break   
        case 'scissorspaper' :
        case 'paperrock' :
        case 'rockscissors' :
            resultDisplay.innerHTML = 'you chose ' + userChoice + ' and the computer chose ' + computerChoice + ', you win!';
            break 
        case 'rockpaper' :
        case 'scissorsrock' :
        case 'paperscissors' :
            resultDisplay.innerHTML = 'you chose ' + userChoice + ' and the computer chose ' + computerChoice + ', you lose!';
            break
    }
}


//method 2
// const userChoiceDisplay = document.createElement('p');
// const computerChoiceDisplay = document.createElement('p');
// const resultDisplay = document.createElement('p');
// const gameGrid = document.getElementById('game');
// gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

// const choices = ['rock', 'paper', 'scissors'];
// let userChoice
// let computerChoice


// const handleClick = (e) => {
//     userChoice = e.target.id;
//     userChoiceDisplay.innerHTML = 'your choice: ' + userChoice;
//     generateComputerChoice()
//     getResult()
// }

// const generateComputerChoice = () => {
//     const randomChoice = choices[Math.floor(Math.random() * choices.length)];
//     computerChoice = randomChoice
//     computerChoiceDisplay.innerHTML = 'computer choice: ' + computerChoice;
// }

// for (let i = 0; i < choices.length; i++) {
//     const button = document.createElement('button');
//     button.id = choices[i];
//     button.innerHTML = choices[i];
//     button.addEventListener('click', handleClick);
//     gameGrid.appendChild(button);
// }

// const getResult = () => {
//     switch (userChoice + computerChoice) {
//         case 'scissorsscissors' :
//         case 'paperpaper' :
//         case 'rockrock' :
//             resultDisplay.innerHTML = 'its a draw!' 
//             break   
//         case 'scissorspaper' :
//         case 'paperrock' :
//         case 'rockscissors' :
//             resultDisplay.innerHTML = 'you win!' 
//             break 
//         case 'rockpaper' :
//         case 'scissorsrock' :
//         case 'paperscissors' :
//             resultDisplay.innerHTML = 'you lose!' 
//             break    
//     }
// }


//method 1
// const computerChoiceDisplay = document.getElementById('computer-choice');
// const userChoiceDisplay = document.getElementById('user-choice');
// const resultDisplay = document.getElementById('result');

// const possibleChoices = document.querySelectorAll('button');

// let userChoice
// let computerChoice
// let result

// possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
//     userChoice = e.target.id
//     userChoiceDisplay.innerHTML = userChoice
//     generateComputerChoice()
//     getResult()
// }))

// function generateComputerChoice() {
//     const randomNumber = Math.floor(Math.random() * 3) +1

//     if (randomNumber === 1) {
//         computerChoice = 'rock'
//     }

//     if (randomNumber === 2) {
//         computerChoice = 'scissors'
//     }

//     if (randomNumber === 3) {
//         computerChoice = 'paper'
//     }
//     computerChoiceDisplay.innerHTML = computerChoice
// }

// function getResult() {
//     if (computerChoice === userChoice) {
//         result = 'its a draw!'
//     }

//     if (computerChoice === 'rock' && userChoice === 'paper') {
//         result = 'you win!'
//     }

//     if (computerChoice === 'rock' && userChoice === 'scissors') {
//         result = 'you lose!'
//     }

//     if (computerChoice === 'paper' && userChoice === 'rock') {
//         result = 'you lose!'
//     }

//     if (computerChoice === 'paper' && userChoice === 'scissors') {
//         result = 'you win!'
//     }

//     if (computerChoice === 'scissors' && userChoice === 'rock') {
//         result = 'you win!'
//     }

//     if (computerChoice === 'scissors' && userChoice === 'paper') {
//         result = 'you lose!'
//     }

//     resultDisplay.innerHTML = result


// }

