const app = require('express')();
const basicAuth = require('express-basic-auth');

app.use(basicAuth({
users: { 'aladdin': 'opensesame' } //Basic YWxhZGRpbjpvcGVuc2VzYW1l
}));

app.get('/', function(req, res){
res.send('secret message that only auth\'d users can see\n');
});

app.listen(8080);
