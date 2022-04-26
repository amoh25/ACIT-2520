// function TermTwoCourses(course: TermTwoCourse){
//     return course
// }

// let Web_dev = TermTwoCourses("2520")

// console.log(Web_dev)

interface TermTwoCourses<TermTwoCourse> {
    course: TermTwoCourse
}

let web_dev : TermTwoCourses<TermTwoCourse> = {course: "2520"}
let math : TermTwoCourses<TermTwoCourse> = {course: "1350"}

console.log(web_dev.course)
