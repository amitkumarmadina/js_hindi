//for of

//["","",""]

//[{},{},{}]

const arr= [1,2,3,4,5]

for (const nums of arr) {
    //console.log(nums);
    
}

const greetings ="Hello World"
for(const greet of greetings){
    //console.log(`Each char s ${greet}`);   
}

//Map
const map=new Map();

map.set('IN','India') 
map.set('USA','America')
map.set('PAK','Pakistan')

//console.log(map);

for (const [key,value] of map) {
 //console.log(key,':-',value);  
}

const myObj={
    game1:'NFS',
    game2 : 'Spiderman'
}

for (const [key,value] of myObjobj) {
    console.log(key,':-',value);
    
}