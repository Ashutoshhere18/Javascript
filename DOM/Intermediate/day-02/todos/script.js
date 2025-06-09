const inputBox = document.getElementById("input-box");
const input = document.getElementById("input");
const button = document.getElementById("button");

const outputBox = document.getElementById("output-box");
let todos=["be happy","be kind to others","At last give smile and move"];
function todosdisplay(){
    
todos.forEach((todo)=>{
    
    const value = input.value;
  const div = document.createElement("div");
  div.className = "d-flex justify-content-between my-3";

  const p = document.createElement("p");
  const delBtn = document.createElement("button");

  delBtn.textContent = "Delete";
  delBtn.className = "btn btn-danger";
  p.textContent = todo;

  div.appendChild(p);
  div.appendChild(delBtn);

  outputBox.appendChild(div);
});
}


button.addEventListener("click", () => {
  outputBox.innerHTML="";
  const value = input.value;
  todos.push(value);
  todosdisplay();
});

todosdisplay();