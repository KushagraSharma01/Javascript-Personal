


let formEl = document.querySelector('form');

formEl.addEventListener('submit', (event)=>{

    event.preventDefault(); //to prevent the default behaviuor of form of refreshing the page after submit event
    console.log("form submitted");
})


//Specifically accessing the elements of form (apart from DOM)

let form = document.querySelector('form');

form.addEventListener('submit', (e)=>{  //printing the values inside the input tags
    e.preventDefault();
    // console.log(form.elements);  //gives all the elements inside form
    console.log(form.elements[0].value);
    console.log(form.elements[1].value);

})


























