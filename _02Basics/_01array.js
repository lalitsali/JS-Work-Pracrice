//array
let arr=[1,2,3,4,6]
console.log(arr);//[ 1, 2, 3, 4, 6 ]
arr.push(9)
console.log(arr);//[ 1, 2, 3, 4, 6, 9 ]
arr.pop()// remove last element
console.log(arr);//[ 1, 2, 3, 4, 6 ]
 let arr2=[8,7,9,9]
//  arr.push(arr2)
//  console.log("new array",arr); //[ 1, 2, 3, 4, 6, [ 8, 7, 9, 9 ] ]

 let new_array =arr.concat(arr2)

 console.log("new 2 array",new_array); //[ 1, 2, 3, 4, 6, 8, 7, 9, 9 ]
let a=10;
let b=20;
let c=30;
let d=40;



let aother_array=[1,2,3,[5,6,7],7,89,[0,1,6,7]];
let real_array=aother_array.flat();
console.log(real_array);//[ 1, 2, 3, 5, 6, 7, 7, 89, 0, 1, 6, 7 ]
/*[
    1, 2,  3, 5, 6,
    7, 7, 89, 0, 1,
    6, 7
  ]*/