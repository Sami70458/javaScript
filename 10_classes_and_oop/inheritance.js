class User{
    constructor(username){
        this.username = username 
    }

    logMe(){
        console.log (`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const Sam = new Teacher("Sam","sam@gmail.com","123")

Sam.addcourse()
Sam.logMe()

const Samiksha = new User("Samiksha")

Samiksha.logMe()

console.log(Sam instanceof Teacher)