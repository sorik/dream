module.exports = function(app){
  app.get('/', function(req, res) {
    res.render('news');
  });

  app.get('/expense', function(req, res){
    res.render('expense');
  });  
}
