//primitive data types--- string,number,bigint,boolean,symbol
//non-primitive data types- array,function,objcet

//..stack--> primitive data types (copy value)
//...heap--> non-primitive data types (reference value)

///////////////////////copy value
let name1="swami"
let name2=name1;
console.log(name1);//swami
name2="prit";
console.log(name2);//prit

///////////////////////////rerferenc valul
let obj1={
    mail:"@gmail.com",
    age:13
}
let obj2=obj1;
obj2.mail="@yahoo.com";
console.log(obj1.mail);//@yahoo.com
console.log(obj2.mail);//@yahoo.com