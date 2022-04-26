const app = require('express')();
const basicAuth = require('express-basic-auth');
const credentials = require('./models/credentials.json')
const server = require("http").createServer(app);
const io = require("socket.io")().listen(server).sockets;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

app.use(basicAuth( { authorizer: myAuthorizer } ))

function myAuthorizer(username, password) {
    for (user in credentials) {
      const userMatches = basicAuth.safeCompare(
        username,
        Object.keys(credentials[user])[0]
      );
      const passwordMatches = basicAuth.safeCompare(
        password,
        Object.values(credentials[user])[0]
      );
      return userMatches & passwordMatches;
    }
  }

app.get('/', function(req, res){
res.send('secret message that only auth\'d users can see\n');
});


let connectedUser = [];
io.on("connection", (socket) => {
    console.log("one user connected");
    updateUserName();
    let username = "";
    socket.on("login", (name, callback) => {
    if (name.trim().length === 0) {
        retur;
    }
    callback(true);
    username = name;
    connectedUser.push(username);
    console.log(connectedUser);
    updateUserName();
    });

    socket.on("disconnect", () => {
    console.log("one user disconnected");
    connectedUser.splice(connectedUser.indexOf(username), 1);
    console.log(connectedUser);
    updateUserName();
    });
    function updateUserName() {
    io.emit("loadUser", connectedUser);
    // We’ll define “loadUser” event in html later
    }

    //receive chat message
    socket.on("chat message", (msg) => {
    //emit message data
    io.emit("output", {
        name: username,
        msg: msg,
    });
    });
});





const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server is running on port ${port}`));

app.listen(8080);
