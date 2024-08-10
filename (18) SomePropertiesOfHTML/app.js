

//Some Properties of HTML Tags

//-----------------------innerText property--------------------------------

// let para = document.querySelector('p');
// console.log(para.innerText);

//returns all the content inside a tag 

//----------------------textContent property--------------------------------

// let para2 = document.querySelector('p');
// console.log(para2.textContent);

//       innerText                        textContent
    
    //It gives the text inside the         //it also gives the text inside the 
    //tag                                  //tag

    //It is aware of CSS (smarter)         //It is not aware of CSS

// for the given html code innerText property will only show "hello coder" as the span
// is given css for display : none, whereas textContent shows all the content present inside the 
// tag even if it is not displayed on the browser

//-------------------------------innerHTML-----------------------------------

// let para = document.querySelector('p');
// console.log(para.innerHTML);

//it returns all the content inside the tag (including the tags used inside as well)
// returns text + tags


//-----------------------------------------------------------------------------

//by using the above properties we are "getting" the data
//the above properties are acting as "getters"

//now we will use them as "setters" (but are not actuall setters)
//Most suited from above to perform setter operation is "innerHTML"

// let para = document.querySelector('p');
// console.log(para.innerHTML);

// para.innerHTML = 'hi ab mai purane wala person nhi raha';

//this will change the html page content at the specified part

//always refer to mdn for web docs(HTML docs)




