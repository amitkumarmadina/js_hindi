// let myName='amit';
// let myCahnnel="amitkuamarmadina     "
// console.log(myName.trim().length);
// console.log(myCahnnel.truelength());


let myHeros=["doga","nagraj","vishanu","kobi","bhedia"];


let heropowers={
    doga:"gun",
    nagraj:"sarp",
    vishanu:"covid19",
    kobi:"bhumanda",
    bhedia:"akhanda",

    getnagrajpower:function(){
        console.log(`spidy power is ${this.nagraj}`);
        
    }
}

Object.prototype.amit=function(){
    console.log(`amit present in everywear`);
}


heropowers.amit();
// myHeros.hellomoto();
// myHeros.heysrv();


const User={
    name:"chi",
    email:'chi@google.com'
}

const teacher={
    makeVideo:true
}

const TeachingSupport={
IsAvailable:false
}
const TAsupport={
    makeAssignment:'js assignment',
    fulltime:true,
    __proto__:TeachingSupport
}

teacher.__proto__=User  

Object.setPrototypeOf(TeachingSupport,teacher)


let anotherUser="amitthegreat"

String.prototype.trueLength=function(){
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
    
}

anotherUser.trueLength()

"amit".trueLength()
"ICECREAM".trueLength()