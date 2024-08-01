


// function anything(){
//     let name = "kushagra";

//     function printName(){
//         console.log(name);
//     }

//     return printName;
// }

// let func = anything();
 
// func();

//-------------------------------------------

//real life uses

//before classes were present in javascript we used to
//to make private methods and members by using closures

// function counter(){
//     let count = 0;

//     function getCount(){
//         return count;
//     }

//     return getCount;

// }

// let counter1 = counter();
// console.log(counter1());    //does not have direct access of count

//------------------------------------
//creating it a method inside object
//so that we can create multiple functions/methods inside a funciton as object

// function counter(){
//     let count = 0;

//     return { 
//         getCount : function (){
//             return count;
//         }
//     }

// }

// let counter1 = counter();
// console.log(counter1.getCount());


// small application

function counter(){
    let count = 0;

    return {
        getCount : function(){
            return count;
        },
        increment : function(){
            count += 1;
        },
        decreament : function(){
            count -= 1;
        },
        reset : function(){
            count = 0;
        }
    };

}

let counter1 = counter();
console.log(counter1.getCount());
counter1.increment();
counter1.increment();
console.log(counter1.getCount());
counter1.reset();
console.log(counter1.getCount());

//here all these methods does not contain count in them
// but are dependent on count and hence can acces the count
//from thier lexical environment. This is called Closure property
