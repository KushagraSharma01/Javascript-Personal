//observe


function someFunc(){
    let username = 'Einstien';

    function printName(){
        console.log(username);
    }
    return printName;
}

let returnedValue = someFunc();

returnedValue();

//Closure
    // A function bundled together with reference to its surrounding state 
    // or lexical environment is called Closure.

//here printName is a closure of someFunc
//A closure function can access all the variables and functions on which it is dependent
//Closure is created by returing the function