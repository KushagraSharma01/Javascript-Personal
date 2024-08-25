
//events --> actions that happens on HTML document

//examples -->
    //onClick, dblClick, onhover, onScroll, 

//method 1. inline event handeling (check index.html)

function doSomething(){
    console.log('I have clicked the button');
}

//----------------------------------------------------

//method 2. 

let btn = document.getElementById('btn');

// console.log(btn);
// console.dir(btn); //shows all the events/attrbutes inside btn will be displayed

//.log --> prints the object in the form of string        

//.dir --> shows all the details of that object


//onlick event
btn.onclick = function(){
    console.log('I have handeled the event in another way');
}

//onmouseenter event (like hover)
btn.onmouseenter = function(){
    btn.style.color = 'red';
}

btn.onmouseleave = function(){     //to create an hover effect add this
    btn.style.color = 'black';
}

//can only assign one event to an element "at a time" 

//--------------------------------------------------------------------------------

//**method 3. use eventListener

//here by using eventListener we can assign multiple events to 
//an element "at a time"

function one(){
    console.log('one');
}

function two(){
    console.log('two');
}

btn.addEventListener('click', one);
btn.addEventListener('click', two);

//-------------------------------------------------

//question : btn click --> body background color = cyan

btn.addEventListener('click', ()=>{

    if(btn.style.backgroundColor != 'cyan') //to add another color on alternate clicks
        btn.style.backgroundColor = 'cyan';
    else
        btn.style.backgroundColor = 'orange';

})






