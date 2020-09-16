var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#tryAgain")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var hardButton = document.querySelector("#hard")
var easyButton = document.querySelector("#easy")


// hard button
hardButton.addEventListener("click", function(){
    numberOfSquares = 6;
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (i = 0; i < squares.length; i++){
        if(colors[i]){
            // set color to hex of var colors
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }     
    }
});

// easy button
easyButton.addEventListener("click", function(){
    numberOfSquares = 3;
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    // generate new colors
    colors = generateRandomColors(3);
    // pick new winning collow
    pickedColor = pickColor();
    // change display to show winning color hex
    colorDisplay.textContent = pickedColor;
    // generate colors onto the squares
    for (i = 0; i < squares.length; i++){
        // if there is a color at the index
        if(colors[i]){
            // set color to hex of var colors
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            // hide bottom squares
            squares[i].style.display = "none";
        }
    }
});

// Add Reset Button
resetButton.addEventListener("click", function(){
    // generate all new colors
    colors = generateRandomColors(numberOfSquares);  
    // pick new winning colow
    pickedColor = pickColor();
    // change color display to new winning number
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"
    // change the colors on the page
    for (i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    messageDisplay.textContent = ""
})
colorDisplay.textContent = pickedColor;

for (i = 0; i < squares.length; i++){
    //colors squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function (){
        //grab color of picked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColors(pickedColor)
            h1.style.backgroundColor = pickedColor;
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColors(color){
    // loop through the squares
    for (i = 0; i < squares.length; i++){
        // Change the color of each square to correct square color
        squares[i].style.backgroundColor = color;
    }

}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make Array
    var arr = [];
    // iterate over num times
    for (var i = 0; i < num; i++){
        // get random color
        // add num random colors to Array
        arr.push(randomColor()); 
    }
    // return that Array
    return arr;
}

function randomColor(){
    // pick a red from 0-255
    var r = Math.floor(Math.random() * 256)
    // pick a green from 0-255
    var g = Math.floor(Math.random() * 256)
    // pick a blue from 0-255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
