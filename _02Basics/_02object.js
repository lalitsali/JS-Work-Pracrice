//singleton--> constructor..... Singleton pattern is a design pattern which restricts a class to instantiate its multiple objects
//Object.create

//objects literals

const sym=Symbol("key1")//-->symbol
 const jsuser = {
    [sym]:"key1",
    name:"swami",
    "surname":"patil",//this value can not access through jsuser.surname
    age:25,
    location:"Jalgaon",
    email:"@google.com",
    isloggedin: false,
    lstlogginDays:["Monday","Saturday"]
 }

console.log(jsuser)
console.log(jsuser.email)   //@google.com
console.log(jsuser["email"])//@google.com
console.log(jsuser[sym])//key1


///// change the object value
jsuser.email="@swami.com"
console.log(jsuser.email)//@swami.com
// freeze objce maens can`t value change
// Object.freeze(jsuser)
// jsuser.email="@swami.com"//error 


///referencing objects through method
jsuser.greeting=function(){
    console.log("hello "+this.name);
}
jsuser.greeting()//hello swami

jsuser.greetingTWO=function(){
    console.log(`hello js user, ${this.name}`);
}
jsuser.greetingTWO()//hello js user, swami