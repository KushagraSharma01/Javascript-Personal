

//A Callback function is a function which is passed into
//another function, which is then invoked inside the function

//invoking a function means running/calling that function 

function b(){
    console.log("inside function b");
}

function a(fn){     //here fn is a callback function
    fn();
}

a(b);