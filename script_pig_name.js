const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

btnRoll.addEventListener("click", function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);

        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`;

        if (dice != 1) {
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        }
        else {
            document.querySelector(`#current--${activePlayer}`).textContent = 0;
            currentScore = 0;
            // document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            activePlayer = activePlayer == 0 ? 1 : 0;
            // document.querySelector(`.player--${activePlayer}`).classList.add("player--active");
            player0El.classList.toggle("player--active");
            player1El.classList.toggle("player--active");
        }
    }
});

btnHold.addEventListener("click", function () {
    if (playing) {
        // scores[activePlayer]  += currentScore;
        // document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
        document.querySelector(`#score--${activePlayer}`).textContent = Number(document.querySelector(`#score--${activePlayer}`).textContent) + Number(document.querySelector(`#current--${activePlayer}`).textContent);
        let scoreOfPlayer = document.querySelector(`#score--${activePlayer}`).textContent;
        if (scoreOfPlayer >= 10) {
            playing = false;
            diceEl.classList.add("hidden");
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        }
        else {
            currentScore = 0;
            document.querySelector(`#current--${activePlayer}`).textContent = 0;

            activePlayer = activePlayer == 0 ? 1 : 0;
            player0El.classList.toggle("player--active");
            player1El.classList.toggle("player--active");
        }
    }
});

btnNew.addEventListener("click", function(){
    playing = true;
    scores = [0, 0];
    currentScore = 0;
    diceEl.classList.add("hidden");
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
    activePlayer = 0;
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
});
