"use strict";

//                         OLD CODE
// const ticTacToeBtn = document.
// const clearBoard = function(){
//     document.gameBoard.remove();
// }

// const createTicTac = function (){
//     console.log('Function has been called');
//     let gameBoard = document.createElement("div");
//     gameBoard.className.add("gameboard")
//     // for(let i=0; i<=8; i++){
//         let ticTacBoxEl = document.createElement("div");
//         ticTacBoxEl.id =  `box${1}`;
//         ticTacBoxEl.className.add("tic-tac-box");
//         gameBoard.append(ticTacBoxEl);
//     // }
// }


//  USE IN CASE OF DOM ELEMENTS NOT LOADING
// document.addEventListener("DOMContentLoaded", function(event) { 
    
// });

// STARTING VARIABLES
const btnTicTac = document.querySelector("#tic-tac-toe-btn");
const btnRockPaperScissors = document.querySelector( "#rock-paper-scissors-btn");
const btnSnakesLadders = document.querySelector("#snakes-ladders-btn");

const containerTicTac = document.querySelector(".tic-tac-container");
const containerRockPaperScissors = document.querySelector(".rock-paper-scissors-container")
const headingContent = document.querySelector("h1");

let playing = false;

// LOAD GAME FUNCTIONS
const loadTicTac = function(){
    containerTicTac.style.display = "flex";
    headingContent.textContent = "Tic Tac Toe!";
    playing = true;
}

const loadRockPaperScissors = function(){
    containerRockPaperScissors.style.display = "flex";
    headingContent.textContent = "Rock Paper Scissors!";
    playing = true;
}

btnTicTac.addEventListener('click', loadTicTac);
btnRockPaperScissors.addEventListener('click', loadRockPaperScissors);
