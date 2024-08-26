
// selecting the input
let inp = document.querySelector("#title");

// selecting the ul
let list = document.querySelector("#list");

// seleting button
let addbtn = document.querySelector("#add-btn");


addbtn.addEventListener('click', ()=>{

    let newli = document.createElement('li');

    newli.innerHTML = inp.value;

    list.append(newli);

    inp.value = "";

    //add an event listener when a li is created
    newli.addEventListener('click', ()=>{
        //deleting the newli
        newli.remove();
    })

})

































