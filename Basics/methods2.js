let str='This is kushagra';
console.log(str);
console.log(str.indexOf('kushagra'));
let s='hello world';
console.log(s.indexOf('l'));//it will give the index of first l
// to find the index of the 2nd l we will pass the number in the method
console.log(s.indexOf('l',3));
//we passed the number after and at which we need to find the index 
console.log(s.indexOf('l',4))
//also
console.log(s.indexOf('l',s.indexOf('l')+1))