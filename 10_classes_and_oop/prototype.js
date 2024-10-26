// let myName = "Samiksha"

// console.log(myName.length);


let myHeroes = ["thor","spiderman"]


let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Samiksha = function(){
    console.log(`Samiksha is present in all objects`);
}

Array.prototype.heySam = function(){
    console.log("Samiksha says hello!")
}

//heroPower.Samiksha()

myHeroes.Samiksha()

myHeroes.heySam()
//heroPower.heySam()  //Prototype defined in Object is available to Array also, but the vice versa is not true


////     Inheritance    /////

const User = {
    name : "Samiksha",
    email : "Sam@gmail.com"
}


const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User


//Modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "ChaiaurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength()
"Samiksha   ".trueLength()