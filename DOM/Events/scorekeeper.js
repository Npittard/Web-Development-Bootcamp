var player1 = document.getElementById("player1btn");
var player2 = document.getElementById("player2btn");
var resetGame = document.getElementById("reset");
var p1ScoreDisplay = document.getElementById("player1score")
var p2ScoreDisplay = document.getElementById("player2score")
var player1Score = 0;
var player2Score = 0;
var gameOver = false;
var winningScore = 5;
var numInput = document.querySelector("input");
var goal = document.getElementById("goal");

player1.addEventListener("click", function(){
    if (!gameOver){
        player1Score++;
        if(player1Score === winningScore){
            gameOver = true;
            p1ScoreDisplay.classList.add("winner");
        }
        p1ScoreDisplay.textContent = player1Score;        
    }
})

player2.addEventListener("click", function(){
    if (!gameOver){
        player2Score++;
        if(player2Score === winningScore){
            gameOver = true;
            p2ScoreDisplay.classList.add("winner");
        }
        p2ScoreDisplay.textContent = player2Score;     
    }
})

resetGame.addEventListener("click", function(){
    reset();
})

function reset(){
    player1Score = 0;
    player2Score = 0;
    p2ScoreDisplay.textContent = player2Score;
    p1ScoreDisplay.textContent = player1Score;
    gameOver = false;
    p2ScoreDisplay.classList.remove("winner")
    p1ScoreDisplay.classList.remove("winner")
}

numInput.addEventListener("change", function(){
    goal.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
})