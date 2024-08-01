//Array Methods
let arr = [1, 2, 3, 4, 5];
console.log(arr);

//push()        (destructive method)
let ans  = arr.push(7); //returns the length of array
console.log(arr);
console.log(ans);

//pop()         (destructive method)
console.log(arr.pop());

//unshift()     (destructive method)
//enters the value at start of array
arr.unshift(6);     // returns the length of array 
console.log(arr);

//shift()     (destructive method)
//removes the value from start of array
console.log(arr.shift());
console.log(arr);

//slice() (non-destructive) [start, end)
console.log(arr.slice(2, 4));

//splice() (destructive) [start, length]
console.log(arr.splice(3));
console.log(arr);
//also can pass elements to push from where it starts
//deleting the elements
console.log(arr.splice(1,2, "hello", true, 24));
console.log(arr);

//split() /only  for string /returns array
//non-destructive

let url = "https://www.google.com/search/dog/best/color";
ans = url.split("/");
console.log(ans);

//join() /for both string and array
//non-destructive

console.log(ans.join("/"));

//concat() /for string and array both
//Non-destructive
arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
console.log(arr.concat(arr2))

//includes() (non-destructive) /for both string and array
//returns a boolean value
arr2 = ["vivek", "samarth", "jatin", "vishnu"];
console.log(arr2.includes("samarth"));

//indexOf() (non-destructive) /for both string and array
console.log(arr2.indexOf("samarth"));

//reverse() (destructive)
console.log(arr2.reverse());

//#arrays are reference type