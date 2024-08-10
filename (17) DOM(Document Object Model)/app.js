//run this file on browser using index.html on chrome
//by copying the url on firefox if you do'nt want to change your
//default browser


// console.log(document);      //run on browser

//Selectors :- >

//----------------------------tagName--------------------------------------------

// console.log(document.getElementsByTagName('h1'));

//this returns us an array(or HTML Collection)(an object BTS) on browser


// let a = [1, 2, 3, 4, 5]
// console.log(a);  //everything BTS is an Object in jss

// let h1arr = document.getElementsByTagName('h1'); 
// console.log(h1arr[0]);
// console.log(h1arr[1]);  // can access h1's in it using index

// // loop
// for(let item of h1arr){
//     console.log(item);
// }


//--------------------------------------------------------------------------
//styling

// let para = document.getElementsByTagName('p');

// for(let item of para){
//     console.log(item);
//     item.style.color = 'red';
//     item.style.border = '2px solid purple';
// }

//-----------------------------Id--------------------------------------------

// let id = document.getElementById('sam');    //returns the object of that tag
// // console.log(id);    

// //this is returning an object of element but with tag name selector it returns an array
// //this is because getElementsbyId is plural and getElementbyId is singular
// //if multiple elements is given same id then the first encountered tag will be returned

// id.style.fontSize = '70px';

//-----------------------------class------------------------------------------

// let para =  document.getElementsByClassName('dom'); //returns an array 
// // console.log(para);
// for(let item of para){
//     item.style.color = 'orange';
// }

//** we cannot use push/pop in this way

//-------------------------querySelector--------------------------------------

//only returns a single element
//the way we used to select elements in css with class, id, name same will be followed 
//here

// let h1 = document.querySelector('h1');  //returns the first h1
// console.log(h1);

// let classele = document.querySelector('.dom'); //class selector
// console.log(classele);          

// let id = document.querySelector('#sam');    //id selector
// console.log(id);

//--------------------------querySelectorAll-----------------------------------

//returns all the matching elements

// let h1 = document.querySelectorAll('h1');

//return a Node List which is similar to an array

// console.log(h1);

// let classele = document.querySelectorAll('.dom');
// console.log(classele);

let id = document.querySelectorAll('#sam');
console.log(id);

//here if multiple elements have same id then it returns all of them