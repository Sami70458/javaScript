const name="Samiksha-hi"
const age=20

//Concatenation
console.log(name+age+" Value")
console.log(`Hello my name is ${name} and my age is ${age}`) //string interpolation

//declaration can also be done in this way

const favColor = new String('Red')
console.log(`My favourite colour is ${favColor}`)
console.log(favColor[0]) 
console.log(favColor.__proto__) //prototype
console.log(favColor.length) //gives length of string
console.log(favColor.toUpperCase())
console.log(favColor.charAt(2)) //symbol at which index
console.log(favColor.indexOf('R')) //gives symbol present at that particular index

const newName = name.substring(0,4) // index 4 is not included
console.log(newName)

const newName1 = name.slice(-8,5)
console.log(newName1)

const newName2 = "    Samiksha    "
console.log(newName2)
console.log(newName2.trim())

const url = "http://samiksha.com%20/samiksha"
console.log(url.replace('%20','-')) //replaces one string with another
console.log(url.includes('samiksha')) //does url includes the string "samiksha"

console.log(name.split('-')) //splits the string with respect to '-' 