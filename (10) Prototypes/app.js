
//Prototypes

//.__proto__  --> points to the parent prototype of object/function/etc
//.prototype --> points to the prototype of current object/function



let todo = {
    title : 'buy flowers',
    desc : function(){
        return `your task is to ${this.title}`
    }
};

console.log(todo.title);
console.log(todo.desc());

// console.log(todo.hardik()); --> will give error as it is not present
console.log(todo.toString()); // --> this will not give error because of prototypes

//If you try to access a property of an object then javascript will firstly 
//find it inside that object, then if not found then it will go to it's Prototype.

//**Prototype --> It is an object which is used as a fallback source
//                of properties

//Now this toString() was not found in the original object then it will be found
//inside it's prototype

//To check the prototype of anything we use
//      .__proto__  --> (dender proto)

console.log(todo.__proto__ === Object); //false
console.log(todo.__proto__ === Object.prototype);  //true

//Prototype of Object.prototype is null
//Chain of prototypes is called Prototypal Chain (prototype of prototype)

//---------------------------------------------------------------------------

//if Array is not an Object, then how methods are present inside 
//an array.

//then HOW?
//  -->Everything inside javascript is an Object
//  -->This means Array is converting itself to an Object
//      behind the scenes.

let arr = [1, 2, 3, 4, 5];
console.log(arr);

//this array is converting to an object bts with index as key
//and values as value.

console.log(arr.__proto__ === Object.prototype); //false
console.log(arr.__proto__ === Array.prototype); //true
console.log(Array.prototype.__proto__=== Object.prototype); //true

//Heirarchy of array prorotype

//arr.__proto__ --> Array.prototype
//Array.prototype.__proto__ --> Object.prototype 
//Object.prototype.__proto__ --> null

//Object.prototype --> prototype of all objects
//Array.prototype --> prototyope of all arrays

//*can also check on browser console

//--------------------------------------------------------------------

//Same goes for String

console.log("str".__proto__ === String.prototype);
console.log(String.prototype.__proto__ === Object.prototype);

//Same goes for every datatype
//*Also function is created using function.prototype

//***This Complete Heirarchy concept of prototypes in JS is called Inheritance***.

//---------------------------------------------------------------------

//we can override the pre defined methods temporarily inside anything 
//like array, object, etc.

let arr2 = [1, 2, 3, 4, 5, 6];

arr2.reverse = function(){

    console.log("function override");

}

arr2.reverse();

//Prototypes does not enclose Objects, functions, etc.
//they are just present beside them as a fallback source in search of properties.

//ex: - >
// u1               (a constructor)
// |
// |-- __proto__ --> Constr.prototype
//                     |
//                     |-- description (methods/properties provided by us exclusively only, if not then empty object)
//                     |
//                     |-- __proto__ --> Object.prototype
//                                         |
//                                         |-- toString (method)
//                                         |-- hasOwnProperty (method)
//                                         |-- ... (other methods)
