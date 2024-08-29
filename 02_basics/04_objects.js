//Object declaration using constructor (Singleton)

const tinderUser = new Object() //method 1 singleton object
const tinderUser1 = {} //method 2 non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammi"
tinderUser.isLoggedIn = false

const regularUser = {
    email : "sam@gmail.com",
    fullname : {
        userfullname:{
            firstname : "Samiksha",
            lastname : "Bharti"
        }
    }
}  //objects within object

// console.log(regularUser.fullname.userfullname.firstname) //accessing nested objects
// console.log(regularUser.fullname)

// console.log(tinderUser)
// console.log(tinderUser1)


//++++++++ Merge Objects ++++++++++

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}

const obj3 = Object.assign({},obj1,obj2) //method1

const obj4 = {...obj1,...obj2} //method2

console.log(obj3)
console.log(obj4)

const users = [
    {
        id:"123",
        email:"sam1@gmail.com"
    },
    {
        id:"1234",
        email:"sam2@gmail.com"
    },
    {
        id:"12345",
        email:"sam3@gmail.com"
    }
]

//accessing
console.log(users[1].id)

console.log(Object.keys(tinderUser))

console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))