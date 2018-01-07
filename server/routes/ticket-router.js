var express = require('express');

module.exports = function(wagner) {
  var app = express.Router();

    app.get('/api/books', wagner.invoke(function(Ticket) {
        return function(req, res) {
            Ticket.find(function(err, tickets) {
                if (err)
                    res.send(err)
                res.json(tikcets);
            });
        }
    }));

  return app;
};
