
/*
let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(typeof myDate);

let createdDate=new Date(2024,0,24,4,6,6)
console.log(createdDate);
console.log(createdDate.toDateString());
console.log(createdDate.toLocaleString());



let created=new Date("01-12-24")
console.log(created.toLocaleString());

// let timestamps=Date.now();
// console.log(timestamps);
// console.log(created.getTime());

console.log(Date.now());


console.log(Math.floor(Date.now()/100));
*/

let newDate= new Date()
console.log(newDate);
console.log(newDate.getDate());


newDate.toLocaleString('default',{
    weekday:"long",
   // timeZone:'timezone'
})