
// What is Array in javascript?
// ---> In javascript, an array is a special variable used to store multiple values in a single variable.
// ---> Arrays are defined using square brackets [].
// ---> Array elements are accessed using index numbers, starting from 0.
// --->  comma(,) is used as a seperator between more than one elements.


// PRACTICE = PROGRESS

// Task 1:-  Print the array

// let values=[1,2,3,4,5,6,7,8,9,10];

// for(let i=0;i< values.length;i++){
// // array name.length is used to find total no of elements in short size.

// document.writeln(values[i]);
// }



// Task 2:- // print only even numbers of array - This is used to filter data of ecommerce websites.

// let nums=[10,12,13,15,18,19,20,21,23,43];

// for(let i=0;i<nums.length;i++){
//    if(nums[i]%2==0){
// document.writeln(nums[i]);
//    };
// }




// Task 3:- print sum of array. (This is mostle used in supermarkets to total the amount of products purchased by individual. )

// let purchase=[550,55,250,65,87,78,990,25,87];
// let total=0;

// for(let i=0;i<purchase.length;i++){
//    total= total + purchase[i];
// }

// document.writeln(total);




// Task 4:-  print reverse array.

// let a=[10,20,30,40,50];

// for(let i=a.length-1;i>=0;i--){

//     document.writeln(a[i]);
// }




// Task 5:- Perform addition between two array.

let a=[5,10,15,20,25];
let b=[4,8,12,16,20];

for(let i=0;i<a.length;i++){
document.writeln(a[i]+b[i]);
}