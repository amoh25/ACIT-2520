interface Person {
    name:string
    age:Number
}

class course {
    course_name:string
    course_number:number

    constructor(course_name:string, course_number:number) {
        this.course_name = course_name;
        this.course_number = course_number
    }
}

const person: Person = {
    name: "Ayman",
    age: 18,
};

const web_Dev: course = new course("Web Dev", 2520)
