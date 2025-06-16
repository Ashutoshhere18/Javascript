// 1.Define a class named Rectangle with private attributes length and width.
//  Implement public member functions to set and get the values of these attributes.
//   Include a method to calculate the area of the rectangle.
//    Create an object of the Rectangle class and demonstrate the functionality of the implemented methods.


// class Rectangle{
//     #length;
//     #width;

//     setInput(length,width){
//       this.#length=length;
//       this.#width=width;
//     }

//     getOutput(){
//             document.writeln("Length:",this.#length);
//       document.writeln("Width:",this.#width);
//       document.writeln("<br>");
//     }

//     AreaOfRec(){
//         document.writeln("Area of rectangle:",this.#length*this.#width);
//     }
// }

// const shape= new Rectangle();

// shape.setInput(25,25);
// shape.getOutput();
// shape.AreaOfRec();








// 2. Define a class named `Employee` with private attributes `name`, `salary`, and `designation`. 
// Encapsulate these attributes using appropriate access specifiers. 
// Implement public member functions to set and get the values of these attributes. 
// Demonstrate the encapsulation concept by accessing these attributes through the member functions.


// class Employee{
//     #name;
//     #salary;
//     #designation;

//     details(name,salary,designation){
//       this.#name=name;
//       this.#salary=salary;
//       this.#designation=designation;
//     }

//     getDetails(){
//         document.writeln("Name:",this.#name,"<br>");
//         document.writeln("Salary:",this.#salary,"<br>");
//         document.writeln("Designation:",this.#designation,"<br>");
//     }

// }

// const emp1=new Employee();

// emp1.details("Shravan Kumar",25000,"Supervisor");
// emp1.getDetails();








// 3.Create a class representing a `Movie` with attributes like `title`, `genre`, and `releasedYear`. 
// Demonstrate the instantiation of objects using array and accessing their attributes.



// class Movie{   // Created class named Movie
 
//     constructor(title,genre,releasedYear){   // Constructor is initialised to set input title,genre and releasedyear
//         this.title=title;       // value of local variable(title) is assigning to global variable using this.(keyword);
//         this.genre=genre;       // similar process like above line.
//         this.releasedYear=releasedYear;      // similar process like above line.
//     }
 
         
// }

// let movie1=new Movie("Kuch Kuch hota hai","Romantic",2000);     // An object is created named movie1 to access the value of Movie using new keyword.
// let movie2=new Movie("Dangal","Drama",2016);  // Another object is created named movie2 to access the value of Movie using new keyword.

// let movie=[movie1,movie2];       // created aaray named movie and pushed movie1 and movie2 into it.

// for(let i=0;i<movie.length;i++){  // for loop is used to get the values of each individual record.
//     document.writeln("<br>");      // br tag for new line after completion of each rotation of loop. 
//     document.writeln("Movie Title:",movie[i].title,"<br>");      // to display movie title using array and object.
//     document.writeln("Genre:",movie[i].genre,"<br>");            // to display movie genre using array and object.
//     document.writeln("Realeased Year:",movie[i].releasedYear,"<br>"); // to display movie releasing year using array and object.

//     document.writeln("----------------------------------");   // this is written to seperate each movie , so it can becomes clear to read.
// }










// 4. Define a class named `BankAccount` with private attributes `accountNumber`, `balance`, and `ownerName`.
//  Encapsulate these attributes using appropriate access specifiers.
//   Implement public member functions to credit, debit, and display the balance. 
// Demonstrate encapsulation by interacting with the class through its member functions.


// This program i had done twice. Already done









// 5.Create a class representing a `Book` with attributes like `title`, `author`, and `publishedYear`. 
// Demonstrate the instantiation of objects using array and accessing their attributes.


// class Book{
//     constructor(title,author,publishedyear){
//         this.title=title;
//         this.author=author;
//         this.publishedyear=publishedyear;
//     }

// }

// const book1=new Book("To kill a mocking bird","Harper Lee",1960);
// const book2=new Book("The Great Gatsby","F.Scott Fitzgerald",1925);
// const book3=new Book("The Alchemist","paulo Coehlha",1988);

// let bookInformation=[book1,book2,book3];

// for(let i=0;i<bookInformation.length;i++){
//     document.writeln("<br>");
//  document.writeln("Book title:",bookInformation[i].title,"<br>");
//  document.writeln("Book Author:",bookInformation[i].author,"<br>");
//  document.writeln("Book publised Year:",bookInformation[i].publishedyear,"<br>");

//  document.writeln("------------------------------------");
// }














// 6. Define a class `Person` with private attributes `name`, `age`, and `address`.
//  Encapsulate these attributes using getter and setter methods. 
//  Implement a parameterized constructor for the `Person` class. 
// Create N number of objects using this constructor and display the details.


// class person{
//     #name;
//     #age;
//     #address;
//     constructor(name,age,address){
//         this.#name=name;
//         this.#age=age;
//         this.#address=address;
//     }

//     display(){
//         document.writeln("<br>");
//         document.writeln("Name:",this.#name,"<br>");
//          document.writeln("Age:",this.#age,"<br>");
//           document.writeln("Address:",this.#address,"<br>");
//           document.writeln("--------------------------------");
//     }
    
// }

// const person1 =new person("Alice",18,"Kerela");
// const person2=new person("Sonam",22,"New Delhi");
// const person3=new person("Aurobindo",28,"Patna");

// person1.display();
// person2.display();
// person3.display();










// 7.Create a class `Student` with private attributes `name`, `rollNumber`, and a parameterized constructor.
//  Demonstrate the instantiation of objects using this constructor with help of array.


// class Student{
//     #name;
//     #rollNumber;

//     constructor(name,rollNumber){
//     this.#name=name;
//     this.#rollNumber=rollNumber;
//     }
//     getName(){
//         return this.#name;
//     }
//     getRoll(){
//         return this.#rollNumber;
//     }
// }

// const stud1=new Student("Aryan",15);
// const stud2=new Student("Shaurya",8);
// const stud3=new Student("Tilak",25);

// let list=[stud1,stud2,stud3];

// for(let i=0;i<list.length;i++){
//     document.writeln("<br>");
//     document.writeln("Name:",list[i].getName(),"<br>");
//     document.writeln("Roll No:",list[i].getRoll(),"<br>");
//     document.writeln("-------------------------------");
// }








// 8. Define a class `Car` with private attributes `model`, `year`, and `speed`.
//  Encapsulate these attributes using appropriate access specifiers.
//   Implement public member functions to set and get the values of these attributes.
//  Demonstrate encapsulation by accessing these attributes through the member functions.


// class Car{
//     #model;
//     #year;
//     #speed;

//     constructor(model,year,speed){
//      this.#model=model;
//      this.#year=year;
//      this.#speed=speed
//     }

//     display(){
//         document.writeln("Model:",this.#model,"<br>");
//          document.writeln("Year:",this.#year,"<br>");
//           document.writeln("Speed:",this.#speed,"<br>");
//     }
// }

// const car1= new Car("Toyota Fortuner",2022,"180km/h");
// car1.display();