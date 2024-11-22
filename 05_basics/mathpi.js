const discripter=Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(Math.PI);
console.log(discripter);
const chi={
    name:"ginger chi",
    price:250,
    isAvilable:true,
    orderChi:function(){
        console.log("chi nahi bani");
    }
}
console.log(Object.getOwnPropertyDescriptor(chi,"price"));


Object.defineProperty(chi,'price',{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chi,"price"));


for (let [key,value]  of Object.entries(chi)) {
    if (typeof value !=='function') { 
    
    console.log(`${key} : ${value}`);
    }
}