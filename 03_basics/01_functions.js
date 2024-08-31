function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("A");
}

sayMyName();

function addTwoNumbers(number1,number2){
    let result = number1+number2;
    return result;
}
const result = addTwoNumbers(2,6);
console.log("Result: ",result);


function loginUserMessage(username = "sam"){
    if(username === undefined){
          console.log("Please enter a valid username")
          return
    }   
     return `${username} just logged in`
}

console.log(loginUserMessage("Samiksha"));

console.log(loginUserMessage());