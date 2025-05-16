// 1. Push method: This method is used to add an element at the last index position of an Array.


// Ex-
// let a=[10,20,30,40,50];

// a.push(60);
// document.writeln(a);



// 2. pop method : This method is used to remove the last element of the array.

//Ex-

// let fruits=["apple","banana","papaya","mango"];
// fruits.pop();
// document.writeln(fruits);



// 3. at method : This method is used to access element at a specified index of an array.
// practically it is used to show last order, last message , recent post.
// Ex-

//  let num=[9,8,7,6,5];
//  let element=num.at(3);
//  document.writeln(element);



// 4. shift method : This method is used to remove first element of the arraay and returns it .
// practically it is used to remove oldest user input.

//Ex-

// let num=[1,2,3,4,5];
// num.shift();
// document.writeln(num);



// 5. unshift method : This method is used to add element at the first index position of the array.
// practically used for social media , chat apps where newest feeds or items appears at the top.

// Ex-

// let photo=["yesterday","day before yesterday"];
// photo.unshift("today");
// document.writeln(photo);



// 6. find  method: This method returns the first element in the array that satisfy the given condition.
// practically used to find a product by name.

//Ex-

// let num=[1,5,3,4,5];

// let result= num.findIndex(value=>value%2==0);
// let result2= num.find(value=>value%2==0);
// document.writeln(result+","+
//     result2);



// 7.slice method : this method is used to extract a portion of an array without modifying the original.
// practically used for selecting few part of array instead of first and last.

// let a=[1,2,3,4,5,6,7,8,9,10];

// let result=a.slice(1,5);
// document.writeln(result);



// 8. splice method: This method is used to add, remove , or replace elements in an array in place.


// let a=[1,2,3,4,5,6,7,8,9,10];

// a.splice(2,4);
// document.writeln(a);