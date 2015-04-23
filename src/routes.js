module.exports = function(app){
  var path = require('path');

  app.get('/news', function(req, res) {
    res.sendfile(path.join(__dirname, '/views/', 'news-layout.html'));
  });

  // app.get('/expense', function(req, res) {
  //   res.render('expense-layout');
  // });
}
