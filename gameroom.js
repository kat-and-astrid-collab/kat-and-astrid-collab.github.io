"use strict";

// STARTING VARIABLES
const btnGames = document.querySelectorAll(".game-btn");
const btnTicTac = document.querySelector("#tic-tac-toe-btn");
const btnRockPaperScissors = document.querySelector( "#rock-paper-scissors-btn");
const btnSnakesLadders = document.querySelector("#snakes-ladders-btn");
const containerTicTac = document.querySelector("#tic-tac-container");
const ticTacBoxes = document.querySelectorAll(".tic-tac-box");
const ticTacBoxesDiff = document.querySelectorAll(".box-different");
const containerRockPaperScissors = document.querySelector("#rock-paper-scissors-container");
const rpsMoveOne = document.querySelector('.rps-move--1');
const rpsMoveTwo = document.querySelector('.rps-move--2');
const headingContent = document.querySelector("h1");
const gameContainers = document.querySelectorAll(".game-container");
const buttonContainer = document.querySelector(".btn-container");
const quitButton = document.querySelector(".quit-button");
const scorecard = document.querySelector(".scorecard");
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalQuitBtn = document.querySelector('.btn__modal-quit')
const modalAgainBtn = document.querySelector('.btn__modal-again')
const score1 = document.querySelector("#scorecard-1 p");
const score2 = document.querySelector("#scorecard-2 p");
let playerOne = false;
let playerTwo = false;
let draw = false;
const playertictacArrs = {
    playerOneArr: [],
    playerTwoArr: [],
}
const ticTacWinsArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

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
    overlay.style.display = 'block';
    if(draw) {
        modal.firstElementChild.textContent = "Draw!";
    } else {
    modal.firstElementChild.textContent = `Player ${player} wins!`;
    }
}
const hideModal = function() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
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
draw = false;
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



const quitTicTac = function() {
        ticTacBoxes.forEach(box=>box.textContent = " ");
        ticTacBoxesDiff.forEach(box=>box.textContent = "  ");
        playertictacArrs.playerOneArr.length = 0;
        playertictacArrs.playerTwoArr.length = 0;
}


const addXO = function (divElement){
    if(divElement.textContent === " " || divElement.textContent === "  "){
        let activePlayer;
        if(playerOne === true) {
            activePlayer = 1;
        divElement.textContent = "X";
        playertictacArrs.playerOneArr.push(+(divElement.id.slice(-1)) -1);
        playertictacArrs.playerOneArr.sort((a, b) => a-b);

        }
        if(playerTwo === true) {
            activePlayer = 2;
        divElement.textContent = "O";
        playertictacArrs.playerTwoArr.push(+(divElement.id.slice(-1)) -1);
        playertictacArrs.playerTwoArr.sort((a, b) => a-b)
        }
        
        const win = ticTacWinsArr.some((val) => {
            const [a, b, c] = val;
            const [...playerBoxes] = activePlayer === 1 ?               
                playertictacArrs.playerOneArr : 
                playertictacArrs.playerTwoArr;

            if(playerBoxes.includes(a) && playerBoxes.includes(b) && playerBoxes.includes(c)) {
                return true;
            }
        })

        if(win) {
            giveScore();
            showModal(activePlayer); 
        } 

        if (playertictacArrs.playerOneArr.length === 5 && playertictacArrs.playerTwoArr.length === 4) {
            draw = true;
            showModal();
        }
        else{
            switchPlayer();
        }
    }
}
    
