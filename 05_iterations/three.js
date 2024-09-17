// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}


//+++++++++++++ Maps ++++++++++++++

const map = new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

console.log(map);

for (const [key,value] of map) {
    console.log(key, ":-" ,value)
}

////

// const myObj = {
//     'game1' : "Free Fire",
//     'game2' : "GTA",
//     'game3' : "Clash Royale",
//     'game4' : "PUBG"
// }                              
// for (const [key,value] of myObj) {
//     console.log(key, ":-" ,value)
// }     //objects are not iterable in for of
