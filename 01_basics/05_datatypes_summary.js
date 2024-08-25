// Primitive Datatypes (Call by Value)
// 7 types :- String,Number,Boolean,null,undefined,Symbol,BigInt
const score = 100;
const name = "Samiksha"
const isGirl =  true
const outsideTemp = null //return type -> object
let userEmail; //undefined
const id = Symbol('123')
const anotherId = Symbol('123') 
console.log(id===anotherId);//although both looks same3 but they gives different value
const bigNumber = 45346576876933n
//console.log(anotherId);


// Non-Primitive or reference type datatype
// Array,Object,Function

const srks = ["rahul","Dr.Jug","Raj"]

let myObj = {
    name:"Samiksha",
    age:20,
} //return type -> function

const myFunction = function(){
       console.log("Hello World");
}  //return type -> object function