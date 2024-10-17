const coding =["js","ruby","java","py"]

// coding.forEach(function (item){
//     console.log(item); 
// })

// coding.forEach((items)=>{
//     console.log(items);
// })

// function printname(item){
//     console.log(item);
// }
// coding.forEach(printname)



coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);

})


const myLan=[
    {
        languagename:"javascript",
        languageFILEname:"js"
    },
    {
        languagename:"python",
        languageFILEname:"py"
    },
    {
        languagename:"java",
        languageFILEname:"java"
    },
    {
        languagename:"ruby",
        languageFILEname:"ruby"
    },
]

myLan.forEach((item)=>{
        console.log(item.languagename);
        
})















