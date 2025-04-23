
//const user= new Object()//-->empty object ,singleton object
  const user={}   //-> non singleton object

  user.name="swami" 
  user.surname="patil"
  user.age=25

//   console.log(user)//{ name: 'swami', surname: 'patil', age: 25 }


// COMBINE TWO OBJECTS
const obj1={1 :"one",2:"two",3:"three"}
const obj2={4 :"four",5:"five",6:"six"}     

// const obj3=Object.assign(obj1,obj2)//-->combine two objects
// console.log(obj3)//{ '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' }   


//
const obj3={...obj1, ...obj2}//-->combine two objects
console.log(obj3)//{ '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' }   


//key value pair

console.log(Object.keys(obj1))//[ '1', '2', '3' ]
console.log(Object.values(obj1))//[ 'one', 'two', 'three' ] 
console.log(Object.entries(obj1))//[ [ '1', 'one' ], [ '2', 'two' ], [ '3', 'three' ] ] 

