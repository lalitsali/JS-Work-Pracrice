//for of loop

//Array Specific Loops

const arr=[1,2,5,4,6]

for (const num of arr) {
    // console.log(num);
}
////////////////////////////////////
const greet="Hi Bros"
for (const element of greet) {
    // console.log(element);
}
//Maps

const map=new Map()//holding key:value pairs
map.set("In","India")
map.set("USA","America")
map.set("UK","London")
map.set("USA","America")//store unique value

// console.log(map);

for (const [key,value] of map) {
    // console.log(key);
}

// for of loop on Object

const MyObbj={
  city1:"Delhi",
  city2:"Mumbai",
  city3:"Banglore",
}

for (const key in MyObbj) {
    //console.log(MyObbj[key]);// for retrive value//
}


const city=["mumbai","Delhi","Banglore"]    
// city.forEach(function (val){
//    // console.log(val);//
// })

// city.forEach((item)=>{
//     console.log(item);
// })

// function print(val){
//     console.log(val);
// }

// city.forEach(print)//passing function as a parameter



const setofObject=[
    {
        name:"Amit",
        age:23,
        city:"Delhi"
    },
    {
        name:"Rahul",
        age:25,
        city:"Banglore"
    },
    {
        name:"Ravi",
        age:22,
        city:"Mumbai"       
    }
]

setofObject.forEach((item)=>{
    console.log(item.name);
   
})