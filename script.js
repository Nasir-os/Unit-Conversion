const numToBeConverted = document.querySelector('#userNum').value;
const meterToFeet= documet.querySelector('.m-to-f').textContent;
const feetToMeter= documet.querySelector('.f-to-m').textContent;
const literToGallon= documet.querySelector('.l-to-g').textContent;
const gallonToLitter= documet.querySelector('.g-to-l').textContent;
const kilogramToPound= documet.querySelector('.k-to-p').textContent;
const poundToKilogram= documet.querySelector('.p-to-k').textContent;
const convertBtn = document.querySelector('.convert-btn');

let feet = 3.281;
let gallon = 0.264;
let pound = 2.204;

function convert(num1,num2){
return `20 ${num1} = ${(numToBeConverted * num2).toFixed(3)}`
}