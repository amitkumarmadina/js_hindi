//node 03_basics/scopes.js

// let a=300;

// if(true){
// let a=10
// const b=20
// console.log("INNER :", a);

// }

//console.log(a);
//console.log(b);
//console.log(a);


/*
function one(){
const username="amitkumar"

function two(){
    const websites="youtube"
    console.log(username);
    
}
//console.log(websites);

two()
}
//one()

if(true){
    const username="amit"
    if(username==="amit"){
        const website="youtube"
        console.log(username+website);
                }
                console.log(website);            
}
console.log(username);
*/

//***********Interesting***********

//addOne(5) //will not throw error
function addOne(num){
    return num+1;
}
addOne(5)


//addTwo(5) //will throw error
const addTwo=function(num){
    return num+2;
}
addTwo(5)