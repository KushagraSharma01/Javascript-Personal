//loops

for(let i=0;i<=5;i++){
    for(let j=0;j<=5;j++){
        if(i==j)
            break;
        console.log(i,j);
    }
}

//while

let num = 100;
while(num>=0){
    console.log(num);
    num = num - 10;
}

//"for in" loop (used to iterate with index)
//to iterate inside an object
let person = {
    name : "kushagra",
    age : "21",
    gender : "Male"
}

for(let item in person){
    console.log(person[item]);
}



//"for of" loop
//to iterate over iterable items (array, map, list, vector)

let arr = [1, 2, 3, 4, 5, 6];
for(let item of arr){
    console.log(item);
}