// Write a program to check the voting eligibility of user.

let age=22;
if( age>100){
document.writeln("Age is enough to vote!")
}
else if(age>18){
    document.writeln("You are eligible!")
}
else if(age<0){
    document.writeln("Negative age is not allowed!")
}
else if(age==0){
    document.writeln("Please enter valid age!")
}
else{
    document.writeln("You are not eligible!")
}