"use strict";
const  modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// for(let i=0; i<btnsOpenModal.length; i++){
//     console.log(btnsOpenModal[i]);
//     btnsOpenModal[i].addEventListener('click', openBtn);
// }
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

const overlayBtn = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");    
}

for(let i=0; i<btnsOpenModal.length; i++){
    if(i==1){
        console.log(i);
         escape();
    }
}

function  escape(){
document.addEventListener("keydown", function(e){
    console.log(e.key);
    if(e.key == "Escape" && !modal.classList.contains("hidden")){
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    }
});
}