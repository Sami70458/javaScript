// For in


const myObj = {
    'game1' : "Free Fire",
    'game2' : "GTA",
    'game3' : "Clash Royale",
    'game4' : "PUBG"
}      

for (const key in myObj) {
    console.log(`${key} is for ${myObj[key]}`)
}

////

const programming = ["js","c++","python","java","ruby"]

for (const key in programming) {
   console.log(`${key} is for ${programming[key]}`);
}


///// maps can't be iterated using for in

const map = new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

for (const key in map) {
    console.log(map);
}
