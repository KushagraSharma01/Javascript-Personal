
//creating insta profile

// function step1(){
//     setTimeout(function(){

//         console.log('image select kar rha hu');
//         return 'image';

//     }, 4000)
// }

// function step2(image){
//     setTimeout(function(){

//         console.log(`sundar kr rha hu ${image} wait`);
//         return 'sundar wali photo';

//     }, 2000)
// }

// function step3(filteredimage){
//     setTimeout(function(){

//         console.log(`deciding caption for ${filteredimage}`);
//         return 'image with caption';

//     }, 3000)
// }

// function step4(finalimage){
//     setTimeout(function(){

//         console.log(`${finalimage} uploaded`);
//         return 'sundar wali photo';

//     }, 2000)
// }

// //calling

// let image = step1();
// let filteredimage = step2(image);
// let finalimage = step3(filteredimage);
// step4(finalimage);

//we cannot maintain the sequence or order of execution (due to)
//at first (at time 0 unit) every function is called as js does not wait in between execution
//so all functions get undefined as the value of variables
//and then execute according to thier waiting time

// to maintain sequence :-

// Method 1 (Callback Nesting)

function step1(cb){     //accepting step2 as function
    setTimeout(function(){

        console.log('image select kar rha hu');
        cb('image');

    }, 4000) 
}

function step2(image, cb){
    setTimeout(function(){

        console.log(`filtering ${image} wait`);
        cb('sundar wali photo');

    }, 2000)
}

function step3(filteredimage, cb){
    setTimeout(function(){

        console.log(`deciding caption for ${filteredimage}`);
        cb('image with caption');

    }, 3000)
}

function step4(finalimage){
    setTimeout(function(){

        console.log(`${finalimage} uploaded`);
        return 'sundar wali photo';

    }, 2000)
}

//calling

step1(function(image){
    step2(image, function(filteredimage){
        step3(filteredimage, function(finalimage){
            step4(finalimage);
        })
    });
});

//passed the functions(callbacks) in arguments so that to call them in order
//from inside the respective functions(steps)

//**IMP
//advantage --> now in the above code the order/sequence is maintained
//disadvantages --> 
//  Causes Pyramid of DOOM (also called Callback Hell)(horizontal growth)
//  Dependency is very high (untill the previous step is done next is haulted)

//-----------------------------------------------------------------------------------------

//Now to resolve it we use promises (and then to resolve thier issue we use async-await)
  