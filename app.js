var http = require('http')
  , router = require('flask-router')()
  , server = http.createServer(router.route).listen(5000);


router.get('/', function(req, res){

  res.write('it works!');
  res.end();

}); 