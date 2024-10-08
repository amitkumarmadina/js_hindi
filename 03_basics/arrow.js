//node 03_basics/arrow.js

const user={
    username:'Amit',
    price:999,
    welcomemessage:function(){
        console.log(`${this.username} welcome to thw site`);
        console.log(this);
        
    }
}

// user.welcomemessage()
// user.username="Sam"
// user.welcomemessage();

//console.log(this);

// function chi(){
//     console.log(this.username);
    
// }
// chi()

const chi = () => {
 let username="Amit"
 console.log(this);
 
}

//chi()

//Arrow function =()=>{}


    // const add=(num1,num2)=>{
    //     return num1+num2
    // }
    // console.log(add(3,5))


    //const add=(num1,num2)=>num1+num2;
    //const add=(num1,num2)=>(num1+num2)

    const add=(num1,num2)=>({username:"Amit"})

    //console.log(add(3,5))


    const myArr=[2,5,3,7,8];



