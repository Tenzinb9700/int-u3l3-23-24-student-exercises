// stored html elements
let mario = document.querySelector(".mario");
let coin = document.querySelector(".coin");
let score = document.querySelector(".score");
let title = document.querySelector("h1");
let background = document.querySelector("body");
let jumpButton = document.querySelector(".jump");
let jumpDownButton = document.querySelector(".jump-down");
let changeColorButton = document.querySelector(".change-color");
let endGameButton = document.querySelector(".end-game");
let updateScoreButton = document.querySelector(".update-score");
let growButton = document.querySelector(".grow");



jumpButton.addEventListener("click", function() {
    mario.style.bottom = "120px";
    coin.style.display = "none";
});






 jumpDownButton.addEventListener("click", function() {
    mario.style = "bottom: 35px";
    
});




 

background.addEventListener("click", function() {
    background.style.backgroundColor = "blue"; 
});






endGameButton.addEventListener("click", function() {
    title.innerHTML = "Game over.";
});






updateScoreButton.addEventListener("click ", function() {
    score.innerHTML = Number
});

*/


/* 6: When clicking the "Grow" button the Mario image gets bigger. Write the whole click handler! 

{
    mario.style.width = "200px";
}

*/
