//Method VS Function

//functions which are defined inside an object are
//called methods.

let obj = {
    evs : 90,
    cn : 90,
    web : 100,
    maths : 10,
    total : function() {    //method
        return (90+90+100+10);
    }
}

console.log(obj.total());







function abc(){
    console.log("hello");
}
console.log(abc());     //runs the function and prints undefined as nothing is returned by the function abc