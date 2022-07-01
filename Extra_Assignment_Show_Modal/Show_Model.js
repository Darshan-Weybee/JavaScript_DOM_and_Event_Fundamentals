"use strict";
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
var cntrlIsPressed = false;
var altIsPressed = false;
var closeOnEsc = false;
var closeOnOverlay = false;
var closeOnButton = false;

// ctrl ==> esc,overlay,btn
// alt ==> btn
// else => overlay,btn
// function resetKey(){
//      cntrlIsPressed = false;
//      altIsPressed = false;
    
//      closeOnEsc = false;
//      closeOnOverlay = false;
//      closeOnButton = false;
// }

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function (e) {
        console.log(e);
        openBtn();
        setActions(e);
    });
}
function setActions(e) {
console.log({cntrlIsPressed,altIsPressed});
    if(e.ctrlKey){
        closeOnEsc = true;
        closeOnOverlay = true;
        closeOnButton = true;

    }
    else if(e.altKey){
        closeOnEsc = false;
        closeOnOverlay = false;
        closeOnButton = true;
    }
    else{
        closeOnEsc = false;
        closeOnOverlay = true;
        closeOnButton = true;
    }

}
const openBtn = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeBtn = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
function overlayButton(){
    if(closeOnOverlay)
        closeBtn();
}
function closeButton(){
    if(closeOnButton)
        closeBtn();
}
function escapeButton(){
    console.log('escapeButton');
    if(closeOnEsc)
        closeBtn();
}

overlay.addEventListener('click', overlayButton);
btnCloseModal.addEventListener('click', closeButton);

document.addEventListener("keydown", eventHandler);
document.addEventListener("keyup", eventHandler);

function eventHandler(e) {
    // controlKeyHandle(e);
    // alterKeyHandle(e);
    escapeKeyHandle(e);
}
function escapeKeyHandle(e) {
    
    if (e.which == "27" && e.type == "keydown"){
       escapeButton();
    }
}
// function controlKeyHandle(e) {
    
//     if (e.which == "17" && e.type == "keydown"){
//         cntrlIsPressed = true;
//     }
//     else {
//         cntrlIsPressed = false;
//     }
// }
// function alterKeyHandle(e) {
//         if (e.keyCode === 18 && e.type == "keydown"){
//             altIsPressed = true;
//         }
//     else{
//             altIsPressed = false;
//     }
// }

// function controlHandle(closeOnButton,closeOnOverlay,closeOnEsc){
//     if(closeOnButton)
//         closeButton();
//     if(closeOnOverlay)
//         closeOverlay();
//     if(closeOnEsc)
//         closeEscape();

// }
// function alterHandle(closeOnButton,closeOnOverlay,closeOnEsc){
//     console.log("alter2");
//     if(closeOnButton){
//         console.log("alter3");
//         closeButton();
//     }
//     if(closeOnOverlay)
//         closeOverlay();
//     if(closeOnEsc)
//         closeEscape();
// }

// function closeButton(){
//     btnCloseModal.addEventListener('click', closeBtn);
// }
// function closeOverlay(){
//     overlay.addEventListener('click', closeBtn);
// }
// function closeEscape(){
//     closeBtn();
// }

// function eventHandler(e) {
//     if (e.key == "Alt" && !modal.classList.contains("hidden")) {
//         btnCloseModal.addEventListener("click", closeBtn);
//         overlay.removeEventListener("click", closeBtn);

//     }
//     else if (cntrlIsPressed && !modal.classList.contains("hidden")) {
//         btnCloseModal.addEventListener("click", closeBtn);
//         overlay.addEventListener("click", closeBtn);
//         escape1();
//     }
// }


// document.querySelector(".show").addEventListener("keydown", function(e){
//     console.log(e.key);
//     if(e.key == "Escape" && !modal.classList.contains("hidden")){
//         modal.classList.add("hidden");
//         overlay.classList.add("hidden");
//     }
// });

// function escape1() {
//     document.addEventListener("keydown", function (e) {
//         console.log(e.key);
//         if (e.key == "Escape" && !modal.classList.contains("hidden")) {
//             modal.classList.add("hidden");
//             overlay.classList.add("hidden");
//         }

//     });
// }
// document.querySelector(".show-modal").addEventListener("click", eventHandler);
// document.querySelector("body").addEventListener("keydown", function(e){
//     console.log(e);
// });