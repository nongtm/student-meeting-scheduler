var express = require('express');

var app = express();

app.use(express.static('views'))
app.use(express.static('images'))

app.get('/', function(req, res){
	res.send("Hello World!");
})

app.listen(8080, function () { 
	console.log('Application is listening on port 8080!') 
})