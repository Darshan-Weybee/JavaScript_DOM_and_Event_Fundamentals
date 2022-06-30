"use strict";
const  modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);


for(let i=0; i<btnsOpenModal.length; i++){
    // console.log(btnsOpenModal[i]);
    btnsOpenModal[i].addEventListener('click', function(){
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
}

const openBtn = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeBtn = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

overlay.addEventListener('click', closeBtn);
btnCloseModal.addEventListener('click', closeBtn);

document.querySelector(".show").addEventListener("keydown", function(e){
    console.log(e.key);
    if(e.key == "Escape" && !modal.classList.contains("hidden")){
        modal.classList.add("hidden");
        overlay.classList.add("hidden");    
    }
});

function escape1(){
document.addEventListener("keydown", function(e){
    console.log(e.key);
    if(e.key == "Escape" && !modal.classList.contains("hidden")){
        modal.classList.add("hidden");
        overlay.classList.add("hidden");    
    }
});
}

document.querySelector(".show-modal").addEventListener("mouseclick", eventHandler);
document.addEventListener("keyup", eventHandler);

function eventHandler(e){
    console.log(e.key);
    if(e.key == "Control" && !modal.classList.contains("hidden")){
        console.log("clickControl");
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    }
    if(e.key == "Control"){
        console.log("closeControl");
        btnCloseModal.addEventListener("click", closeBtn);
        overlay.addEventListener("click", closeBtn);
        escape1();
    }
}

document.querySelector(".show-modal").addEventListener("mouseclick", eventHandler1);
document.addEventListener("keyup", eventHandler1);

function eventHandler1(e){
    console.log(e.key);
    if(e.key == "Alt" && !modal.classList.contains("hidden")){
        console.log("clickAlt");
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    }
    if(e.key == "Alt"){
        console.log("closeAlt");
        btnCloseModal.addEventListener("click", closeBtn);
        overlay.removeEventListener("click", closeBtn);
    }
}

// function eventHandler(e){
//     if(e //make sure a mouseEvent has been passed as argument
//         &&
//        e.key == "Control" //check for the correct key
//     ){
//        console.log("click");
//     }
//  }
 
// }