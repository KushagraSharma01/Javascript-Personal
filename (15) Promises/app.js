

// Promises
//    -->Promises were introduced to tackle the problem of "callback hell"


//ex :- (Equivalent Idea of promise)
    // function getData(cb){

    //     setTimeout(function(){
            
    //             let data = 'Hi World';
    //             cb(data, null);
    //     }, 3000);

    // }

    // getData(function(data, err){
    //     if(data == undefined)
    //         console.log(err);
    //     else
    //         console.log(data);
    // });


// promise

// let promise1 = new Promise(function(resolve, reject){    //can use different variable names also
//     //creating an object using Promise constructor
//     //this will return a promise(which is an object)
//     //everything inside will be done instantaneously
//     //so to create delay we will use setTimeout
//     setTimeout(function(){
//         let data = 'hi dosto ye promise hai';
//         resolve(data); // can aslo send data in resolve


//     }, 3000);
// });    

// //this constructor accepts a function which then accepts
// //two arguments resolve, reject;

// promise1.then(function(data){
//     console.log(data);
// }) //as the above promise is resolved we will use .then()

// let promise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let err = 'oops error occured'
//         reject(err);
//     }, 3000);
// })

// promise2.catch(function(err){   //will handle reject by using .catch()
//     console.log(err);
// });

// //can also use them both in one statement
// promise1.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

// //---------------------------------------------------------------------------------

// let p1 = new Promise((resolve, reject)=>{
//     console.log("wait for 3 secs in progress");
//     setTimeout(()=>{
//         // resolve();
//         reject();
//     }, 3000);
// })

// // p1.then().catch()

// p1.then( () => {
//     console.log("work is done");

// } )
// .catch( () => {
//     console.log("error has occured");
// });

//-------------------------------------------------------------------------------------
// .then() chaining

let p1 = new Promise((resolve, reject)=>{
    console.log("wait for 3 secs in progress");
    setTimeout(()=>{
        resolve();
        // reject();
    }, 3000);
})

p1.then( () => {
    return new Promise( (resolve, reject) =>{
        console.log('promise is running, wait...')
        setTimeout( ()=>{
            console.log("it took 2 secs bro")
            resolve();
        }, 2000)
    })
})
.then( ()=> {           //on returned promise
    console.log("both the promises ran");   //what if we returned another promise here
})             

//for applying more than one promise we would have to put them
//in thier .then() .catch() methods so as to maintain the order
//of execution (as till now we cannot stop the execution in between)
// now in this case using multiple promises will cause a long chain of
// .then() and .catch() methods 

//if we returned another promise above then we would have to use
//another .then(), this is called ".then() .catch() chaining"
//this growth is in vertical direction

//Now to reolve/avoid the above issue we use async-await

