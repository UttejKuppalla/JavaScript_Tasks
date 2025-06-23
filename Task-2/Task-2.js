//===================================Task-2 JAVASCRIPT ===============================

//Write a JavaScript script that compares 
//two variables using different comparison operators (==, ===, !=, !==, >, <, >=, <=) and prints the results.

var a = 10;
var b = 20;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);   

//Even or Odd

var ev = 37;
console.log(ev%2==0 ? "Even" : "Odd");

// checks if a user is an adult (18+) or a minor.

var checkAge = prompt("Enter age to Check Eligibility : ");

console.log(checkAge>=18 ? "Eligible" : "Not Eligible");

// set it to a value between 0 and 100.
//  Use nested ternary operators to classify the score into grades:
//   A (>= 90), B (>= 75), C (>= 60), D (>= 45), and F (below 45).
//    Log the grade.


var marks = prompt("Enter Your Marks : ");

console.log(marks>=90 ? " A " : marks>=75 ? " B " : marks>=60 ? " C " : marks>=45 ? " D " : " F ");

// Temperature Check: Declare a variable temperature and 
// use nested ternary operators to categorize it as "Hot" (above 30),
//  "Warm" (20-30), "Cool" (10-19), and "Cold" (below 10). 
//  Log the result.

var temperature = prompt("Enter Temperature :");
console.log( temperature>30 ? "Hot" : temperature>=20 ? "Warm" : temperature >=10 ? " Cool" : "Cold");

// Age Group: Declare a variable age and 
//  use the ternary operator to classify the age into "Child"
//   (0-12), "Teen" (13-19), "Adult" (20-64), 
//   and "Senior" (65 and above). Log the result.

var age = prompt("Enter Age to check your Category :");
console.log(age>=65 ? "Senior" : age>=20 ? "Adult" : age>=13 ? "Teen" : "Child");


