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
const ticTacBoxesDiff = document.querySelectorAll(".box-different");
const containerRockPaperScissors = document.querySelector("#rock-paper-scissors-container")
const headingContent = document.querySelector("h1");
const gameContainers = document.querySelectorAll(".game-container");
const buttonContainer = document.querySelector(".btn-container");
const quitButton = document.querySelector(".quit-button");
const scorecard = document.querySelector(".scorecard");
const modal = document.querySelector('.modal');
const modalQuitBtn = document.querySelector('.btn__modal-quit')
const modalAgainBtn = document.querySelector('.btn__modal-again')
const score1 = document.querySelector("#scorecard-1 p");
const score2 = document.querySelector("#scorecard-2 p");
let playerOne = false;
let playerTwo = false;

// GLOBAL FUNCTIONS

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
    if(playerOne === true){
    addScore(score1);
    }            
    else if(playerTwo === true){
    addScore(score2);
    }
}

const showModal = function(player) {
    modal.style.display = 'block';
    modal.firstElementChild.textContent = `Player ${player} wins!`;
}
const hideModal = function() {
    modal.style.display = 'none';
}

modalAgainBtn.addEventListener('click', function() {
    quitGame();
    loadTicTac();
    hideModal();
})
modalQuitBtn.addEventListener('click', function() {
    quitGame();
    hideModal();
})

// QUIT GAME FUNCTION
const quitGame = function () {
btnGames.forEach(element => element.style.visibility = "visible");
quitButton.style.visibility = "hidden";
scorecard.style.display = "flex";
gameContainers.forEach(element => element.style.display = "none");
headingContent.textContent = "Astrid's Game Room!";
playerOne = false;
playerTwo = false;
quitTicTac();
/*REMEMBER TO INCLUDE QUIT GAME FUNCTIONS FOR EACH GAME*/ 
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
        ticTacBoxes.forEach(box=>box.textContent = "");
        ticTacBoxesDiff.forEach(box=>box.textContent = " ");
}

const addXO = function (divElement){
    // if(divElement.textContent = " "){
    //     divElement.textContent = "";
    // }
    if(divElement.textContent === "" || divElement.textContent === " "){
        let activePlayer;
        if(playerOne === true) {
            activePlayer = 1;
        divElement.textContent = "X";
        }
        if(playerTwo === true) {
            activePlayer = 2;
        divElement.textContent = "O";
        }
    
        if(checkForTicTacWin(0, 1, 2)){
            giveScore();
            showModal(activePlayer); 
        }
        else if(checkForTicTacWin(3, 4, 5)){
            giveScore();
            showModal(activePlayer); 
        }
        else if(checkForTicTacWin(6, 7, 8)){
            giveScore();
            showModal(activePlayer); 
        }
        else if(checkForTicTacWin(0, 3, 6)){
            giveScore();
            showModal(activePlayer); 
        }
        else if(checkForTicTacWin(1, 4, 7)){
            giveScore();
            showModal(activePlayer); 
        }
        else if(checkForTicTacWin(2, 5, 8)){

            quitGame();
            showModal(activePlayer); 
        }
        else if(checkForTicTacWin(0, 4, 8)){
            giveScore();
            showModal(activePlayer); 
        }
        else if(checkForTicTacWin(2, 4, 6)){
            giveScore();
            showModal(activePlayer); 
        }

        else {switchPlayer();
        }
}
    
}