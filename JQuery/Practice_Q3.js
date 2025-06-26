
// Q3. Create a pop up and container which will show after 5 seconds, and after cancel again make it hide.

const display=$("#display");
const btn=document.getElementById("btn");
display.hide();
setTimeout(()=>{
   display.show();
},5000)

btn.addEventListener('click',()=>{
    display.text("");
})