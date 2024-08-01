//functions are heart of javascript

//non parameterised functions
function sum(){

    let num1 = 10;
    let num2 = 30;
    console.log(num1+num2);

}
sum();

//parameterised functions
//paramenters (arguments are passed)

function sum2(num1, num2){

    console.log(num1+num2);

}
sum2(10, 70);

function sum3(){

    let num1 = 10;
    let num2 = 30;
    return num1+num2;

}
sum3();

//one less argument is passed and function does not return anything
//output --> 10 undefined undefined
function sam4(num1, num2){
    console.log(num1);
    console.log(num2);
}
console.log(sam4(10));

//default parameterised functions
function sam5(num1, num2 = 40){

    console.log(num1);
    console.log(num2);
}
sam5(20);

//we can overrite or override the dedault parameter
sam5(20, 50);