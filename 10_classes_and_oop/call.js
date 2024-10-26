const SetUserName = function(username){
    //complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){

    SetUserName.call(this, username)

    this.email = email
    this.password = password
}

const Sam = new createUser("Samiksha","sam@gmail.com","123")

console.log(Sam)

