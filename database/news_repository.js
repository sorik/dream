module.exports = function(app){
  app.get('/data/news', function(req, res) {
    var db = req.db;
    var news = db.get('newstestcollection');
    news.find({}, {}, function(e, docs) {
        console.log(docs);
        res.json(docs);
    });
  });

  app.post('/data/news/add', function(req, res){
      var db = req.db;
      db.get('newstestcollection').
        insert(
          {"title": req.body.title,
           "content": req.body.content,
           "timestamp": new Date()},
           function(err, doc) {
              if (err) {
                  res.send("fail");
              } else {
                res.send("success");
              }
        });
  });
}