
const p=document.getElementById("counter");
const btn=document.getElementById("btn");

let count=0;


btn.addEventListener('click',()=>{
    count++;
    let span=document.createElement("span");
     span.textContent=count;
     p.appendChild(span);
})