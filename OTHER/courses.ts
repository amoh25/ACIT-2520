type courses = {
    course: string[]
}

function schedule_maker(stuff) {
    return `<p>${stuff}</p>`;
}

let data: courses = { 
    course: [" MATH1350", " ACIT2420", " ACIT2520", " ACIT2515", " ACIT2831", " ACIT2620", " COMM2216"]
};

document.querySelector('section').innerHTML = schedule_maker(data.course)
