"use strict";

let rndNum = generateRandomNumber(100);

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

console.log(rndNum);

window.addEventListener("load", newNumber);   


function newNumber() {
document.querySelector("#randomNumber").textContent = rndNum;

}

