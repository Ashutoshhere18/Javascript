const inputBox = document.getElementById("input-box");
const input = document.getElementById("input");
const button = document.getElementById("button");

const outputBox = document.getElementById("output-box");
let todos = ["be happy", "be kind to others", "At last give smile and move"];
function todosdisplay() {
  outputBox.innerHTML = "";
  todos.forEach((todo, index) => {
    const value = input.value;
    const div = document.createElement("div");
    const btnDiv=document.createElement("div");
    div.className = "d-flex justify-content-between my-3";
    
    const p = document.createElement("p");
    const delBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    delBtn.textContent = "Delete";
    delBtn.className = "btn btn-danger";

    editBtn.textContent = "Edit";
    editBtn.className = "btn btn-success mx-3";

    p.textContent = todo;

    function deltodos(index) {
      todos.splice(index, 1);
      todosdisplay();
    }

    function editTodos(index){
     input.value=todos[index];
    }

    delBtn.addEventListener("click", () => {
      deltodos(index);
    });

    editBtn.addEventListener('click',()=>{
      editTodos(index);
      todos.splice(index,1);
    })
    div.appendChild(p);
    btnDiv.appendChild(delBtn);
    btnDiv.appendChild(editBtn);
     div.appendChild(btnDiv);
    outputBox.appendChild(div);
  });
}

button.addEventListener("click", () => {
  const value = input.value;
  todos.push(value);
  todosdisplay();
});

todosdisplay();
