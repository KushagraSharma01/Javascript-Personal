//approach 1
// let Menu  = [{Name: 'Paneer BM', isVeg: true},
//              {Name: 'Chicken Dopyaza', isVeg: false},
//              {Name: 'Pizza', isVeg: true},
//              {Name: 'Chicken Biryani', isVeg: false},
//              {Name: 'Palak Paneer', isVeg: true},
//              {Name: 'Biryani', isVeg: true},
//              {Name: 'Mix Veg', isVeg: true},
//              {Name: 'Shahi Paneer', isVeg: true},
//              {Name: 'Egg Bhurji', isVeg: false}
//             ]
// let veg = Menu.filter(function(item){
//     return item.isVeg == true;
// })

// let nonveg = Menu.filter(function(item){
//     return item.isVeg == false;
// })

// console.log(veg);
// console.log(nonveg);

//approach 2

let Menu  =    [ 'Paneer BM', 
                 'Chicken Dopyaza',
                 'Pizza',
                 'Chicken Biryani',
                 'Palak Paneer',
                 'Biryani',
                 'Mix Veg',
                 'Shahi Paneer',
                 'Egg Bhurji'
                ];

function isVeg(item){

    if(item.toLowerCase().includes('chicken') || item.toLowerCase().includes('egg'))
        return false;
    else
        return true;
    
};

let veg = Menu.filter(function(item){
    return isVeg(item);
});

let nonveg = Menu.filter(function(item){
    return !isVeg(item);
});

console.log(veg);
console.log(nonveg);