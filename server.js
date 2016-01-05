var express = require('express');
var app = express();
var port = 3000;


var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private route hit!');
		next();
	},
	logger: function (req, res, next) {
		var date = new Date().toString();
		console.log('Request: '+date+ ' ' +req.method+ ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);


// app.get('/', function (req, res) {
// 	res.send('Hello express!');
// });

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));


app.listen(port, function () {
	console.log('express server started at localhost '+ port);
}); 