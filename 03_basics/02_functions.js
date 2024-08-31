// "..." <= rest operator ,It is used when number of values is not known


function calculateCartprice(...num1){
    return num1
}

console.log(calculateCartprice(2,4,6,1))


//////

const user = {
    username : "Samiksha",
    price : 199
}

function handleObject(anyobject){
 console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user);

handleObject({
    username : "Samiksha",
    price : 299
});

//////////////

const myNewArray = [1,2,3,4,5,6]

function returnSecondValue(getArray){
   return getArray[1];
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([1,2,3,4,5,6]));