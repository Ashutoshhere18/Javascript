const btn=document.getElementById("btn");
const title=document.getElementById("title");
const menu=document.getElementById("menu");
const thought=document.getElementById("thought");
const quotecolor=document.getElementById("quotecolor");


  const savedmode=localStorage.getItem("mode");
  if(savedmode=="off"){
 btn.textContent="off";
      title.className=" bg-secondary d-flex justify-content-between p-2 text-white"
            menu.className="bg-dark"
            quotecolor.className="text-white"
            thought.textContent="'Be the light in the world of darkness!'";
  }else{
    btn.textContent="on";
       title.className="bg-light d-flex justify-content-between p-2 text-dark shadow-lg ";;
       menu.className="bg-white shadow-lg"
       quotecolor.className="text-dark"
       thought.textContent="“In light we see things. In darkness, we understand them.”"
  }


  btn.addEventListener('click',()=>{
   
    if(btn.textContent=="on"){
         btn.textContent="off";
         title.className=" bg-secondary d-flex justify-content-between p-2 text-white"
            menu.className="bg-dark"
            quotecolor.className="text-white"
            thought.textContent="'Be the light in the world of darkness!'";
            localStorage.setItem("mode","off");
    }else{
       btn.textContent="on";
       title.className="bg-light d-flex justify-content-between p-2 text-dark shadow-lg ";;
       menu.className="bg-white shadow-lg"
       quotecolor.className="text-dark"
       thought.textContent="“In light we see things. In darkness, we understand them.”"
       localStorage.setItem("mode","on");
    }
})

