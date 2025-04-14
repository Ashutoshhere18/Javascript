
//Q3. wap to print number from n1 to n2

// step-1: Take input from user in n1,n2

let n1=parseFloat(prompt("Enter starting number:"));//start
let n2=parseFloat(prompt("Enter ending number:"));

while(n1<=n2)//condition,end
{
    document.writeln(n1);
    n1++; // ++/--
}
