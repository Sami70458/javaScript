// Destructuring of Objects

const course = {
    coursename : "Js in Hindi",
    price : "free",
    courseStudent : "Samiksha"
}

const {courseStudent} = course //method 1

const {courseStudent:Stud} = course

console.log(courseStudent)
console.log(Stud)

//JSON

// {
//     "coursename" : "Js in Hindi",
//     "price" : "free",
//     "courseStudent" : "Samiksha"
// }


