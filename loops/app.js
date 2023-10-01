

for(let i=0;i<10;i++)
    console.log(i+1);
let i=10;
while(i>0){
    console.log(i);
    i--;
} 

//for of (loops)
const colors=['Red','Green','Orange','Blue'];

for(let color of colors)    //for arrays
    console.log(color);

//iterate over an object
const obj={         
    name:'kush',
    color:'red',
    age:20
}
for(let i in obj){         //to iterate over objects 
    console.log(`${i}--->${obj[i]}`)
}