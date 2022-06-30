'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = "Correct Number!";
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

document.querySelector('.message').textContent = "Strat Guessing...";
document.querySelector('.number').textContent = "?";
document.querySelector('.score').textContent = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let guess;

document.querySelector('.guess').value = "";

function check() {
    guess = document.querySelector('.guess').value;
    console.log(guess, typeof guess);
    if (score > 1) {
        if (!guess) {
            console.log(document.querySelector('.message').textContent = "No Number!");
        }
        else if (guess == secretNumber) {
            document.querySelector('.message').textContent = "Correct Number";
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            // document.getElementsByTagName("input").style.hover = "4px solid red";
            document.querySelector(".guess").style.border = "4px solid red";

            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

        }
        else if (guess > 20 || guess <= 0) {
            document.querySelector('.message').textContent = "Invalid Number \n Enter Number Between 1 to 20";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if (guess > secretNumber) {
            if(guess <= secretNumber + 5)
                 document.querySelector('.message').textContent = "Near But High!";
            else    
                 document.querySelector('.message').textContent = "Too High!";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if (guess < secretNumber) {
            if(guess >= secretNumber - 5)
                 document.querySelector('.message').textContent = "Near But Low!";
            else
                 document.querySelector('.message').textContent = "Too Low!";
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
    else {
        document.querySelector('.message').textContent = "You Lost The Game";
        document.querySelector('.score').textContent = "0";
    }
}

document.querySelector('.check').addEventListener("click", check);
document.addEventListener("keydown", function (e) {
    if (e.key == "Enter")
        check();
});

document.querySelector('.again').addEventListener("click", function () {
    const lostScore = document.querySelector('.score').textContent;
    const correctGuess = document.querySelector('.guess').value;
    if (lostScore == 0)
         reset();
    else if(correctGuess == secretNumber)
         reset();
});

function reset() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = '15rem';
    document.querySelector(".guess").style.border = "4px solid #eee";
    document.querySelector('.message').textContent = "Strat Guessing...";
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = '#222';
}




