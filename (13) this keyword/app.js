
//this

//to whom "this" is pointing is decided by your function calling/invocation.

//5 types of function invocation

//  1. Regular function invocation
//  ex :-

    // function fn(){

    // }

    // fun();

//  2. Method invocation

    // let Obj = {
    //     fn : function(){
    //         console.log("hello");
    //     }
    // }

    // Obj.fn();

//  3. Constructor invocation

    //function fn(){

    // }

    // let obj1 = new fn();

//  4. Indirect invocation
    
    //call()

    //apply()

    //bind()

//  5. Arrow function

    //ex:-
    //const fn = () => {}

//----------------------------------------------------------------

// 1. regular invocation

// function fn(){
//     console.log(this);
// }

// fn();       //Global object

//now whenever a js code is run, a GEC is created and whenver GEC is created along with it a
//Global object is also created.

//In case of browser this Global object is called Window object 
//In case of node js this Global objec is called Global

//whenever we call a function directly(regularly) then
//"this" point to the Global object

//---------------------------------------

// 2. method invocation

// let obj = {

//     number : 2,

//     fn : function(){
//         console.log(this);
//     }

// }

// obj.fn();   // points to object obj

// IMP case

// let obj = {

//         number : 2,
    
//         fn : function(){
//             console.log(this);
//         }
    
//     }
    
// let myFun = obj.fn;  
// myFun();    // points to Global Object

//does'nt matter where the function lies
//what matters is how the function is called/invoked
// in the above case we called the function in regualr way
//that's why this points to global Object


//IMP case

// let obj2 = {

//     fn : function(){

//         function calculate(){
//             console.log(this);
//         }

//         calculate();    //regular invocation
//         }

// }

// obj2.fn();  //points to Global Object (as "this" is inside calculate function and calculate is called in regular way)

//---------------------------------------------

//  3. Contructor function invocation

// function CreateObj(){
//     this.x = 20;    //here "this" points to newly created object
// }

// let obj = new CreateObj();
// console.log(obj);
// console.log(obj.x);     //20

//above we can access the obj.x
//so x must be present inside obj

//so in case of constructor invocation "this" points 
//to the newly created object(as to provide it properties)

//----------------------------------------------------------\

//  4. Indirect Invocation (.call(), .apply(), .bind())

//call() method

// let obj = {
//     a : 20,
//     fn: function(){
//         console.log(this);
//     }
// }

// let obj2 = {
//     a : 50
// }

// obj.fn(); //points to object obj

// obj2.fn();  //error (fn is not a function)

// obj.fn.call(obj2); // --> calling obj.fn from obj2 by using "call" method of the function

// here "this" will point to obj2
//from the reference of obj2 this function fn is being called
// that is why "this" points to obj2

// whenever we use "call()" method "this" points to the obj/funtion/etc passed in call method 


//apply()

// let obj = {
//     a : 20,
//     fn: function(a, b, c){
//         console.log(this, a, b, c);
//     }
// }

// let obj2 = {
//     a : 50
// }

// let obj3 = {
//     name : 'samarath'
// }

//giving multiple arguments along with the refernce(obj3 here) by using call() method
// obj.fn.call(obj3, 1, 2, 3); //points to obj3

// obj.fn.apply(obj3, 1, 2, 3); // error

// obj.fn.apply(obj3, [5, 6, 7]); //correct way (points to obj3)

// we use these methods to use different properties of diff objects in another object


//bind()

// let obj3 = {
//     fn : function(){
//         console.log(this);
//     }
// }

// let myFun = obj3.fn.bind(obj3);  // by using bind method we bind the reference of the function to the argument passed in it
// myFun();  // so regardless of the way of invocation "this" will always point to the binded reference 

//here "this" will point to obj3 even when the funciton is called in regular way


//5. Arrow functions

//In case of Arrow Functions, "this" points to the lexical parent ka "this"
    //this.(context)
//where parent's this will point, same will be pointed by the "this" of Arrow Function