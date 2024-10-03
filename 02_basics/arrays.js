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

const marval_heros=["thor","ironman","spiderman"]
const dc_heros=["aquaman","wonderwomen","superman"]

// marval_heros.push(dc_heros)
// console.log(marval_heros[3][2]);

const allheroes=marval_heros.concat(dc_heros)
console.log(allheroes);

const all_newheros=[...marval_heros,...dc_heros]
//console.log(all_newheros);

const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realarr=another_arr.flat(Infinity)
console.log(realarr);


console.log(Array.isArray("Amit"))
console.log(Array.from("Amit"));
console.log(Array.from({name:"amit"})); //intresting case


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));
