let inputNum = document.querySelector('#userNum');
let meterToFeet= document.querySelector('.m-to-f');
let feetToMeter= document.querySelector('.f-to-m');
let literToGallon= document.querySelector('.l-to-g');
let gallonToLitter= document.querySelector('.g-to-l');
let kilogramToPound= document.querySelector('.k-to-p');
let poundToKilogram= document.querySelector('.p-to-k');
const convertBtn = document.querySelector('.convert-btn');

let feet = 3.281;
let gallon = 0.264;
let pound = 2.204;
let result = 0;
inputNum.value = 20;
let numToBeConverted=20;

inputNum.addEventListener('input',()=>{
    numToBeConverted = Number(inputNum.value);
})


function convertUnit(unit1,operator,num,unit2){
if(operator === '*'){
result = (numToBeConverted * num).toFixed(3);
}else{
result = (numToBeConverted / num).toFixed(3);
}
return `${numToBeConverted} ${unit1} = ${result} ${unit2}`;
}
function displayUnits(){
    meterToFeet.textContent =  convertUnit("meters","*",feet,"feet");
    feetToMeter.textContent =  convertUnit("feet","/",feet,"meters");
    literToGallon.textContent =  convertUnit("liters","*",gallon,"gallons");
    gallonToLitter.textContent =  convertUnit("gallons","/",gallon,"liters");
    kilogramToPound.textContent =  convertUnit("kilos","*",pound,"pounds");
    poundToKilogram.textContent =  convertUnit("pound","/",pound,"kilos");
}
displayUnits();
convertBtn.addEventListener('click',()=>{
displayUnits();
})
inputNum.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){displayUnits();}
})