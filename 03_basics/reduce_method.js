const myNums=[1,2,3,4,5,6,7,8,9]

// const myTotal=myNums.reduce(function(acc,currval){

//     console.log(`acc ${acc} and currval ${currval}`);
    
//     return acc+currval
// },0)

const myTotal=myNums.reduce((acc,currval)=>acc+currval,0)
console.log(myTotal);


const cart=[{
    itemname:'js course',
    price:299
},
{
    itemname:'webdevelopment',
    price:499
},
{
    itemname:'blockchain',
    price:199
},{
    itemname:'os',
    price:399
}]


const tot=cart.reduce((acc,item)=>acc+item.price,0)

console.log(tot);
