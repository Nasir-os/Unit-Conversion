let inputNum = document.querySelector('#userNum');
let meterToFeet= document.querySelector('.m-to-f');
let feetToMeter= document.querySelector('.f-to-m');
let literToGallon= document.querySelector('.l-to-g');
let gallonToLitter= document.querySelector('.g-to-l');
let kilogramToPound= document.querySelector('.k-to-p');
let poundToKilogram= document.querySelector('.p-to-k');
const unitSection =  document.querySelector('.units-section');
let userInput = document.querySelectorAll('.user-input');


let feet = 3.281;
let gallon = 0.264;
let pound = 2.204;
let result = 0;
inputNum.value = 20;
let numToBeConverted=20;
userInput.forEach((input)=>input.textContent = numToBeConverted + " ");

inputNum.addEventListener('input',()=>{
    numToBeConverted = Number(inputNum.value);
userInput.forEach((input)=>input.textContent = numToBeConverted + " ");
displayUnits()



})


function convertUnit(operator,num){
if(operator === '*'){
result = (numToBeConverted * num).toFixed(3);
}else{
result = (numToBeConverted / num).toFixed(3);
}
return result;
}
function displayUnits(){
    meterToFeet.textContent =  convertUnit("*",feet);
    feetToMeter.textContent =  convertUnit("/",feet);
    literToGallon.textContent =  convertUnit("*",gallon);
    gallonToLitter.textContent =  convertUnit("/",gallon);
    kilogramToPound.textContent =  convertUnit("*",pound);
    poundToKilogram.textContent =  convertUnit("/",pound);
}
displayUnits();
inputNum.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){displayUnits();}
})



