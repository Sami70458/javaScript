// For each

const programming = ["js","c++","python","java","ruby"]

// programming.forEach(  function (item) {
//     console.log(item);
// }  )

/////
// programming.forEach(  (item) =>  {
//     console.log(item);
// }  )

/////
// function printMe(item){
//     console.log(item);
// }

// programming.forEach(printMe)

////
// programming.forEach(  (item,index,arr) => {
//     console.log(item,index,arr);
// }  )

//////

const myCoding = [
    {
    'LanguageName' : "Java",
    'LanguageFileName' : "java",
    },
    {
        'LanguageName' : "Python",
        'LanguageFileName' : "py",
    },
    {
        'LanguageName' : "Java Script",
        'LanguageFileName' : "js",
    }
]

myCoding.forEach(  (item) => {
         console.log(item.LanguageName);
}  )