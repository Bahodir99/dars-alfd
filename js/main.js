let elMin = document.querySelector('.min');
let elSec = document.querySelector('.sec');
let elLine = document.querySelector('.line__inner');


let sec = 150;

let min = Math.floor(sec / 60);
let stepSec = sec % 60;

let count = 100

elMin.textContent = min;
elSec.textContent = stepSec;


const clearSec = setInterval(()=>{
    stepSec = stepSec -1
    if (min == 00 && stepSec == 0){
        clearInterval(clearSec)
    }
    if (stepSec <= 0){
        stepSec = 60
        min = min - 1
        elMin.textContent = min
    }
    if (min < 0){
        elMin.textContent = 0
    }

}, 100)

let lineStep = 100 / sec

setInterval(()=>{
    count = count - lineStep
     
})