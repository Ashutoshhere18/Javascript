
// Q2. Create a webpage to display Current date and time.

const displayDate=$("#displayDate");
const displayTime=$("#displayTime");





function show(){
const date= new Date();
const time= new Date();

    displayDate.text("Date:"+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());
    displayTime.text(" Time"+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds());
    
}

setInterval(()=>{
  show();
},1000)