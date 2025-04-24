const numarray = [1, 2, 3, 4, 5];
// filtr is use for return the array value
const number= numarray.filter((num) => {
    return num > 2;
}
)
// console.log(number);
////////////////////////////

const newNum= numarray.map((num) => num+10)
console.log(newNum);//[ 11, 12, 13, 14, 15 ]
//chaining technique
const newNum2= numarray.map((num) => num+10).map((num) => num+0.1)
console.log(newNum2);//[ 11.1, 12.1, 13.1, 14.1, 15.1 ]