var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/bower_components'));

app.listen(3000);

app.get('/', function (req, res){

	res.render('index', {
		titulo: 'Principal',
		texto: '¡Hola Mundo!'
	});
});
