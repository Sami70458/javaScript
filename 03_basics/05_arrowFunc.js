const user = {
    username : "Samiksha",
    price : 999,
    welcomeMessage : function(){
        console.log(`Hello ${this.username} , welcome to website`)
    }
} //this refers to current context

user.welcomeMessage()

user.username = "Sam"
user.welcomeMessage()

//global object in browser is "window"

// function chai(){
//     console.log(this)
// }

// chai()

const chai = () => {
    console.log(this)
}

chai() //arrow function


//ARROW FUNCTION

// const addTwo = (num1,num2) => {
//      return num1 + num2
// } //if you are writing in curly braces,you will have to use the return keyword

// console.log(addTwo(9,7))

// const addTwo = (num1,num2) => num1 + num2
// console.log(addTwo(8,7))

const addTwo = (num1,num2) => (num1 + num2) //if you are writing in paranthesis,you will not have to use the return keyword
console.log(addTwo(8,7))

const add = (num1,num2) => ({username:"Samiksha"})
console.log(add(8,7))