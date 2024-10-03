//Singleton

//    node 02_basics/objects.js
//Object literals
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