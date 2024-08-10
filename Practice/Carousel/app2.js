//task

//have 4 images
//after every 3 secs I want to change my slide/image by itself? --> repeatidly

let image = document.querySelector('img');

let a = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

let ind = 0;

setInterval(()=>{
    image.setAttribute('src', a[ind]);
    ind = (ind + 1) % a.length;
}, 3000)