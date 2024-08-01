
let obj1 = {
    evs : 90,
    cn : 90,
    web : 100,
    maths : 10,
    total : function() {    //method
        return (90+90+100+10);
    }
}

//using "this" keyword
//"this" key word allows us to access all properties of an object
let obj2 = {
    evs : 90,
    cn : 90,
    web : 100,
    maths : 10,
    total : function() {    //method
        return this.evs+this.cn+this.web+this.maths;
    }
}
console.log(obj2.total());