const http = require('http'); 
const contents = require("./my_data.json")

function formatter(data){
        return (`Name: ${data.name}   Age: ${data.age}`)
}

http.createServer(function(request, response) { 
    response.writeHead(200, {"Content-Type":"text/html"}); 
    response.write(formatter(contents)); 
    response.end(); 
}).listen(8081);
