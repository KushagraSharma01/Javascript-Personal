let msg='Hello World';
console.log(msg);
let angrymsg=msg.toUpperCase();
console.log(angrymsg);
console.log(msg);
console.log('hello'+'kushagra');

//substring
console.log(msg.substring(3));//starting index and ending index is passsed
//substr
console.log(msg.substr(4,3)); //starting index and lenght is passed
//negative indexing is also present in strings(starting from -1)
console.log(msg.substr(-5));
//if the starting index is given greater than the ending index
//then both of them will get swapped 
console.log(msg.substring(7,2));
//string is always cut in forward direction
//if any of the arguments in the substring method is negative
//then it will treat them as 0
