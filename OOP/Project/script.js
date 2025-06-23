const email=document.getElementById("Email");
const display=document.getElementById("display");
const display2=document.getElementById("display2");
const password=document.getElementById("Password");
const button =document.getElementById("btn");
const mobile=document.getElementById("Mobile");

const correctEmailPattern= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const correctPassPattern= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const correctMbNumber= /^([+]\d{2})?\d{10}$/

button.addEventListener('click',()=>{

if(email.value && password.value && mobile.value){

    const isemailvalid=correctEmailPattern.test(email.value);
    const ispasswordvalid=correctPassPattern.test(password.value);
    const isvalidMbNumber=correctMbNumber.test(mobile.value);
if(isemailvalid && ispasswordvalid && isvalidMbNumber){
display2.textContent="Login successfully!";
display.textContent=""
}
else if(!isemailvalid && !ispasswordvalid && !isvalidMbNumber){
display.textContent="All credentials are invalid!";
display2.textContent=""
}
else if(!isemailvalid){
display.textContent="Email Invalid!";
display2.textContent=""
}
else if(!ispasswordvalid){
display.textContent="Incorrect Password!";
display2.textContent=""
}
else if(!isvalidMbNumber){
display.textContent="Incorrect Number format";
display2.textContent=""
}


}
 
else{
    display.textContent="Input fields are required!";
}
})