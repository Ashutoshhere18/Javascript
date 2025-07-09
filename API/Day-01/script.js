
// first Method:-

let API=[];
fetch("https://jsonplaceholder.typicode.com/albums")
.then((value)=>{
    return value.json()
})
.then((data)=>{
 API=data
//  console.log(API.length);
  API.forEach(element => {
    document.writeln(element.id+""+element.title+"<br>")
  });
})




