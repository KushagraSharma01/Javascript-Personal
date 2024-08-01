





//cond. 1
// function a(fn){         //Higher Order Function
//     console.log("hi I am inside A");
//     fn();
// }


// function b(){
//     console.log("hi I am inside B");
// }

// a(b);

//cond. 2
// function a(){        //Higher Order Function
//     console.log('inside A');

//     function b(){
//         console.log('inside b');
//     }

//     return b;
// }

// let temp = a();
// console.log(temp);

//usage 

// let a = ["Sam", "Kush", "Hello", 1, 3, "Naman", true, false];

// function getBoolean(a){
//     let result = [];
//     for(let i of a){
//         if(typeof(i) == "boolean")
//             result.push(i);
//     }
//     return result;
// }

// function getString(a){
//     let result = [];
//     for(let i of a){
//         if(typeof(i) == "string")
//             result.push(i);
//     }
//     return result;
// }

// function getNumber(a){
//     let result = [];
//     for(let i of a){
//         if(typeof(i) == "number")
//             result.push(i);
//     }
//     return result;
// }

// console.log(getString(a));
// console.log(getBoolean(a));
// console.log(getNumber(a));

//optimised HOF way

//check my type
function getBoolean(item){
    return typeof(item) == "boolean";
}

function getString(item){
    return typeof(item) == "string";
}

function getNumber(item){
    return typeof(item) == "number";
}

//loop and append result
function get(arr, fn){
    let result = [];

    for(let item of arr){
        if(fn(item))
            result.push(item);
    }

    return result;
}


let a = ["Sam", "Kush", "Hello", 1, 3, "Naman", true, false];

console.log(get(a, getString));
console.log(get(a, getBoolean));
console.log(get(a, getNumber));