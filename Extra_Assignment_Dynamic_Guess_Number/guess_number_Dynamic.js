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

let score;
let highScore = 0;
let guess;
let checking;
let confirmBox;
let promptValue;
let promptValue1;
let difference;
let division;
let secretNumber;

document.querySelector('.guess').value = "";

confirmBox = confirm("Do you want to change range, currently default range is 1 to 20");
if (confirmBox) {
    promptValue = Number(prompt("Enter your first number"));
    promptValue1 = Number(prompt("Enter your second number"));
}
else {
    promptValue = 0;
    promptValue1 = 20;
}

document.querySelector(".between").textContent = `(Between ${promptValue} and ${promptValue1})`;
document.querySelector('.score').textContent = promptValue1 - promptValue;
score = promptValue1 - promptValue;
difference = Number(promptValue1 - promptValue);
division = (promptValue1 - promptValue) / 4;
secretNumber = Math.trunc(Math.random() * difference) + Number(promptValue);
document.querySelector(".guess").setAttribute("min", promptValue);
document.querySelector(".guess").setAttribute("max", promptValue1);

function check() {
    document.querySelector('.again').classList.add("hidden");
    document.querySelector(".guess").style.border = "4px solid #eee";
    guess = document.querySelector('.guess').value;

    if (score > 1) {
        if (!guess) {
            console.log(document.querySelector('.message').textContent = "No Number!");
            document.querySelector(".guess").style.border = "4px solid red";
        }

        else if (guess == secretNumber) {
            document.querySelector('.message').textContent = "Correct Number";
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem'
            document.querySelector(".guess").style.border = "4px solid #eee";
            document.querySelector(".guess").disabled = true;
            document.querySelector('.again').classList.remove("hidden");

            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

        }
        else if (guess > promptValue1 || guess < promptValue) {
            document.querySelector('.message').textContent = `Invalid Number  Enter Number Between ${promptValue} to ${promptValue1}`;
            document.querySelector(".guess").style.border = "4px solid red";
        }
        else if (guess > secretNumber) {
            if (guess <= secretNumber + division)
                document.querySelector('.message').textContent = "Near But High!";
            else
                document.querySelector('.message').textContent = "Too High!";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if (guess < secretNumber) {
            if (guess >= secretNumber - division)
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
        document.querySelector(".guess").disabled = true;
        document.querySelector('.again').classList.remove("hidden");
    }
    document.querySelector(".guess").placeholder = guess;
    document.querySelector(".guess").value = "";
}

document.querySelector('.check').addEventListener("click", check);
document.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        check();
    }
});



document.querySelector('.again').addEventListener("click", function () {
    reset();
});

function reset() {
    confirmBox = confirm("Do you want to change range, currently default range is 1 to 20");
    if (confirmBox) {
        promptValue = Number(prompt("Enter your first number"));
        promptValue1 = Number(prompt("Enter your second number"));
    }
    document.querySelector(".between").textContent = `(Between ${promptValue} and ${promptValue1})`;
    document.querySelector('.score').textContent = promptValue1 - promptValue;
    score = promptValue1 - promptValue;
    difference = Number(promptValue1 - promptValue);
    division = (promptValue1 - promptValue) / 4;
    secretNumber = Math.trunc(Math.random() * difference) + Number(promptValue);
    document.querySelector(".guess").setAttribute("min", promptValue);
    document.querySelector(".guess").setAttribute("max", promptValue1);

    document.querySelector(".guess").disabled = false;
    score = promptValue1 - promptValue;
    secretNumber = Math.trunc(Math.random() * difference) + Number(promptValue);
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = '15rem';
    document.querySelector(".guess").style.border = "4px solid #eee";
    document.querySelector('.message').textContent = "Strat Guessing...";
    document.querySelector('.score').textContent = promptValue1 - promptValue;
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = '#222';
}




