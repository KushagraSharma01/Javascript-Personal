//Scopes (Valid Range)

//Let & Const have "Block scope"

//Var has "Functional scope"

//-----------------------------------

var b = 10;

function fun(){

    console.log(b);

}

fun();

//this function will first check for the value of b in the local memory(MCP) of it's Execution Context
//then it will check in the local memory(MCP) of it's lexical parent.

//**Scope --> Local Memory + lexical environment of it's parent

//**Lexical Env --> Local Memory(MCP) + Parent's lexical environment

//this forms a "recursion" which goes infinitely to all the parents
//untill the value is found or their is no parent any more

//parent of GEC is null

//check notebook notes

//eg 3
// let score = 50;
// if(score>33){
//     let x = 20;
// } 
// console.log(x);

//eg4 

// var a = 100;
// function fun(){
//     var a = 50;
//     console.log(a);
// }
// fun();
// console.log(a);



// let x = 5;
// {
//     let x = 4;      //have to give the variable type to allocate new memory
//     {
//         console.log(x);
//     }
// }
// console.log(x);
