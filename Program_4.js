// Write a program to print grades of student based on their percentage.

let per=89;

if(per>=90){
    document.writeln("A+")
}
else if(per>=85 && per<90){
    document.writeln("A")
}
else if(per>=80 && per<85){
    document.writeln("B+")
}
else if(per>=70 && per<80){
    document.writeln("C+")
}
else if(per>=60 && per<70){
    document.writeln("C")
}
else if(per>=50 && per<60){
    document.writeln("D")
}
else if(per>=40 && per<50){
    document.writeln("E")
}
else{
    document.writeln("FAIL")
}