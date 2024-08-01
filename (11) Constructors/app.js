//.__proto__  --> points to the parent prototype of object/function/etc
//.prototype --> points to the prototype of current object/function


// function fn(){

// }

// let res = fn();

// console.log(res); //undefined

//------------------------------------------------

//contructor

function user(){

}

let user1 = new user();
console.log(user1); // empty object

//Constructor Function -->
//      new keyword before the function calling is creating this function as a constructor function
//      whose job is to create objects.

//to set the values in the above object created, we will use "this" keyword
function user2(){

    this.username = 'samarth';      //providing properties
    this.email = 'samarthvohra@gmail.com'

}

//here "this" keyword is binding the values with the object formed using user2
//pointing to the object which is made by using user2

let user22 = new user2();
console.log(user22); 

//-------------------------------------------------------------------------------

function constr(username, email){

    this.username = username;      //providing properties
    this.email = email;
    this.decription = function(){
        return `My name is ${this.username}`;
    }

}

let use1 = new constr("samarth", "abc@gmail.com");
let use2 = new constr("kushagra", "kush@gmail.com");
console.log(use1); 
console.log(use2); 

//constructor is used to create objects
//in javascript contructors are blueprint of objects

//Conventions for Constructors
// --> create a constructor starting with capital letter


console.log(constr.__proto__ === Function.prototype); //true 

//When we create a constructor, we also create it's prototype (which is a function(BTS Object) whose prototype is Function.prototype and whose prototype is Object.prototype)
//whose properties can be defined by us

//-------------------------------------------------------------------------

//now in the above case "description" is same for all objects as it is not
//customizable individually (coz it depends on the username)
//so we can instead of writing it in constructor we can add it to the prototype property

function Constr(username, email){

    this.username = username;      //providing properties
    this.email = email;

}

Constr.prototype.decription = function(){
    return `My name is ${this.username}`;
}

let u1 = new Constr("samarth", "abc@gmail.com");
let u2 = new Constr("kushagra", "kush@gmail.com");

console.log(u1); 
console.log(u2); 
console.log(u2.decription())

console.log(Constr.prototype);
console.log(Constr.prototype.__proto__);
console.log(Constr.prototype.description);

//prototypal chain for above example ->

// u1
//   |
//   |-- __proto__ --> Constr.prototype  (or Function Prototype, Same as which every object created using this constructor will have)
//                       |
//                       |-- description (methods and properties provided by us exclusively only, if not them empty object )   
//                       |
//                       |-- __proto__ --> Object.prototype
//                                           |
//                                           |-- toString (method)
//                                           |-- hasOwnProperty (method)
//                                           |-- ... (other methods)
