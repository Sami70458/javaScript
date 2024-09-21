const myNums = [1,2,3,4,5,6,7,8,9,10]

// const myTotal = myNums.reduce( function(acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//    return acc + currval;
// }, 0) // 0 is the initial value of accumulator

const myTotal = myNums.reduce(  (acc,curr) => acc+curr , 0  )

console.log(myTotal);

//////

const shoppingCart = [
    {
    itemName : 'js',
    price : 2999
    },
    {
        itemName : 'c++',
        price : 3999
    },
    {
        itemName : 'python',
        price : 2999
    },
    {
        itemName : 'java',
        price : 4999
    }
]

const priceToPay = shoppingCart.reduce(  (acc,item) => acc + item.price  , 0)

console.log(priceToPay)