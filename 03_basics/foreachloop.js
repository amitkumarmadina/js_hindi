// const coding =["js","ruby","java","py"]

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


/*
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
*/

// const coding= ["js","ruby","java","py"]

// const values=coding.forEach((item)=>{
//     console.log(item); 
//     return item;
// })
// console.log(values);


//const mynums=[1,2,3,4,5,6,7,8,9,10]


//  const filterednnums=mynums.filter((numbers)=>{
//     return numbers>4
//  })
// console.log(filterednnums);

//  const newNums=[]
//  mynums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num);
//     }
//  })

//  console.log(newNums);
 


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let desbooks=books.filter((thebook)=>thebook.genre==='History')
 desbooks=books.filter((thebook)=>{
    return thebook.publish>=1995 && thebook.genre==="History" 
})
  console.log(desbooks);
  












