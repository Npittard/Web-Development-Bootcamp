// Create secret number
var secretNumber = 4;
// Ask use to guess
var guess = prompt("Guess the secret number");

//check guess and reply
if (Number(guess) === secretNumber){
    alert("You are correct!!!")
}
else if (guess < secretNumber){
    alert("Too low. Try again.")
}
else if (guess > secretNumber){
    alert("Too high. Try again")
}
    
