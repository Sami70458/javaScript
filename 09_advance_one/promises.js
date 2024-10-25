const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    // DB calls, cryptography , network
    setTimeout(function(){
        console.log('Async task is completed')
        resolve();

    },1000)
})

promiseOne.then(function(){
    console.log('Promise consumed!')
})

///
new Promise(function(resolve,reject){
    //Do an async task
    // DB calls, cryptography , network
    setTimeout(function(){
        console.log('Async2 task is completed')
        resolve();

    },1000)
}).then(function(){
    console.log('Promise2 consumed!')
})

////

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function() {
        resolve({username:"Sam",email:"sam@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

/////

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function() {
        let error = true 
        //let error = false
        if(!error){
            resolve({username:"Samiksha",password:"abcd"})
        }else{
            reject('ERROR : Something went wrong!')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected!!"))

//////

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function() {
        let error = true 
        //let error = false
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('ERROR : JS went wrong!')
        }
    },1000)
})

async function consumePromiseFive() {
   try {
    const response = await promiseFive
    console.log(response)
   } catch (error) {
    console.log(error)
   }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         //console.log(response)
//         const data = await response.json()
//         console.log(data)
//     } catch (error){
//         console.log("E: ",error)
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => console.log(error))