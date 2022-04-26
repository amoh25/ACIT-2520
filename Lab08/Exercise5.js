const content = require('./my_data2.json')
const fs = require('fs');


function increment(file) {
    let obj = JSON.parse(JSON.stringify(file));
    obj["a"] += 1
    obj["b"]["c"] += 1
    obj["b"]["d"][0] += 1
    obj["b"]["e"]["f"] += 1

    return JSON.stringify(obj)
}



fs.writeFile('./my_new_file.json',increment(content), 'utf-8', () =>{});