
//js is a programming language


//it is weakly typed
//it is dynamically typed
//it is Synchronous
//it is Single threaded

//Single Threaded 
//  --> JS engine can execute one statement at a time
//  --> It has a callstack where all tasks are done one by one

//Synchronous
//  --> Exection is done in Order
//  --> Execution is done in one order only
//  --> Does not wait in between execution 


//but to create delay(or to do asynchronous programming) in js we have a method for it

//* setTimeout() method

//but delay should not be possible in the execution by js
//This is possible because SetTimeout is not a method of js
//It is a method of "browser" (or "node js" here)

//It accepts two parameters --> one a callback function and another the delay to be made

// console.log('start');

// setTimeout(function(){
//     console.log('run after 4 secs');
// }, 4000);

// console.log('end');

//here start and end will print before run after 4 secs beacuse after printing start, js will not wait for 4 secs
// to print "hello" but will continue to execute the statements below

//browser methods (Web Api's) -->
//  Location
//  Local Storage
//  setTimeout
//  setInterval
//  url
//  console  (console.statements)

//**Behind The Scene working of above code

// --> refer to notebook notes for diagrams

//  --> when inside MCP, there is no variable or function to allocate memory to, so it goes to CEP.

//  --> Now when in CEP it encounters first "console method" which is accessed by js(Global Execution Context here) through browser or node js

//  --> Now Browser will set a timer on encountering the setTimeout, after which the callback function inside setTimeout will run

//  (in Call Stack the GEC will execute the last console "end" and brower would have stored the setTimeout function in it's memory)

//  --> Now after the execution of last line of code by CEP, the GEC will be destroyed (then how will the function inside setTimeout will be executed?)

//  --> When a setTimeout is encountered, a timer of browser starts and the callback func of setTimeout is stored in the memory(register) till the given time

//  --> Now after the completion of delay time, this callback func(CB) goes to the "callback queue" of the browser. After which it goes to "event loop" and then to the callstack.

//** whenever we use any Web Api (Brower methods) then the above procedure is followed
 
// Callback Queue --> A queue (FIFO) which stores all the methods/functions inside it

// Event Loop  --> Event Loop ensures that the callstack is empty before puting a function/method from callback queue to callstack

// (After GEC is destroyed, this callback function creates it's own Execution Context to be executed)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//questions

//1.
// console.log('start');

// setTimeout(function(){
//     console.log('after 2 sec');
// }, 2000);

// setTimeout(function(){
//     console.log('after 4 sec')
// }, 4000);

// console.log('end');

// "after 2 sec" and "after 4 sec" will print at a gap of 2 sec and not at a gap of 4 sec
//1:02

//2.
//*This means even when the delay time is 0, the callback function of setTimeout will not be sent to 
//call stack untill the call stack becomes empty(when all other statements are executed)


console.log('start');

setTimeout(function(){
    console.log('after 0 sec first');
}, 0);

console.log('end');

//output ---> "start" "end" "after 0 sec first"



