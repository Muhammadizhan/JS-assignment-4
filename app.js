
 var number = parseInt(prompt("Enter a number to generate its multiplication table:"));


 document.write("<h2>Multiplication Table for " + number + "</h2>");
 document.write("<table border='1'>");
 
 for (var i = 1; i <= 10; i++) {
     var result = number * i;
     document.write("<br>" + number + " × " + i + " = " + result + "<br>" );
 }
 document.write("</table>");




 //Factorial of 5

 var factorial = 1; 


for (var i=1;i<=5;i++){
    factorial*=i;
}

 document.write("<h2>Factorial of 5 is: " + factorial + "</h2>");