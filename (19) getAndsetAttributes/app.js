//---------------------------------Attributes Manipulation-------------------------

//Attributes are additional information (which goes to the browser)
//like "href" of anchor tag, "value" of input tag

//can get the attribute value by using getAttribute property

//**getAttribute       --> takes 1 argument

// let anchor = document.querySelector('a');
// console.log(anchor.getAttribute('href')); 

// prints the value inside the attribute on console

//**setAttribute        --> takes 2 arguments

// let anchor = document.querySelector('a');
// anchor.setAttribute('href', 'http://facebook.com');

//will take you to facebook

// let h1 = document.querySelector('h1');
// h1.setAttribute('class', 'samarth');

//now above we have setted the class of h1 tag which was not even present before to samarth
//so we can add the attributes also

//-----------------

let input = document.querySelector('input');
// input.setAttribute('type', 'color');
// input.setAttribute('type', 'date');
// input.setAttribute('type', 'email');
input.setAttribute('type', 'checkbox');

//---------------------------------------------------------------------------------------------

//setInterval() --> repeat after a particualr interval

//setInterval(function() => {
//    }, 3000);

//task  (go in practice folder)

