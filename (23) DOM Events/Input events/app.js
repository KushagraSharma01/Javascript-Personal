
//input events


//"input" event (works on change of input)

//** whenever an event is run or executed along with the event an
//object is also attached with it, which we can have access of.

//generally we name it "e" or "event"

let inp = document.querySelector('input');

function fun(event){  //any name will work but generally e/event is used
    console.log(event.target.value);
    console.log("input element has run brothers");
}

inp.addEventListener('input', fun);

//now inside this event there is "target", target points to the element on 
//which the event has occured/triggered 

//here we will use value attribute (which also works a function) to 
//get the text inside the input tag


//-------------------------------------------------------
//question ->
 //now display the text inside the input tag on a h2 tag

function func(event){

    let prevh2 = document.querySelector('h2');
    
    if(prevh2 != null)
        prevh2.remove();

    let h2 = document.createElement('h2');

    let body = document.querySelector('body');

    h2.innerText = event.target.value;

    body.append(h2);
}

inp.addEventListener('input', func);












