const fruits = ["apple","orange","banana"]

const vegies = ["potato","onion","carrot"]

//fruits.push(vegies) //++++++++
// console.log(fruits)

// console.log(fruits[3][1])

//++++++++concatenation+++++++++++

// const newArr = fruits.concat(vegies)
// console.log(newArr)

//++++Spread++++
// const newArr1 = [...fruits,...vegies] //merge two arrays
// console.log(newArr1)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usable_another_array = another_array.flat(Infinity) //keep all elements in a single array
console.log(usable_another_array)



console.log(Array.isArray("Samiksha")) //is it a array or not

console.log(Array.from("Samiksha")) //any datatype to array conversion

console.log(Array.from({name:"Samiksha"})) //interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) //Returns a new array from a set of elements
