
// Wap to print leap years from start year to end year

let y1=parseInt(prompt("Enter starting year:"));//start
let y2=parseInt(prompt("Enter ending year:"));

while(y1<=y2) //end
    {
   if(y1%4==0) //condition for finding leap year
    {
 document.writeln(y1);
   }
   y1++; //increment/decrement
}