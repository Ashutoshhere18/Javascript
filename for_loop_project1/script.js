

// pattern to print diamond shape

let x=10;
let y=10;

for(let i=1;i<=10;i++){
    for(let j=1;j<=20;j++){
    if(j==x||j==y){
document.writeln("*");
    }else{
document.writeln("&nbsp&nbsp");
    }
    }
    x--;
    y++;
    document.writeln("<br>")
}
x=2;
y=18;
for(let i=1;i<=9;i++){
    for(let j=1;j<=20;j++){
    if(j==x||j==y){
document.writeln("*");
    }else{
document.writeln("&nbsp&nbsp");
    }
    }
    x++;
    y--;
    document.writeln("<br>")
}



// Using single nested loop
// let x=10;
// let y=10;


// for(let i=1;i<=19;i++){
//     for(let j=1;j<=19;j++){
// if(j==x||j==y){
// document.writeln("*");
// }
// else{
// document.writeln("&nbsp");
// }

//     }

// x--;
// y++;

// document.writeln("<br>");
//     }
   
  
