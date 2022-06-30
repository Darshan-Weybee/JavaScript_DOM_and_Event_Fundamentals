'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = "Correct Number!";
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.message').textContent = "Strat Guessing...";
// document.querySelector('.number').textContent = "?";
// document.querySelector('.score').textContent = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let guess;

document.querySelector('.guess').value = "";

function check() {
    document.querySelector('.again').classList.add("hidden");
    document.querySelector(".guess").style.border = "4px solid #eee";
    guess = document.querySelector('.guess').value;
    console.log(guess, typeof guess);
    if (score > 1) {
        if (!guess) {
            console.log(document.querySelector('.message').textContent = "No Number!");
            document.querySelector(".guess").style.border = "4px solid red";
        }
        else if (guess == secretNumber) {
            document.querySelector('.message').textContent = "Correct Number";
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.again').classList.remove("hidden");

            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

        }
        else if (guess > 20 || guess <= 0) {
            document.querySelector('.message').textContent = "Invalid Number  Enter Number Between 1 to 20";
            document.querySelector(".guess").style.border = "4px solid red";
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
        document.querySelector('.again').classList.remove("hidden");
    }
    document.querySelector(".guess").placeholder = guess;
    document.querySelector(".guess").value = "";
}

document.querySelector('.check').addEventListener("click", check);
document.addEventListener("keydown", function (e) {
    if (e.key == "Enter")
        check();
});

document.querySelector('.again').addEventListener("click", function () {
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




