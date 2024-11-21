class User{
    constructor(username){
        this.username=username
    }
    logIn(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCources(){
        console.log(`new course was added by ${this.username}`);
        
    }
}

const chi=  new Teacher("chi","chai@gmail.com","123")

chi.addCources()