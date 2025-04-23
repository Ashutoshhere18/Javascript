
// Q1. pattern : 
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

// for(let i=1;i<=4;i++){//outerloop
//     for(let j=1;j<=5;j++){//inner loop
// document.writeln(j);
//     }
//     document.writeln("<br>");
// }


// Q2. pattern:
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// for(let i=1;i<=4;i++){//outerloop
//     for(let j=1;j<=5;j++){//inner loop
// document.writeln("*");
//     }
//     document.writeln("<br>");
// }


//Q3. pattern :
// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4 

// for(let i=1;i<=4;i++){//outerloop
//     for(let j=1;j<=5;j++){//inner loop
// document.writeln(i);
//     }
//     document.writeln("<br>");
// }

// Q4. pattern :
// 1-3-5
// 1-3-5
// 1-3-5
// 1-3-5

// for(let i=1;i<=4;i++){
//     for(let j=1;j<=5;j+=2){
//        document.writeln(j+ "-");
//     }
//     document.writeln("<br>")
// }


//Q5. pattern :
// 1 0 1 0 1
// 1 0 1 0 1
// 1 0 1 0 1
// 1 0 1 0 1

// for(let i=1;i<=4;i++){//outerloop
//         for(let j=1;j<=5;j++){//inner loop
//     if(j%2==0){
// document.writeln("0");
//     }else{
// document.writeln("1");
//     }
//         }
//         document.writeln("<br>");
//     }



//         1
//       1 2
//     1 2 3
//   1 2 3 4
// 1 2 3 4 5

// for(i=1;i<=5;i++){
//     for(k=1;k<=5-i;k++){
//         document.writeln("&nbsp &nbsp");
        
//         }
//     for(j=1;j<=i;j++){
// document.writeln(j);
//     }
    
    
//     document.writeln("<br>");
// }
    

//         1
//       2 1
//     3 2 1
//   4 3 2 1
// 5 4 3 2 1

// for(let i=1;i<=5;i++){
//     for(let k=1;k<=5-i;k++){
//         document.writeln("&nbsp &nbsp");
        
//         }
//     for(let j=i;j>=1;j--){
// document.writeln(j);
//     }
    
    
//     document.writeln("<br>");
// }


//         5
//       4 5
//     3 4 5
//   2 3 4 5
// 1 2 3 4 5


// for(let i=1;i<=5;i++){
//     for(let k=1;k<=5-i;k++){
//         document.writeln("&nbsp &nbsp");
        
//         }
//     for(let j=6-i;j<=5;j++){
// document.writeln(j);
//     }
    
    
//     document.writeln("<br>");
// }


//         5
//       5 4
//     5 4 3
//   5 4 3 2
// 5 4 3 2 1


// for(let i=5;i>=1;i--){
// for(let k=1;k<i;k++){
// document.writeln("&nbsp &nbsp");

// }
   
//     for(let j=5;j>=i;j--){
//      document.writeln(j);
//     }
//     document.writeln("<br>");
// }
        

//         1
//       2 1
//     3 2 1
//   4 3 2 1
// 5 4 3 2 1

// for(let i=1;i<=5;i++){
// for(let k=5;k>i;k--){
// document.writeln("&nbsp &nbsp");

// }
   
//     for(let j=i;j>=1;j--){
//      document.writeln(j);
//     }
//     document.writeln("<br>");
// }


//         1
//       2 2
//     3 3 3 
//   4 4 4 4
// 5 5 5 5 5

for(let i=1;i<=5;i++){
//     for(let k=5;k>i;k--){
// document.writeln("&nbsp &nbsp");
//     }
    for(let j=5;j>=i;j++){
document.writeln(i);
    }
    document.writeln("<br>");
}