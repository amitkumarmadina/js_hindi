function multiply(num){
    return num*num
}
multiply.power=2;
console.log(multiply.power);
console.log(multiply.prototype);
console.log(multiply(5));


function createUser(username,score){
this.username=username;
this.score=score;
}

createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
    
}
const chai=new createUser("chi",25)
const tea=new createUser("tea",250)

chai.printMe()


 