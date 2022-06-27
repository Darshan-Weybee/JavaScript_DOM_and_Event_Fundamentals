'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = "Correct Number!";
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

document.querySelector('.message').textContent = "Strat Guessing...";
document.querySelector('.number').textContent = "?";
document.querySelector('.score').textContent = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener("click", function () {
    const guess = document.querySelector('.guess').value;
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

            if(score > highScore){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

        }
        else if (guess > secretNumber) {
            document.querySelector('.message').textContent = "Too High!";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if (guess < secretNumber) {
            document.querySelector('.message').textContent = "Too Low!";
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
    else {
        document.querySelector('.message').textContent = "You Lost The Game";
        document.querySelector('.score').textContent = "0";
    }
})
document.querySelector('.again').addEventListener("click", function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = '15rem';
    
    document.querySelector('.message').textContent = "Strat Guessing...";
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = '#222';
})

// else if(guess != secretNumber){
//     if(score>1){
//         document.querySelector('.message').textContent = guess > secretNumber ? "To High!" : "To Low";
//         score--;
//         document.querySelector('.score').textContent = score;
//     }
//     else{
//         document.querySelector('.message').textContent = "You Lost The Game";
//         document.querySelector('.score').textContent = "0";
//     }
// }

// function displayMessage(value){
//     document.querySelector(".message").textContent = value;
// }


