'use strict';
let isActive = false;

function dropDown() {
   if(!isActive){
   document.getElementById("drop-down-content").style.display = "block";
   isActive = !isActive;
   }
   else {
      document.getElementById("drop-down-content").style.display = "none";
      isActive = !isActive;
   }
}

function toggle(id){
   let elements = document.getElementsByClassName("content-window")

   for (let i = 0; i < elements.length; i++){
      elements[i].style.display = "none";
   }
   document.getElementById(id).style.display = "flex";
}


