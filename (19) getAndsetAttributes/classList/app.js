
//----------------------------------------------------------------------

    // clasList

// add a class
// remove a class
// toggle a class
// check if a class is present or not


let arti = document.querySelector('article');

//add

// arti.classList.add('sam samarth'); 
//wrong way of adding multiple classes in classList 

arti.classList.add('sam', 'samarth'); //here comma separated

arti.classList.add('changu-mangu'); 
//can add single class individually(do'nt need to add the previous classes again)

//-----------------------
//remove

arti.classList.remove('sam');
//can also remove multiple class using comma to separate them

//-----------------------
//toggle

arti.classList.toggle('toggle'); // add toggle class if not present
arti.classList.toggle('toggle') //remove toggle class if present already

//toggle allows us to switch from one class to another class(like hover)

//------------------------
// contains() --> return true if class is present, else false

console.log(arti.classList.contains('sam'));    //false
console.log(arti.classList.contains('samarth')); //true