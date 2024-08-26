


let buttons = document.querySelectorAll('button');

let input = document.querySelector('input');

for(let button of buttons){
    // console.log(button);

    button.addEventListener('click', ()=>{
        
        try{
            if(button.innerText == 'C')
            input.value = '';

            else if(button.innerText === '='){
                // we use eval method to evaluate mathematical operations in the form of string
                input.value = eval(input.value);
                // setTimeout(()=>{
                //     input.value = '';
                // }, 5000)
            }

            else
                input.value += button.innerText;
        }
        catch{
            input.value = "Error";
            // setTimeout(()=>{
            //     input.value = '';
            // }, 5000)
        }

        
    });
    
}