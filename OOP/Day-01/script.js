
// create a class for Student with minimum 5 attributes, create 3
// defferent objects with meaning ful name, and set and get all
// information.


// class Student{
//     name;
//     gender;
//     weight;
//     age;
//     height;

//     records(name,gender,weight,age,height){
//      this.name = name;
//      this.gender=gender;
//      this.weight=weight;
//      this.age=age;
//      this.weight=weight;
//     }
    
// }

// const Raj= new Student();
// Raj.records("Raj Verma","Male",67,19,5.12);

// const Abhi= new Student();
// Abhi.records("Abhishek Rajput","Male",69,19,5.11);

// const Rahul= new Student();
// Rahul.records("Rahul Singh","Male",58,19,6.2);

// document.writeln(Raj.name);
// document.writeln(Raj.weight);

// document.writeln(Rahul.name);
// document.writeln(Rahul.weight);





// create a class for Car with minimum 5 attributes, create 3
// defferent objects with meaning ful name, and set and get all
// information.


// class Car{
//     name;
//     company;
//     fuel;
//     color;
//     manufactured;

//     records(name,company,fuel,color,manufactured){
//      this.name=name;
//      this.company=company;
//      this.fuel=fuel;
//      this.color=color;
//      this.manufactured=manufactured;
//     }
    
// }

// const Nexon= new Car();
// Nexon.records("Nexon","Tata Motors","Diesel","black",2024);
// document.writeln(Nexon.name);
// document.writeln(Nexon.fuel);
// document.writeln(Nexon.manufactured);


// const Creta=new Car();
// Creta.records("Creta","Hyundai","Petrol","Blue",2025);
// document.writeln(Creta.name);
// document.writeln(Creta.fuel);
// document.writeln(Creta.manufactured);






// create class for ATM, with checkBalance, withdraw, deposit.

class ATM{
    debit;
    pin;
    balance=1000;

    deposit(debit,pin,balance){
        this.debit=debit;
        this.pin=pin;
       this.balance= this.balance+balance;

    }
    withdrawl(debit,pin,balance){
       this.debit=debit;
       this.pin=pin;
       this.balance=this.balance-balance;
       document.writeln("Balance after Withdrawl:",this.balance);
    }

    checkBalance(pin){
   this.pin=pin;
  document.writeln("Your balance:",this.balance);
    }
}


const depositor= new ATM();
depositor.deposit("Visa",2524,25000);

depositor.checkBalance(2524)
depositor.withdrawl("PNB",2524,5000);

 