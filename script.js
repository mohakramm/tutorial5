//number of circles we have in the game
var numCircles = 6;

//The colour variable should be an array that contains as many random RGB colours as there are circles. 
var colours = [];

//This pickedColor is the RGB color we are trying to guess (string)
var pickedColor;

//This is the default colour of the game. 
let defaultColour = "#582c99";

//Grab all appropriate elements from the HTML.
var circles = document.querySelectorAll(".circle");
var colourToGuess = document.getElementById("colour-to-guess");
var resultMessage = document.getElementById("result-message");
var resetButton = document.getElementById("restart");
var banner = document.querySelector("h1");

init();

function init() {
    setupCircles();
    setupResetButton();
    reset();
}

function setupCircles() {
    //Add click listeners to circles
    for (var i = 0; i < circles.length; i++) {
        circles[i].addEventListener("click", function () {
            var clickedColour = this.style.backgroundColor;
            if (clickedColour === pickedColor) {
                resultMessage.textContent = "You win!";
                resetButton.textContent = "Play again";
                changeColours(pickedColor);
                banner.style.backgroundColor = pickedColor;
            } else {
                this.style.backgroundColor = defaultColour;
                resultMessage.textContent = "Try again";
            }
        });
    }
}

function setupResetButton() {
    resetButton.addEventListener("click", function () {
        reset();
    });
}

function reset() {
    colours = genRandomColours(numCircles);
    pickedColor = chooseColor();
    colourToGuess.textContent = pickedColor.toUpperCase();
    resultMessage.textContent = "";
    resetButton.textContent = "Restart";
    banner.style.backgroundColor = defaultColour;

    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = colours[i];
    }
}

function changeColours(colour) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = colour;
    }
}

function makeColour() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function genRandomColours(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(makeColour());
    }
    return arr;
}

function chooseColor() {
    var randomIndex = Math.floor(Math.random() * colours.length);
    return colours[randomIndex];
}
