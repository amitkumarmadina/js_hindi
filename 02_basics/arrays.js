const myarr=[0,1,2,3,4,5]
/*
console.log(myarr[3]);

myarr.push(9);

console.log(myarr);
myarr.pop()
myarr.unshift(9);
myarr.shift()

// console.log(myarr.includes(5));
// console.log(myarr.indexOf(4));
*/
const newArr=myarr.join() //array converted to string

console.log(myarr); 
console.log(typeof newArr);

//slice of slice

console.log("A",myarr);
const myn1=myarr.slice(1,3); //not include 3
console.log(myarr);
console.log(myn1);


// console.log(myn1);
// console.log("B",myarr);

 const myn2=myarr.splice(1,3); //include 3 but change the array
// console.log(myn2);
console.log("C",myarr);

