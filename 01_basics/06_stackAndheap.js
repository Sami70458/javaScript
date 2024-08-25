//Stack (Primitive),Heap(Non-Primitive)

let myName="Samiksha"
let anotherName = myName
console.log(anotherName)

anotherName = "Mickey"
console.log(anotherName)
console.log(myName) //// call by value -> copy of the variable

let userOne = {
    email:"user@gmail.com",
    upid:"user24",
}

let userTwo = userOne
userTwo.email="sam@gmail.com"

console.log(userOne);
console.log(userTwo);