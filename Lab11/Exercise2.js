const app = require('express')();
const basicAuth = require('express-basic-auth');
const credentials = [ {'admin': 'pwd'}, {'root': 'p@ssword'},{'sam': 'abc'}, {'bob': 'xyz'}];

app.use(basicAuth( { authorizer: myAuthorizer } ))
// function myAuthorizer(username, password) {
//     match = false
//     credentials.forEach((user,pass) => {
//         const userMatches = basicAuth.safeCompare(username, '${user}');
//         const passwordMatches = basicAuth.safeCompare(password, '${pass}');
//             return (userMatches & passwordMatches)
//     })
//     if (match = true){
//         return true
//     }
//     else {
//         return false
//     }
// }

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

app.listen(8080);
