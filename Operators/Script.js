// Operators:-

// 1.Arithmetic Operators :- These operators are used to perform calculation on values.
   let x=20;
   let y=5;  
document.writeln("Adiition of two numbers :",x+y);
document.writeln("Subtraction of two numbers :",x-y);
document.writeln("Multiplication of two numbers :",x*y);
document.writeln("Division of two numbers :",x/y);
document.writeln("Modulus of two numbers :",x%y);

// 2.Assignment Operators:- These operators are used to assign values to a variable.

let a=10;
let b=15;
 b+=a; // b=25
 a-=b; // 10-25= -15
 document.writeln(b)
 document.writeln(a)
let c=14;
let d=18;
d/=c;
document.writeln(d);

// 3. Relational Operators, Comparison Operators, Conditional operators:-
// These operators are used to compare values of two or more than two variabales.
// These includes :- >,<.<=,>=,==,===,!=
let e=15;
let f=14;
let g=15;

document.writeln(e>g); //false
document.writeln(e>=g); //true
document.writeln(e===g); //true

// 4. logical Operators :- These operators re used to cheeck the condition between 2 or more than 2 variables.
   // These includes :- AND (&&), OR(||) and NOT(!)
// 0 means false, 1 means true
   let age1=25;
   let age2=28;
   let age3=23;
   let age4=20;

   document.writeln(age1>age2 && age1<age4);
   // Displays False because it will only result in true if both the given conditions are true.

   document.writeln( age2>age1 && age4<age1);// displays true

   document.writeln(age1>age4 || age1<age3);// it displays true if one condition among all will be true.
   document.writeln(age1>age2 || age1<age3); // displays false only when both the condition is false.

   // Logical Not operator converts truth value in to false (!)
     