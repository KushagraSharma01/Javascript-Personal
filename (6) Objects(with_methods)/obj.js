//what is object?
//it is a data structure
//collection of properties

//what is property?
//pair of key and value

//it is unordered in nature

let person = {
    //key : value

    name : "kushagra",  //property 1
    age : 21,           //property 2
    isMale : true,      //property 3
    favColor : 'Blue',   //property 4

};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isMale);
console.log(person.favColor);
//also
console.log(person['name']);
//all the keys in the memory are stored as strings

//objects are also passed by reference
let person2 = person;
console.log(person2.name);