const input=document.getElementById("input");
const btn=document.getElementById("btn");
const container=document.querySelector(".container");

btn.addEventListener('click',()=>{
    const value=input.value;
    const p=document.createElement("p");
    p.textContent=value;
    container.appendChild(p);

})