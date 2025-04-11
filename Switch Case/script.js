// wap print month name by user choice of number.
// 1 --> january
// 12 --> december
// 134 -> enter valid month

let months=parseInt(prompt("Enter number for month:"));
// console.log("1.January <br> 2.February<br> 3.March<br> 4.April");

switch(months){
    case 1:
        document.writeln("January");
        break;
    case 2:
            document.writeln("February");
            break;
    case 3:
         document.writeln("March");
          break;
    case 4:
        document.writeln("April");
        break; 
    case 5:
        document.writeln("May");
          break;
    case 6:
        document.writeln("June");
          break;
    case 7:
        document.writeln("July");
          break;
    case 8:
        document.writeln("August");
          break;
    case 9:
        document.writeln("September");
          break;
    case 10:
        document.writeln("October");
          break;
    case 11:
        document.writeln("November");
          break;
    case 12:
        document.writeln("December");
          break;
          default:
            document.writeln("Enter valid option !");
}