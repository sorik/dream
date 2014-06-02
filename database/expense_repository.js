module.exports = function(app){
  app.get('/data/expense', function(req, res){
    var db = req.db;
    var expenses = db.get('expensecollection');
    expenses.find({}, {}, function(e, docs){
      res.json(docs);
    });
  });
  
  app.post('/data/expense/add', function(req, res){
  var db = req.db;
  db.get('expensecollection').insert(
    {"date": req.body.date,
     "item": req.body.item,
     "amount": req.body.amount},
     function(err, doc) {
      if (err) {
        res.send("fail");
      } else {
        res.send("success");
      }
     });
});
}