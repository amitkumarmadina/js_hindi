//Singleton

//    node 02_basics/objects.js
//Object literals
/*
const mySym=Symbol("key1")

const jsuser={
    name:"amit",
    "full name":"amit kumar madina",
    [mySym]:"mykey1",
    age:18,
    email:"amit@gmail.com",
    isLoggedIn:false,
    lastLogin:["monady","saturday"]
}
//console.log(jsuser.email);
//console.log(jsuser["email"]);
//console.log(jsuser.full name);
//console.log(jsuser[mySym]);

jsuser.email="akash@gmail.com"
//Object.freeze(jsuser)
jsuser.email="amask@gmail.com"
//console.log(jsuser);


jsuser.greeting=function(){
    console.log("hello moto");
    
    }
    
jsuser.greetingTwo=function(){
console.log(`hello moto,${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());


//const tinderUser=new Object()
const tinderUser={}
tinderUser.id="123c"
tinderUser.name="abhay"
tinderUser.isLoggedIn=false;

//console.log(tinderUser);

const regularUser={
    email:"abhay@gmail.com",
    fullname:{
        userfullname:{
            firstname:"abhay",
            lastname:"madina"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2}
//console.log(obj3);

const user=[
  {
    id:1,
    email:"am@gmail.com",
},
{
    id:2,
    email:"mad@gmail.com"
},{
    id:3,
    email:"ak@gmail.com",
}]

//console.log(user[1].email);
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedInn'));
*/

const course={
    coursename:"hindi",
    price:"999",
   courseinstructor:"amit"
}

//console.log(couse.instructor);

const{courseinstructor:instructor}=course
console.log(instructor);

// {
//     "name":"amit",
//     "coursename":"jsinhindi",
//     "price":"free"
// }


