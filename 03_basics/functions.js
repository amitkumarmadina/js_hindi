console.log();

//  node 03_basics/functions.js

function sayName(){
    console.log("Amit");
    console.log("Kumar");
    console.log("Madina");
}
//sayName()

// function addTwoNumbers(num1,num2){ //parameters
// console.log(num1+num2);
// }

function addTwoNumbers(num1,num2){ //parameters

    // let result=num1+num2
    // return result;  
    // console.log(result);
      return num1+num2;
}

const result=addTwoNumbers(2,5) //arguments

//console.log("Result",result);



function loggedIn(username="moh"){
    //if(username===undefined){
        if(!username){
        console.log("pls enter username");
        return;
    }
return `${username} just logged in`
}

//console.log(loggedIn("amit"));
console.log(loggedIn());
