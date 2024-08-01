//#substr()

let str = 'helloworld';
console.log(str.substr(3, 4));  //starting index and length

console.log(str.substr(-5,4));  // always go towards right

 //#substring()

 console.log(str.substring(2,5));  //starting and ending index
 // ending index is not included

 //whenever starting point is > end point                               
 //then swapping happens btw st and end points

console.log(str.substring(5,2));
console.log(str.substring(-5,2));
//negative numbers are treated as 0 in substring method


//#indexOf()

console.log(str.indexOf('w'));
console.log(str.indexOf('l'));
console.log(str.indexOf('lo', 3));
//it provides the index of first occurence of the given string
//another argument is given to skip the character till the end point(-1)


//#replace()

console.log(str.replace('o' , 'k')); 
//replaces only the first occurence of the character

//#replaceAll()

console.log(str.replaceAll('o', 'k'));
//replaces all occurences of character

//repeat()

console.log(str.repeat(3));
//repeats n number of times

//we can concatenate diff methods to work together

//toUpperCase()
//toLowerCase() 

console.log(str.toUpperCase());
console.log(str.toLowerCase());

//trim()

let str2 = "  hello    ";
//trims the extra spaces from the st and end
console.log(str2.trim());


