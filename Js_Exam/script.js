
const btn = document.getElementById("btn");
const Tasklist = document.getElementById("TaskList");

const title = document.getElementById("title");
const desc = document.getElementById("description");
const date = document.getElementById("date");
const select = document.getElementById("select");

let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

let editIndex = null;

renderAllTasks();

btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!title.value || !date.value) {
        alert("Before adding/editing task, Title and Due Date are required!");
        return;
    }

    const task = {
        title: title.value,
        description: desc.value,
        date: date.value,
        priority: select.value
    };

    if (editIndex !== null) {
       
        allTasks[editIndex] = task;
        editIndex = null;
        btn.textContent = "Add Task";
    } else {
        allTasks.push(task); 
    }

    localStorage.setItem("tasks", JSON.stringify(allTasks));
    renderAllTasks();


    title.value = "";
    desc.value = "";
    date.value = "";
    select.value = "Low";
});

function renderAllTasks() {
    Tasklist.innerHTML = "";

    allTasks.forEach((task, index) => {
        const container = document.createElement("div");
        container.className = "task-item border p-2 my-2";

        const h4 = document.createElement("h4");
        h4.textContent = "Title: " + task.title;

        const p1 = document.createElement("p");
        p1.textContent = "Description: " + task.description;

        const p2 = document.createElement("p");
        p2.textContent = "Date: " + task.date;

        const p3 = document.createElement("p");
        p3.textContent = "Priority: " + task.priority;

        
        const del = document.createElement("button");
        del.textContent = "Delete";
        del.className = "btn btn-danger mx-1";
        del.addEventListener("click", () => {
            allTasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(allTasks));
            renderAllTasks();
        });

      
        const edit = document.createElement("button");
        edit.textContent = "Edit";
        edit.className = "btn btn-primary mx-1";
        edit.addEventListener("click", () => {
            title.value = task.title;
            desc.value = task.description;
            date.value = task.date;
            select.value = task.priority;
            editIndex = index; 
            btn.textContent = "Update Task";
        });

        container.appendChild(h4);
        container.appendChild(p1);
        container.appendChild(p2);
        container.appendChild(p3);
        container.appendChild(edit);
        container.appendChild(del);

        Tasklist.appendChild(container);
    });
}
