
const tBody=document.getElementById("tBody");


fetch("https://api.rootnet.in/covid19-in/stats/latest")
.then(response=>response.json())
.then((data)=>{
const todos=data.data.regional;

todos.map((todo,index)=>{
const tr=document.createElement("tr");
const td1=document.createElement("td");
td1.textContent=index+1
tr.appendChild(td1);
const td2=document.createElement("td");
td2.textContent=todo.loc
tr.appendChild(td2);
const td3=document.createElement("td");
td3.textContent=todo.confirmedCasesIndian
tr.appendChild(td3);
const td4=document.createElement("td");
td4.textContent=todo.confirmedCasesForeign
tr.appendChild(td4);
const td5=document.createElement("td");
td5.textContent=todo.discharged
tr.appendChild(td5);
const td6=document.createElement("td");
td6.textContent=todo.deaths
tr.appendChild(td6);
const td7=document.createElement("td");
td7.textContent=todo.confirmedCasesIndian+todo.confirmedCasesForeign
tr.appendChild(td7);

tBody.appendChild(tr);
})
})