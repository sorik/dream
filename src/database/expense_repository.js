/* global module */

module.exports = function(app){
  'use strict';

  var convertToTimeRangeQuery = function(query) {
    var startDate = new Date(query.start);
    var endDate = new Date(query.end);
    return {
      date: {
        $gte: startDate.toJSON(),
        $lt: endDate.toJSON()
      }
    };
  };

  app.get('/data/expense', function(req, res){
    var db = req.db;
    var expenses = db.get('expensecollection');

    expenses.find(convertToTimeRangeQuery(req.query),
                  {},
                  function(e, docs){
      res.json(docs);
    });
  });

  app.post('/data/expense/add', function(req, res){
    var db = req.db;

    db.get('expensecollection').insert(
      {
        date: req.body.date,
        item: req.body.item,
        amount: req.body.amount
      },
       function(err) {
        if (err) {
          res.send('fail');
        } else {
          res.send('success');
        }
       });
  });
};