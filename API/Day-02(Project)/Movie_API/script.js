
const input=document.getElementById("input");
const btn=document.getElementById("btn");
const display=document.getElementById("display");

function DisplayMovie(title){
   display.innerHTML="";
    const Heading=document.createElement("h3");
    const Genre=document.createElement("h4");
    const img=document.createElement("img");
    Heading.className="text-white";
    Genre.className="text-white"
 let api=" http://www.omdbapi.com/?i=tt3896198&apikey=537ee492&t="+title
    fetch(api).then(response=>response.json()).then((data)=>{
     Heading.textContent=" Title:"+data.Title;
     img.src=data.Poster;
     Genre.textContent="Genre:"+data.Genre;

     display.appendChild(Heading);
      display.appendChild(img);
       display.appendChild(Genre);
    })
}


btn.addEventListener('click',()=>{
    const title=input.value
    DisplayMovie(title);
    localStorage.setItem('movie',title);
})

let lastmovie=localStorage.getItem('movie');

if(lastmovie){
   input.value=lastmovie;
   DisplayMovie(lastmovie);
}