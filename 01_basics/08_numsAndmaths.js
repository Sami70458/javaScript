const num = new Number(400.8956) 
console.log(num)

console.log(num.toString()) //conversion to string
console.log(num.toString().length)

console.log(num.toFixed(2)) //precision upto 2 decimal points

console.log(num.toPrecision(3))

/////
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'))


///////+++++++++++ MATHS +++++++++++++++

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.56))
console.log(Math.ceil(4.56))
console.log(Math.floor(4.56))
console.log(Math.min(4,5,7,1,0))
console.log(Math.max(4,5,7,1,0))
 
console.log(Math.random()) //give vaklues between 0 and 1
console.log((Math.random()*10) + 1)

const min=10
const max=20

console.log(Math.floor(Math.random()* (max-min+1))+min) 