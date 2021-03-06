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
let scoreDecrease = 0;
let playing = true;
let winningScore = 10;
let presentPlayerScore, anotherPlayerScore;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
btnNew.classList.add("hidden");
document.querySelector(".slider").disabled = true;

btnRoll.addEventListener("click", function () {
    btnNew.classList.remove("hidden");
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        // console.log(dice);

        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`;

        if (dice != 1) {

            currentScore += dice;
            // scoreDecrease += currentScore;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
            if(Number(currentScore) +  Number(document.querySelector(`#score--${activePlayer}`).textContent) >= winningScore){
                document.querySelector(`#score--${activePlayer}`).textContent = Number(currentScore) +  Number(document.querySelector(`#score--${activePlayer}`).textContent);
                document.querySelector(`#current--${activePlayer}`).textContent = 0;
                slider();
                playing = false;
                diceEl.classList.add("hidden");
                document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
                document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            }

            // document.querySelector(`#score--${activePlayer}`).textContent = Number(document.querySelector(`#score--${activePlayer}`).textContent) + currentScore;
            // if (document.querySelector(`#score--${activePlayer}`).textContent >= winningScore) {
            //     playing = false;
            //     diceEl.classList.add("hidden");
            //     document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            //     document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            // }
            // slider();
        }
        else {
            // document.querySelector(`#score--${activePlayer}`).textContent = Number(document.querySelector(`#score--${activePlayer}`).textContent) - scoreDecrease;
            document.querySelector(`#current--${activePlayer}`).textContent = 0;
            currentScore = 0;
            // scoreDecrease = 0;
            // slider();
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
        slider();
        if (scoreOfPlayer >= winningScore) {
            playing = false;
            diceEl.classList.add("hidden");
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        }
        else {
            currentScore = 0;
            scoreDecrease = 0;
            document.querySelector(`#current--${activePlayer}`).textContent = 0;
            
            activePlayer = activePlayer == 0 ? 1 : 0;
            player0El.classList.toggle("player--active");
            player1El.classList.toggle("player--active");
        }
    }
});
let winner, winnerName;
// let presentPlayerName, anotherPlayerName;

// function getActivePlayerName(){
// presentPlayerName = document.querySelector(`.name-${activePlayer}`).textContent;
// console.log(presentPlayerName);
// anotherPlayerName = document.querySelector(`.name-${activePlayer == 0 ? 1 : 0}`).textContent;
// console.log(anotherPlayerName);
// }

// function getActivePlayerScore(){
// presentPlayerScore = document.querySelector(`#score--${activePlayer}`).textContent;
// console.log(presentPlayerScore);
// anotherPlayerScore = document.querySelector(`#score--${activePlayer == 0 ? 1 : 0}`).textContent;
// console.log(anotherPlayerScore);
// }

btnNew.addEventListener("click", function () {

    winner = prompt("Enter lead player name");
    let ps = document.querySelector(`#score--${activePlayer}`).textContent;
    let as = document.querySelector(`#score--${activePlayer == 0 ? 1 : 0}`).textContent;
    console.log(ps);
    console.log(as);
    // winnerSCore = winner == document.querySelector(`.name-${activePlayer}`).textContent ? score0El.textContent : score1El.textContent;
    winnerName = Number(document.querySelector(`#score--${activePlayer}`).textContent) > Number(document.querySelector(`#score--${activePlayer == 0 ? 1 : 0}`).textContent) ? document.querySelector(`.name-${activePlayer}`).textContent : document.querySelector(`.name-${activePlayer == 0 ? 1 : 0}`).textContent;
    console.log({winnerName});
    let p = document.querySelector(`.name-${activePlayer}`).textContent;
    let a = document.querySelector(`.name-${activePlayer == 0 ? 1 : 0}`).textContent;
    console.log(p);
    console.log(a);

    if(winner == winnerName) {

        document.querySelector(".slider").value = 0;
        playing = true;
        scores = [0, 0];
        currentScore = 0;
        scoreDecrease = 0;
        diceEl.classList.add("hidden");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
        activePlayer = 0;
        player0El.classList.add("player--active");
        player1El.classList.remove("player--active");
        score0El.textContent = 0;
        score1El.textContent = 0;
        current0El.textContent = 0;
        current1El.textContent = 0;
        btnNew.classList.add("hidden")
    }
});


function slider() {
    
    
    presentPlayerScore = document.querySelector(`#score--${activePlayer}`).textContent;
    anotherPlayerScore = document.querySelector(`#score--${activePlayer == 0 ? 1 : 0}`).textContent;

    console.log({presentPlayerScore, anotherPlayerScore});
    if(presentPlayerScore >= winningScore){
        if(activePlayer == 0)
             document.querySelector(".slider").value = -winningScore;
        else
             document.querySelector(".slider").value = winningScore;
    }
    else if(presentPlayerScore > anotherPlayerScore){
        if(activePlayer == 0)
             document.querySelector(".slider").value = (0 - score0El.textContent);
         else
             document.querySelector(".slider").value = score1El.textContent;
    }
    else if(anotherPlayerScore > presentPlayerScore){
        if(activePlayer == 0)
             document.querySelector(".slider").value = score1El.textContent;
         else
             document.querySelector(".slider").value = (0 - score0El.textContent);
    }
    else
         document.querySelector(".slider").value = 0;
}

let nameOfPlayer, newInputPlayerName;

for (let i = 0; i < 2; i++) {
    document.querySelector(`.name-${i}`).addEventListener("dblclick", function () {
        // console.log(e);
        nameOfPlayer = document.querySelector(`.name-${i}`).textContent;
        // console.log(nameOfPlayer);

        document.querySelector(`.name-${i}`).classList.add("hidden");
        document.querySelector(`.changeName-${i}`).classList.remove("hidden");
        document.querySelector(`.changeName-${i}`).placeholder = nameOfPlayer;
        document.querySelector(`.changeName-${i}`).value = "";

        document.querySelector(`.changeName-${i}`).addEventListener("keydown", changeName);
        // document.addEventListener("click", changeName);
        // document.querySelector(".newName").removeEventListener("click", changeName);
        function changeName(e){
            if (e.key == "Enter") {
                    newInputPlayerName = document.querySelector(`.changeName-${i}`).value;

                    document.querySelector(`.name-${i}`).textContent = newInputPlayerName;
                    document.querySelector(`.name-${i}`).classList.remove("hidden");
                    document.querySelector(`.changeName-${i}`).classList.add("hidden");
                    document.querySelector(`.playerName-${i}`).textContent  = newInputPlayerName;

                if (newInputPlayerName == "") {
                    document.querySelector(`.name-${i}`).textContent = nameOfPlayer;
                    document.querySelector(`.playerName-${i}`).textContent  = nameOfPlayer;
                }
            }
        }
    });
}

function changeLimit(){
    enterScore = Number(prompt("Enter your limit"));
    if(enterScore != 0){
        winningScore = enterScore;
        document.querySelector(".slider").min = (0-winningScore);
        document.querySelector(".slider").max = winningScore;
        document.querySelector(".limitNumber").textContent = winningScore;
    }
}

document.querySelector(".limitButton").addEventListener("click", changeLimit);

// document.addEventListener("keydown", function(e){
//     console.log(e);
// })