let submit = document.getElementById("submit-btn");
submit.addEventListener("click", () => {
  let random = Math.floor(Math.random() * 16777216);
  
  let color = random.toString(16);
   submit.textContent=color;

  document.body.style.backgroundColor = "#" + color;
});

let copy=document.getElementById("copy-btn");
copy.addEventListener("click",()=>{
  let color=submit.textContent;
  navigator.clipboard.writeText(color);
  alert("Copied:"+"#"+color);
})