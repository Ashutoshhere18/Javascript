// Creating ATM using constructor

class ATM{
    constructor(debit,balance){
    
     this.balance=balance;
    }

    setPin(pin){
        this.pin=pin;
      alert("Pin set successfully!");
    }
     
   
deposit(debit,pin,balance){
     if(this.pin==pin){
         this.debit=debit;
        this.balance=this.balance +balance;
        document.writeln("Your Balance after deposit :",this.balance,"<br>");
    }
    else{
        document.writeln("Please enter valid pin");
    }
    }

withdraw(debit,pin,amount){
  if(this.pin==pin){
    if(amount<this.balance){
        this.balance=this.balance-amount;
        document.writeln("Your balance after withdraw:"+this.balance);
    }
    else{
 document.writeln("Insufficient fund!");
    }
  }
  else{
    document.writeln("Please enter valid pin");
  }
}
      
}

const user=new ATM("debit",1000);
user.setPin(1254);

user.deposit("debit",1254,5000);
user.withdraw("debit",1254,2000);