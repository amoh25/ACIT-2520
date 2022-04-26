const data = JSON.parse("./courses.json")

type list = Array<Course>
let courses: list = []

interface Course {
    name: string
    number: string
    Description: string
    credits: string
    Prerequisites: string
}




function json_organizer(file=data){
    let obj = JSON.parse(JSON.stringify(file))

    for(let i = 0; i < 8; i++){
        let one_class: Course = {
            name : obj[i]["course_name"],
            number: obj[i]["course_number"],
            Description: obj[i]["Description"],
            credits: obj[i]["credits"],
            Prerequisites: obj[i]["Pre-requisites"],
        };
        courses.push(one_class)
    };
}

function table_filler(data:Array<Course>=courses){
    for(let i = 0; i < 8; i++){
        document.getElementById('table').innerHTML += `<tr><td>${data[i].number}</td><td>${data[i].name}</td><td>${data[i].Description}</td><td>${data[i].credits}</td><td>${data[i].Prerequisites}</td></tr>`
    }
}

json_organizer()
table_filler()