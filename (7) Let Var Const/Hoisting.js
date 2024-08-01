//------------------------------------------

// var a = 20;

// function meraFunc(){
//     console.log("inside mera function");

// }

// console.log(a);
// meraFunc();

//------------------------------------------

// Hoisting --> When you access a variable/function before it's declaration, this concept is called Hoisting

// console.log(a); // will print undefined
// meraFunc();

// function meraFunc(){
//     console.log("inside mera function");

// }

// var a = 20;

//-----------------------------------------
//outputs

// var a = 10;
// sam();
// function sam(){
//     console.log(a);
//     console.log('inner func');
// }
// console.log(a);



console.log(a);
sam();
function sam(){
    console.log(a);
    console.log('inner func');
}

let a = 10;

// **************************************************

// Q-> Does Hoisting happens in case of "let" and "const".
// Yes It Happens but inside "Dead Temporal Zone".
//which does not allow us to access the variables before their declaration

//Dead Temporal Zone is time delay between MCP and CEP

//In the MCP we initialised with undefined to the variable
//but until we initialise it with their actual value by excuting it's declaration
//in CEP first, It will not allow us to access the variable in case of let and const

//In case of let and const Hoisting happens this can be shown by the error it throws,
//it throws an error saying cannot access "b". So it does know about the variable "b" and not 
//throwing b is not defined error, but is not allowing us to access the value of b before initialization.




