

//1. forEach()  --> method
//  it accepts a callback function
//in these methods the callback function is invoked by default (automatically)
//does not return anything


let students = ['sachin', 'hardik', 'manish', 'sufiya', 'akshay'];

// students.forEach(function (iterator){
//     console.log(iterator);
// })

students.forEach(function (item, index){    //accepts an optional argument for index
    console.log(`index : ${index} ---> name : ${item}`);
})


//2. map()
// it also accepts a callback function
// *it returns a new array

let marks = [10, 15, 18, 9, 28, 5, 40];

let newmarks = marks.map(function(item, index){  //also accepts two arguments (item non-optional and index optional) 
    return [item*2, index];
})
console.log(marks);
console.log(newmarks);

//3. filter()
// it accepts a callback function
// it also returns a new array
// it only sends the conditioned values(truthful values) to the
// new array

let scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filteredArray = scores.filter(function(item){
    if(item >= 5)
            return true;
    else    
            return false;
});
//cannot return anything aside from true or false

console.log(filteredArray);

//4. sort() 
// sort elements lexicographically by default

let arr = [12, 2, 34, 3, 99, 45, 16, 43, 86];
let newarr = arr.sort();
console.log(newarr);

//sorting normally(Using Comparator)

let newarr2 = arr.sort(function(a, b){

    return a-b; //ascending
    // return b-a; //descending

});

console.log(newarr2);