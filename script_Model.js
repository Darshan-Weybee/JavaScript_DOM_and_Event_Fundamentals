"use strict";
const  modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

for(let i=0; i<btnsOpenModal.length; i++){
    // console.log(btnsOpenModal[i]);
    btnsOpenModal[i].addEventListener('click', function(){
        console.log("Button Clicked");
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
}
btnCloseModal.addEventListener('click', function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
});
// btnCloseModal.addEventListener('click', closeBtn);

overlay.addEventListener('click', function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");    
});
// overlay.addEventListener('click', openBtn);

// const closeBtn = function(){
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
// }
// const openBtn = function(){
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");  
// }

document.addEventListener("keydown", function(e){
    console.log(e.key);
    if(e.key == "Escape" && !modal.classList.contains("hidden")){
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    }
});