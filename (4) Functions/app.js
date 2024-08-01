//function definition
function fun(){
    console.log('Hello from function fun');
}

//function call
fun();

function add(x,y,z){

}

//statically vs dynamically typed
//javascript is a weekly(or dynamically) typed language
let a=10;
console.log(a);
a='hello';
console.log(a);

function add(fun,x,y,z){    //parameters passed
    // console.log(x+y+z);
    fun();
    return x+y+z;
}
console.log(add(fun,1,2,3));    //arguments passed
console.log(add(fun,'kushagra',' how are you',' ,fine?'))
//we can pass a function as a parameter in function

//true is treated as 1 
//false is treated as 0

console.log(add(fun,false,1,1));
//empty string gets typecast to 0
//empty array gets typecast to empty string and then to 0

//functional expressions
const f=function(){
    console.log("hello");
}
console.log(f);
f();