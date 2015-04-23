module.exports = function(app){
  app.get('/news', function(req, res) {
    res.render('news-layout');
  });

  app.get('/expense', function(req, res) {
    res.render('expense-layout');
  });
}
