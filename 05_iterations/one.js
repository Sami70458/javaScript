// for loop

// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     if(element == 5){
//         console.log("5 is best number")
//     }
//     console.log(element);
// }


////

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop : ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         //console.log(`Inner loop  ${j} and inner loop ${i}`)
//         console.log(i + '*' + j + '=' + i*j)
//     }
// }


////////
// let array = ["apple","banana","pineapple","orange"]
// console.log(array.length)
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
// }


// ++++++++++++++  KEYWORDS +++++++++++++++++

//+++++ break ++++++

// for (let index = 1; index <= 20; index++) {
//     if(index==7){
//         console.log(`Detected ${index} Thala for a reason`);
//         break;
//     }
//     console.log(`Value of index is ${index}`)
    
// }

//+++++ Continue ++++++++

for (let index = 1; index <= 20; index++) {
    if(index==7){
        console.log(`Detected ${index} Thala for a reason`);
        continue;
    }
    console.log(`Value of index is ${index}`)
    
}