const colors=['red','blue','green','purple'];
const newarray=colors.slice();
console.log(colors.slice());
console.log(newarray===colors);

console.log(colors.slice(1,3));//non destructive
console.log(colors.splice(2,2,500,200,300));//starting index and the number of items you want to delete and then the elements
//you want to insert
//slice makes different reference array
//while splice does not make different reference array
console.log(colors);

//split method
//splits string into array
const url='https://www.w3schools.com/jsref/jsref_filter.asp';
console.log(url.split('/'));
const arr=url.split('/');
console.log(arr.pop());

const board=[
    ['O','X','X'],
    ['X','O','X'],
    ['X','O','X']
];
//join
const arr1=[1,2,3,4,5,6,7];
console.log(arr1.join('==>'));
//concat
const arr2=[8,9,10,11,12,13];
console.log(arr1.concat(arr2));
//can also concatemate more than two arrays

//includes()
console.log(colors.includes('red'));
//indexOf
console.log(colors.indexOf('red'));
//reverse() destructive
console.log(colors.reverse());