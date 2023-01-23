"use strict";

//  USE IN CASE OF DOM ELEMENTS NOT LOADING
// document.addEventListener("DOMContentLoaded", function(event) { 
    
// });

// STARTING VARIABLES
const btnGames = document.querySelectorAll(".game-btn");
const btnTicTac = document.querySelector("#tic-tac-toe-btn");
const btnRockPaperScissors = document.querySelector( "#rock-paper-scissors-btn");
const btnSnakesLadders = document.querySelector("#snakes-ladders-btn");
const containerTicTac = document.querySelector("#tic-tac-container");
const ticTacBoxes = document.querySelectorAll(".tic-tac-box");
const containerRockPaperScissors = document.querySelector("#rock-paper-scissors-container")
const headingContent = document.querySelector("h1");
const gameContainers = document.querySelectorAll(".game-container");
const buttonContainer = document.querySelector(".btn-container");
const quitButton = document.querySelector(".quit-button");
const scorecard = document.querySelector(".scorecard");
const score1 = document.querySelector("#scorecard-1 p");
const score2 = document.querySelector("#scorecard-2 p");

// GLOBAL FUNCTIONS
let playerOne = false;
let playerTwo = false;
const switchPlayer = function(){
    if(playerOne === true){
        playerOne = false;
        playerTwo = true;
    }
    else if(playerOne === false){
        playerOne = true;
        playerTwo = false;
    }
}
const addScore = function(score){
    let scoreInt = parseInt (score.textContent);
    score.textContent = scoreInt +1;
}

const giveScore = function() {
    if(playerOne == true){
    addScore(score1);
    }            
    else if(playerTwo == true){
    addScore(score2);
    }
}

// QUIT GAME FUNCTION
const quitGame = function () {
btnGames.forEach(element => element.style.visibility = "visible");
quitButton.style.visibility = "hidden";
scorecard.style.display = "flex";
gameContainers.forEach(element => element.style.display = "none");
headingContent.textContent = "Astrid's Game Room!";
playerOne = false;
playerTwo = false;
}



// LOAD GAME FUNCTIONS
const loadTicTac = function(){
    gameContainers.forEach(element => element.style.display = "none");
    btnGames.forEach(element => element.style.visibility = "hidden");
    scorecard.style.display = "none";
    quitButton.style.visibility = "visible";
    containerRockPaperScissors.style.display = "none";
    containerTicTac.style.display = "flex";
    headingContent.textContent = "Tic Tac Toe!";
    playerOne = true;
    playerTwo = false;
}

const loadRockPaperScissors = function(){
    gameContainers.forEach(element => element.style.display = "none");
    btnGames.forEach(element => element.style.visibility = "hidden");
    scorecard.style.display = "none";
    quitButton.style.visibility = "visible";
    containerTicTac.style.display = "none";
    containerRockPaperScissors.style.display = "flex";
    headingContent.textContent = "Rock Paper Scissors!";
}

btnTicTac.addEventListener("click", loadTicTac);
btnRockPaperScissors.addEventListener("click", loadRockPaperScissors);
quitButton.addEventListener("click", quitGame);

const checkForTicTacWin = function(box1, box2, box3){
    if(ticTacBoxes[box1].textContent === ticTacBoxes[box2].textContent && ticTacBoxes[box2].textContent === ticTacBoxes[box3].textContent) {
        return true;
    }
    else {
        return false;
    }
}

const quitTicTac = function() {
    ticTacBoxes[2].textContent = " ";
    ticTacBoxes[0,1,4,5,6].textContent = "";
}

const addXO = function (divElement){
    if(divElement.textContent = " "){
        divElement.textContent = "";
    }
    if(divElement.textContent === ""){
        if(playerOne === true) {
        divElement.textContent = "X";
        }
        if(playerTwo === true) {
        divElement.textContent = "O";
        }
    
        if(checkForTicTacWin(0, 1, 2) == true){
            giveScore();
            quitGame(); 
            quitTicTac();
        }
        else if(checkForTicTacWin(3, 4, 5) == true){
            giveScore();
            quitGame();
        }
        else if(checkForTicTacWin(6, 7, 8) == true){
            giveScore();
            quitGame();
        }
        else if(checkForTicTacWin(0, 3, 6) == true){
            giveScore();
            quitGame();
        }
        else if(checkForTicTacWin(1, 4, 7) == true){
            giveScore();
            quitGame();
        }
        else if(checkForTicTacWin(2, 5, 8) == true){
            giveScore();
            quitGame();
        }
        else if(checkForTicTacWin(0, 4, 8) == true){
            giveScore();
            quitGame();
        }
        else if(checkForTicTacWin(2, 4, 6) == true){
            giveScore();
            quitGame();
        }
        else {switchPlayer();
        }
    }
}