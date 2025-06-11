const inputtitle = document.getElementById("inputtitle");
const button = document.getElementById("button");
const inputnote = document.getElementById("inputnote");
const output = document.getElementById("output");

let title = [];
let notes = [];

function notedisplay() {

 output.innerHTML="";
  
  for(let i=0;i<notes.length;i++){

 const divHold = document.createElement("div");
  const btnDiv = document.createElement("div");

  const noteTitle = document.createElement("p");
  const noteBody = document.createElement("p");

  noteTitle.textContent="Title:-"+title[i];
  noteBody.textContent = "Note:- " + notes[i];

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "btn btn-danger mb-3";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit Note";
  editBtn.className = "btn btn-warning mx-3 mb-3";

  delBtn.addEventListener('click', () => {
title.splice(i,1);
notes.splice(i,1);
notedisplay();
  })

  editBtn.addEventListener('click',()=>{
   
    inputtitle.value =title[i];
    inputnote.value=notes[i];
    
    title.splice(i,1);
notes.splice(i,1);
 
  })
  
  divHold.appendChild(noteTitle);
  divHold.appendChild(noteBody);
  btnDiv.appendChild(delBtn);
  btnDiv.appendChild(editBtn);


  output.appendChild(divHold);
  output.appendChild(btnDiv);
  }
}

button.addEventListener('click', () => {
  title.push(inputtitle.value);
  notes.push(inputnote.value);
  notedisplay();
  inputnote.value="";
  inputtitle.value="";

})


