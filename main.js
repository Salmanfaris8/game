let randomNumber = Math.floor(Math.random()*100)+1
let remainingGuess = 10
console.log(randomNumber);


let submitButton = document.getElementById('submit-guess');
let output = document.getElementById('output');
let userInput = document.getElementById('userInput');
let remainingGuessesDisplay = document.getElementById('remainingGuess');
let resetButton = document.getElementById('reset')

resetButton.disabled=true

submitButton.addEventListener('click',function(){
    let guessInput=Number(userInput.value)
    if(guessInput<1||guessInput>100){
        output.textContent="Please enter a number between 1 and 100!"
        return
    }
    remainingGuess--
    remainingGuessesDisplay.textContent = 'Remaining Guess: ' + remainingGuess;
    
    if(randomNumber==guessInput){
        output.textContent = `Congratulations! You guessed the correct number! ${guessInput}`
        userInput.disabled=true
        submitButton.disabled=true
        resetButton.disabled=false
        submitButton.style.backgroundColor="unset"
        submitButton.style.color="unset"
        resetButton.style.backgroundColor="black"
        resetButton.style.color="white"
    }
    else if(randomNumber>guessInput){
        output.textContent = 'Too Low,Try Again'
    }
    else if(randomNumber<guessInput){
        output.textContent = 'Too High,Try Again'
    }

    if(remainingGuess==0){
        output.textContent = `Game over! The correct number was ${randomNumber}`
        userInput.disabled=true
        submitButton.disabled=true
        resetButton.disabled=false
        submitButton.style.backgroundColor="unset"
        submitButton.style.color="unset"
        resetButton.style.backgroundColor="black"
        resetButton.style.color="white"
    }
    userInput.value=''
})

