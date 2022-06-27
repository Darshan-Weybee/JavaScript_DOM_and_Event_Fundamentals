const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let currentScore = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

btnRoll.addEventListener("click", function(){
    const dice = Math.trunc(Math.random()*6)+1;
    console.log(dice);

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    if(dice != 1){
        currentScore += dice;
        current0El.textContent = currentScore;
    }
    else{
        
    }
});