"use strict";

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

let rndNum = generateRandomNumber(100);

console.log(rndNum);