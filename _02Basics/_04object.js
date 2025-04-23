
// destructuring objects
const user = {   
    name: "swami",
    surname: "patil",
    age: 25,
    location: "Jalgaon",
    email: "@google.com",
    isloggedin: false,
    lstlogginDays: ["Monday", "Saturday"]       
}


// value extraction
const {lstlogginDays :insbalhf} = user
// console.log(lstlogginDays)//[ 'Monday', 'Saturday' ]    
console.log(insbalhf)//[ 'Monday', 'Saturday' ]    
//