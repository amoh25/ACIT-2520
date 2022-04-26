const { response } = require("express");
let express = require("express");
const { request } = require("http");
let app = express();
let server = require("http").createServer(app)

app.get("/",(request, response) => {
    response.sendFile(__dirname + "/homepage.html")
})

app.get("/about.html",(request,response) => {
    response.sendFile(__dirname + "/about.html")
})


app.listen(5000)