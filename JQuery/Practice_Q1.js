
// Q.wap to get input count from user and play counter till that number .


const timer=document.getElementById("timer")

let input=parseInt(prompt("Enter only digit:"));

let count=0;

const get=setInterval(()=>{
 count++;
 if(count<=input){
 timer.textContent=count;
 }
},1000)

