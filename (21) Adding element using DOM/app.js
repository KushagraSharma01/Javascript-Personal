//-------------------------------------------------------

//Adding elements using DOM

//** to add an element we first need to create an element

//1. createElement() (creates a new element)

let newdiv1 = document.createElement('div');

let arti = document.querySelector('#arti1');

// document.createElement('h1');
//whatever element you want to create just write the name
//of the element inside createElement 

//2. Adding text to this div

newdiv1.innerText = "New Div 1";

//3. appendChild() addes a child at the last of current children
    //only accepts one element
    //it does not accepts a text (only HTML element is accepted)

arti.appendChild(newdiv1);
//this adds an empty div if no content is given in step 2

//4. append()   //appends at last
    //appends multiple children
    //it accepts HTML + text

let newdiv2 = document.createElement('div');
newdiv2.innerText = "New Div 2"

let newdiv3 = document.createElement('div');
newdiv3.innerText = "New Div 3"

// arti.append(newdiv2, newdiv3, 'kushagra sharma');

//5. prepent() //appends at start
    //It accepts HTML + text 

arti.prepend(newdiv2, newdiv3, 'Kushagra Sharma');

//homework 
    //search for "after" and "before" properties from MDN
