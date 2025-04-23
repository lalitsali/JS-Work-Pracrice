


function calculatecarPrice(...num1){
    return num1
}


console.log(calculatecarPrice(10000, 20000, 30000, 40000, 50000))   
//[ 10000, 20000, 30000, 40000, 50000 ]


//pass object to the  function
const car = {
    name: 'BMW',
    price: 10000,
    calculatecarPrice: function(...num1){
        return num1
    }
}

function infomation(anyobject){
     console.log(anyobject.name)
}   
infomation(car) //BMW
infomation({
    name: 'BMW',
}) 

// array pass in function

const arr=[100,5,5,8,474];
function sum(num1){
    
    return num1[0]
}
console.log(sum(arr))//100
