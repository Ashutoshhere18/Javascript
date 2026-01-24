const loan=document.getElementById('loan');
const rate=document.getElementById('rate');
const years=document.getElementById('years');

function calculateEMI(){
const principle=loan.value;
const interest=rate.value;
const numbers=years.value;
const calculate= (principle*interest*numbers)/100;
}
