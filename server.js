//Module dependencies
var application_root = __dirname,
	express = require('express'),
	path = require('path'),
	mongoose = require('mongoose');

//Create server
var app = express();

//Configure server
app.configure(function() {
	app.use(express.bodyParser());

	app.use(express.methodOverride());

	app.use(app.router);

	app.use(express.static(path.join(application_root, 'site')));
});

var port = 4711;

app.listen(port, function() {
	console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});

app.get('/api', function(request, response) {
	response.send('Library API is running.');
})