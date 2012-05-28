
/**
 * Module dependencies.
*/

var express = require('express')
, routes = require('./routes')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.set('view options', { layout: false });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/client'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);

app.get('/specs', function(req, res){
  res.render('specrunner'); 
});

app.get('/query/helloworld', function(req, res){
  res.json({message: 'Hello World'});
});

app.get('/query/version', function(req, res){
  res.json({version: 'V1.0.0'});
});

app.get('/query/vehiclejourneys', function(req, res) {
  res.json([
           {registration: 'A123 CDE', distance: 102.34},
           {registration: 'B456 FGH', distance: 210.34}
  ]);
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
