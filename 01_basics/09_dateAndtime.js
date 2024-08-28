///Dates

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toJSON())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())


console.log(typeof myDate) //Object

let myCreatedDate = new Date(2024,2,9) //months start from 0 in js
console.log(myCreatedDate.toDateString())

let myCreatedDate1 = new Date(2024,2,9,5,3)
console.log(myCreatedDate1.toLocaleString())

let myCreatedDate2 = new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleString())


let myTimeStamp = Date.now() // miliseconds value counted from 1st Jan 1970 till now
console.log(myTimeStamp)


console.log(myCreatedDate2.getTime()) // 1st jan 1970 till 01-14-2023

//Date in seconds

console.log(Math.floor((Date.now())/1000))


let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getFullYear())

newDate.toLocaleString('default',{
    weekday : "long"
})




