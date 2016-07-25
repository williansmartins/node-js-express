var app = require('./config/express')();
var routes = require('./app/routes/produtos')(app);

//criacao do servidor de paginas
app.listen(3000, function(){
	console.log("servidor rodando");
});