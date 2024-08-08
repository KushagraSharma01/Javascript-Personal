
// function some(){

// }
// console.log(some()); //undefined
//-----------------------------------------

// let p1 = new function(){        //"new" keyword creates an object using a function/constructor/class
//                                 //and returns that object 

// }
// console.log(p1);        //empty object
//-----------------------------------------

async function some(){

    console.log("waiting for 1st promise");

    await new Promise( (resolve, reject) => {
        setTimeout(()=>{
            console.log('3 secs have passed ');
            resolve();
        }, 3000)
    })

    console.log("");
    console.log("First Promise is executed");
    console.log("waiting for 2nd promise");
    console.log("");

    await new Promise( (resolve, reject) => {
        setTimeout(()=>{
            console.log('2secs have passed');
            resolve();
        }, 2000);
    })

    console.log("both the promises are executed");

}

// console.log(some());        //returns a promise
some();

//along with async we use await
//"await" key stops the flow of execution in between
//till the statement having "await" is executed

//Now here we can use multiple promises in the same function
//by waiting for the response of one promise and then going to the next
//one (by using "await" keyword )(here the order is maintained)
//so no chaining of .then() and .catch() is required


//await can only be used inside async functions















