
// Traversing DOM Tree

//parent of HTML is null

//different parents have different children which are not siblings

//siblings are children of same parent

//make a DOM tree of index.html on notebook if needed 

//properties (not methods) (key - value pairs)


let para1 = document.querySelector('#para1');
let arti1 = document.querySelector('#arti');
let div3 = document.querySelector('#div');
//1. parentElement

console.log(para1.parentElement.parentElement.parentElement.parentElement.parentElement); 
//parent of HTML is null
//parent will always be a single element

//---------------------------------------------------------------------------------------------------
//2. children

console.log(arti1.children);

// let children = arti1.children;
// console.log("hi");
// console.log(children[2]);    //can access them using index

//there can be multiple children

//3. next sibling

console.log(div3.nextElementSibling);   //p tag (output)

//4. previous sibling

console.log(div3.previousElementSibling);
