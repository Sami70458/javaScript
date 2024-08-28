const myArr = [0,1,2,3,4,5]

const myArr1 = new Array(0,1,2,3,4,5)

console.log(myArr)
console.log(myArr1)

//Array Method

myArr.push(6)
console.log(myArr) //adds element at last

myArr.pop()
console.log(myArr) //removes element from last

myArr.unshift(9)
console.log(myArr) //adds element at first

myArr.shift()
console.log(myArr) //removes element from first

console.log(myArr.includes(9))

console.log(myArr.indexOf(9))

 const myArr2 = myArr.join() //convert array to string
 console.log(myArr2)
 console.log(typeof myArr2)


 //slice and splice 

 console.log("A ",myArr)

 const myn1 = myArr.slice(1,3) //does not change the array
 console.log("B ",myArr)
 console.log(myn1)

 const myn2 = myArr.splice(1,3) //change the array
 console.log("C ",myArr)
 console.log(myn2)