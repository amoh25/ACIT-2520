const fs = require("fs")
const data = fs.readFileSync("./my_data.txt", "utf-8" )

console.log(data)