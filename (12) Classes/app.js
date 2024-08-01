

// Class syntax

// We did'nt have classes till ES6, then we used to use contructors in place of classes

//classes are syntactical sugar of constructor functions

//classes are a better way of writing a constructor function


//Contructor way
// function Person(firstname, lastname, email){

//     this.pehlanaam = firstname;
//     this.akhrinaam = lastname;
//     this.emailbabua = email;

// }

// Person.prototype.printName = function(){
//     console.log(`My name is ${this.pehlanaam} ${this.akhrinaam}`);
// }

// Person.prototype.getName = function(){
//     return `My name is ${this.pehlanaam} ${this.akhrinaam}`;
// }

// let person1 = new Person('sam', 'vohra', 'sam@gmail.com');
// console.log(person1);
// console.log(person1.pehlanaam);
// person1.printName();
// console.log(person1.getName());
// console.log(person1.__proto__ === Person.prototype);    //true (Parent prototype of person1(instance) is the contructor's protoype)
// console.log(Person.prototype ); //prototypeof constructor created by using "new" keyword (have properties defined by us)
// console.log(person1.prototype); //undefined (instances does not have a prototype property but inherits from the prototype of constructor) 

//When "this" keyword is used inside any of these prototypes or constr,
//it points to the "object" on which the method is applied(or created by using this contructor)

//Class way
// class Person{

//     constructor(firstname, lastname, email){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.email = email;
//     }

//     getName(){              // no need to write function word before it
//         return `My name is ${this.firstname} ${this.lastname}`;
//     }
//     printName(){
//         console.log(`My name is ${this.firstname} ${this.lastname}`);
//     }

// }

// let person2 = new Person('ms', 'dhoni', 'msd@gmail.com');

// console.log(person2);
// console.log(person2.email);
// console.log(person2.lastname);
// console.log(person2.getName());
// person2.printName();
// console.log(person2.__proto__); //empty object (prototype of constructor)
// console.log(person2.prototype); //undefined (instances does not have a prototype property but inherits from the prototype of constructor) 

// Person.prototype.naman = function(){
//     console.log("hello everyon");
// }

// console.log(Person.prototype);
//.__proto__  --> points to the parent prototype of object/function/etc
//.prototype --> points to the prototype of current object/function

// it's prototype is it's class's prototype(Class.prototype), just as a prototype of a constructor define the properties/methods for it
//here Class.prototype(prototype of class) defines the properties/methods for the constructor/object.




    
//--------------------------------------------------------------------------------------------------------------
//(Conceptual)
// class Person{

//         constructor(firstname, lastname, email){
//             this.firstname = firstname;
//             this.lastname = lastname;
//             this.email = email;
//         }
    
//         getName(){
//             console.log("hwllo");
//         }
// }
    
// Person.prototype.fnc = function(){
//     console.log("hello");
// }

// let person2 = new Person('ms', 'dhoni', 'msd@gmail.com');
// person2.fnc();

// console.log(Person.__proto__ === Function.prototype);

    
   
    // console.log(person2.__proto__); // Person.prototype({}, empty object with the properties defined by us exclusively)
    // console.log(Person.prototype);    // Person.prototype({}, empty object with the properties defined by us exclusively)
    // console.log(person2.prototype);  // undefined (instances does not have a prototype property but inherits from the prototype of constructor)
    // console.log(person2.prototype === Person.prototype); //false
    // console.log(person2.__proto__ === Person.prototype); //true


    // function Constr(){
    //     this.clg = console.log("hello");
    // }
    
    // let inst = new Constr();
    
    // console.log(inst);
    // function fun(){
    
    // }
    
    // console.log(Constr.prototype);
    // console.log(fun.prototype);
    
    // Constr.prototype.hello = "3";
    // fun.prototype.hello = "3";
    
    // console.log(Constr.prototype);
    // console.log(fun.prototype);
//every function has it's prototype

//---------------------------------------------------------------------------------------------

// to inherit properties from another class we use Inheritance (extends keyword)

class Person{

        constructor(firstname, lastname, email){
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
        }
    
        getName(){              // no need to write function word before it
            return `My name is ${this.firstname} ${this.lastname}`;
        }
        printName(){
            console.log(`My name is ${this.firstname} ${this.lastname}`);
        }
    
}

class Student extends Person{


}


let student1 = new Student("Naman", "Agarwal", "naman@gmail.com");
console.log(student1.getName());

//to add more functionalities we need to override the previous contructor

//**we will use "super" keyword to override the previous constructor

//**super keyword is used to access the derived classes(inherited variables, methods from parent)

//super is a contructor

class Batman extends Person{

    //constructor overriding
    constructor(firstname, lastname, email, groupNo){

        super(firstname, lastname, email);
        this.group = groupNo;

    }

    //method overriding
    getName(){
        return `super se bhi upar ${this.firstname} ${this.lastname}`;
    }

}

let student2 = new Batman("Nikhil", "Agrawal", "nikhil@gmail.com", 4);
console.log(student2);
console.log(student2.firstname);
console.log(student2.group);
console.log(student2.getName());