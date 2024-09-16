//+++++ if+++++++
// const isUserLoggedIn = true;

// if(isUserLoggedIn){
//     console.log("User looged in successfully")
// }

// // <,>,<=,>=,==,===,!=,!==

//+++++++ if-else +++++++++
// const temp = 60

// if(temp==50){
//     console.log("Temp is 50")
// }
// else{
//     console.log("Temp is greater than 50")
// }

////
//const balance = 1000;
// if(balance>500) console.log("True"),console.log("Hii"); //implicit scope

// if(balance<500)
// {
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }
//////

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy courses")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User looged in");
}