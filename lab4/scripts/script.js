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
function createArray(n){
   let array = new Array(n);
   let odd = true;
   for (let i = 0; i < n; i++){
      odd =! odd;
      array[i] = (Math.round(Math.random() * 100));
      if (odd === false){
         array[i] *=-1;
      }
   }
   return array;
}
function selectionSort(inputArr) { 
   let n = inputArr.length;
       
   for(let i = 0; i < n; i++) {
       let min = i;
       for(let j = i+1; j < n; j++){
           if(inputArr[j] < inputArr[min]) {
               min=j; 
           }
        }
        if (min != i) {
            let tmp = inputArr[i]; 
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;      
       }
   }
   return inputArr;
}

function printArray(length, outputId){
   let output = document.getElementById(outputId);
   output.innerHTML = "";
   let unSortedArr = createArray(length);
   print(unSortedArr);
   let sortedArr = selectionSort(unSortedArr);
   print(sortedArr);
   output.innerHTML += check(sortedArr);
   function print(arr){
      for (let i = 0; i < arr.length; i++){
         output.innerHTML += arr[i] +" "; 
      }
      output.innerHTML+= "<br>";
   }

   
}
function check(inputArr) { 
   let n = inputArr.length;
   let posArr = new Array();
   let negArr = new Array();
       
   for(let i = 0; i < n; i++) {
      switch(inputArr[i] >= 0){
         case true:
            posArr.push(inputArr[i]);
            break;
         case false:
            negArr.push(inputArr[i]);
            break;
         default:
            break;
      }

   }
   return "Biggest negative number is: "+ negArr[negArr.length-1] + "<br>"+"Smallest positive number is: " + posArr[0];
}
function createHisto(){
   let histoField = document.getElementById("histo");
   histoField.innerHTML = null;
   let histoFieldHeight = histoField.offsetHeight;
   let histoFieldWidth = histoField.offsetWidth;
   let colNum = document.getElementById("columns-amount").value;
   let array = createArray(colNum);
   function arrayAbs(array){
      for(let i = 0; i < array.length; i++){
         array[i] = Math.abs(array[i]);
      }
      return array;
   }
   array = arrayAbs(array);
   // array = selectionSort(array); 
   if (colNum >= 4 && colNum <= 25){ //limits
      for(let i = 0; i < array.length; i++)
      {
         let column = document.createElement("div");
         let p = document.createElement("p");
         p.innerHTML= array[i];
   
         column.className = "column";
         column.style.width = histoFieldWidth/array.length +'px';
         column.style.height = histoFieldHeight/100 * array[i] + 'px';
         if(i% 2 == 0 ){
            column.style.backgroundColor = "#F5CB5C";
            column.style.color= "#1F1F1F";

            
         }
         histoField.appendChild(column);
         column.appendChild(p);
      }
   

   }

}
