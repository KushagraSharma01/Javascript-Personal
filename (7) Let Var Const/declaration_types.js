//types of declaration

//before Echma Script 6 (ES6)
// we had only single type of declaration using "var"

//after ES6
//we have total 3 types of declarations

//1. let
//2. var
//3. const
//---------------------------------------------

//let vs const

//redeclare --> declaring a variable more than once(let a = 10; let a = 5;)

//reassign --> reassigning the value of a variable(let a = 10; a = 100)

//-----------------------------------------------

// const way 1
const email = "samarth@gmail.com";
console.log(email);

//can we redeclare --> No
// const email = 4; --> Error

//can we reassign --> No
//email = "sam"  --> error (assignment to a constant variable)

//is it valid --> No
// const naam;
// naam = "kushagra";
//we have to initialise our const at the time of declaration
//---------------------------------------------

//let way 2
let nam = "sam";
console.log(nam);

//can we redeclare --> No
// let nam = "kush";

//can we reassign it --> Yes
nam = "kush";

//is it valid  --> Yes
let kam ;
kam = "hello";
//---------------------------------------------

//var way 3
var cllg = true;
console.log(cllg);

//can we redeclare it --> Yes
var cllg = "cllg";

//can we reassign it --> Yes
cllg = "flag";

//is it valid  --> Yes
var jam ;
jam = "hello";