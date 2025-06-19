// Q1.Create a Car class that has brand and model properties.
//  Use a constructor to initialize them. 
//  Create a method getDetails() that returns the full name of the car.


// class Car{
//     constructor(brand,model){
//      this.brand=brand;
//      this.model=model;
//     }

//     getdetails(){
//         document.writeln("Car:", this.brand,"&nbsp",this.model);
//     }
// }

// const customer=new Car("Toyota","Innova");
// customer.getdetails();



//Q2.Create a Person class that stores name and age.
//  Make age private (use closure or #age) and provide methods to getAge() and setAge() safely.


// class Person{
//     #age;
    
//     setage(name,age){
// this.name=name;
//    this.#age=age;
//     }

//     getage(){
//         document.writeln("Name:",this.name,"<br>");
//         document.writeln("Age:",this.#age);
//     }
// }

// const person1=new Person();
// person1.setage("Arvind Kumar",25);
// person1.getage();




// Q3.Create a User class where the password should be private.
//  Add methods to changePassword() and checkPassword().

// class User{
// #password;
// constructor(password){
//     this.#password=password;
// }

// changepassword(newpassword){
// this.#password=newpassword;
// }

// checkpassword(){
//     document.writeln("Your new password is:",this.#password);
// }
// }

// const user1=new User("Hellothereiamhere");
// user1.changepassword("Hellotherewhyhere?");
// user1.checkpassword();




// Q4. Create a Calculator class that hides the internal result property (e.g., using #result). 
// Add methods to add(num), subtract(num), and getResult().

// class Calculator{
//     #result;
//     constructor(result){
//         this.#result=result;
//     }
   

//     add(num1,num2){
//       document.writeln("Addition of two number is:",num1+num2,"<br>");
    
//     }
//     sub(num1,num2){
//       document.writeln("Subtraction of two number is:",num1-num2);
      
//     }

//     getResult(){
//       document.writeln(add());
//       document.writeln(sub());
//     }
// }

// const calci=new Calculator();
// calci.add(20,20);
// calci.sub(50,30);
// calci.getResult();







// Q5.Create a BankAccount class where balance is private. 
// Add deposit(amount), withdraw(amount), and getBalance() methods. 
// Try to access balance directly (it should not work).


// class BankAccount{
//     #balance;
//     constructor(balance){
//         this.#balance=balance;
//     }

//     deposit(amount){
//      this.#balance=this.#balance+amount;
    
//     }

//     withdraw(amount){
//       this.#balance=this.#balance-amount;
      
//     }

//     getBalance(){
// document.writeln("Total Balance:",this.#balance);
//     }
// }

// const acHolder=new BankAccount(20000);
// acHolder.deposit(5000);
// acHolder.withdraw(10000);
// acHolder.getBalance();
// acHolder.balance();







// Q6. Create a Vehicle class with a method move().
//  Then create a Bike class that extends Vehicle. 
// Create an object of Bike and call the move() method.

// class Vehicle{
//     move(){
//      document.writeln("Vehicle is moving");
//     }
// }

// class Bike extends Vehicle{

// }

// const bike=new Bike();
// bike.move();








// Q7.Create a Person class with a method greet(). 
// Create a Student class that extends Person and adds a method study().
//  Use both methods on a Student object.


// class Person{

//     greet(){
//       document.writeln("Its delight to greet with you!<br>");
//     }
// }

// class Student extends Person{

//     study(){
//  document.writeln("Before student you have to be good person!");
//     }
// }

// const Stud1=new Student();
// Stud1.greet();
// Stud1.study();








// Q8.Create a Bird class with a method makeSound(). 
// Then create Sparrow and Parrot classes that 
// override the makeSound() method with their unique sounds.


class Bird{
   
    makeSound(){
        document.writeln("Some sounds of bird:");
    }
}
class Sparrow extends Bird{
   makeSound(){
    document.writeln("Sparrow sounds like chirp chirp!<br>",);
   }
}

class Parrot extends Bird{
makeSound(){
    document.writeln("Parrot sounds like squawks squawks!");
   }
}

const bird1=new Sparrow();
bird1.makeSound();

const bird2=new Parrot();
bird2.makeSound();







//Q9.Create a Shape class with a method area(). 
// Then create Circle and Square classes that extend Shape
//  and implement their own area() logic.

// class Shape{
//     constructor(name,area){
//     this.name=name;
//     this.area=area;
//     }
//     displayname(){
//         document.writeln(this.name);
//     }
//     calculateArea(){
//     document.writeln("Area of given shape is:",this.area,"<br>");
//     }
// }

// class Square extends Shape{
   
//     constructor(side){
        
//      super("Square",side*side);
//       this.side=side;
//       this.displayname();
//     }
// }

// class Circle extends Shape{
// constructor(radius){
        
//      super("Circle",3.14*radius*radius);
//      this.radius=radius;
//      this.displayname();
//     }
// }

// const one=new Square(15);
// one.calculateArea();

// const two=new Circle(5);
// two.calculateArea();






// Q10.Create an array of Shape objects (like Circle and Square) and 
// use a forEach() loop to print
//  the area of each shape. This demonstrates polymorphism in action.


// class Shape{
//     constructor(name,area){
//     this.name=name;
//     this.area=area;
//     }
   
    
// }

// class Square extends Shape{
   
//     constructor(side){
//         super();
//       this.side=side;
      
// }
//  calculateArea(){
//         document.writeln("Area of Square is:",side*side);
//     }
// }

// class Circle extends Shape{
// constructor(radius){
//     super();
//         this.radius=radius;
       
// }
//  calculateArea(){
//         document.writeln("Area of Circle is:",3.14*radius*radius);
//     }
// }

// const one=new Square(15);
// const two=new Circle(5);

// let shapes=[one,two];

// shapes.forEach(shape=>{
//     shape.calculateArea();
// });