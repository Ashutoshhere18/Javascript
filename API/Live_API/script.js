
const input=document.getElementById("input");
const btn=document.getElementById("btn");
const content=document.getElementById("content")




function DisplayWeather(city){
    input.value="";
    content.innerHTML="";
const  api="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=f1077897e3b52da4145840756fbdddcb&units=metri"

    fetch(api).then(response=>response.json()).then((data)=>{
    
  const title=  document.createElement("h3");
  title.textContent=city;
  content.appendChild(title);
  const temp=  document.createElement("p");
  temp.textContent="Temperature:"+data.main.temp;
  content.appendChild(temp);
   const feels=  document.createElement("p");
  feels.textContent="Feels like:"+data.main.feels_like;
  content.appendChild(feels);
     const speed=  document.createElement("p");
  speed.textContent="Wind Speed:"+data.wind.speed;
  content.appendChild(speed);
const humidity=  document.createElement("p");
  humidity.textContent="Humidity:"+data.main.humidity;
  content.appendChild(humidity);
  const sealevel=  document.createElement("p");
  sealevel.textContent="sea_level:"+data.main.sea_level;
  content.appendChild(humidity);
  const pressure=  document.createElement("p");
  pressure.textContent="Pressure:"+data.main.pressure;
  content.appendChild(humidity);
    const country=  document.createElement("p");
  country.textContent="Country:"+data.sys.country;
  content.appendChild(country);
})
}

btn.addEventListener('click',()=>{
    let city=input.value
    DisplayWeather(city);
})

