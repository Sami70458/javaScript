class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){

        return this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value;
    }
}

const Samiksha = new User("sam@gmail.com","abc")
console.log(Samiksha.password)