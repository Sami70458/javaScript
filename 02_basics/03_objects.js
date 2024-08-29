//singleton


//Object.create      //constructor method

//symbol declaration
const mySym = Symbol("key1")

//object literals

const JsUser = {
    name : "Samiksha",
    "full name" : "Samiksha Bharti",
    age : 20,
    [mySym] : "mykey1",
    location : "Kolkata",
    email : "sam@gmail.com",
    isLoggedIn : false,
    lastLogInDays : [10,12,23,27]
}
//Accessing the object
console.log(JsUser.email) //method 1
console.log(JsUser["email"]) //method 2
console.log(JsUser["full name"])
console.log(JsUser[mySym]) //accessing symbol
console.log(typeof JsUser[mySym])

JsUser.email = "sam4@gmail.com"
console.log(JsUser.email) // updating the value

//Object.freeze(JsUser) //This is to freeze the content so that no one could change it

JsUser.email = "sam45@gmail.com"
console.log(JsUser.email) // updating the value



//declaring functions in oject
JsUser.greetings = function(){
    console.log("Hello Js User")
}

JsUser.greetings2 = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greetings())

console.log(JsUser.greetings2())

console.log(JsUser)