var express = require('express');

module.exports = function(wagner) {
  var app = express.Router();

    app.get('/', wagner.invoke(function(Ticket) {
        return function(req, res) {
            Ticket.
                find().
                sort({ _id: 1 }).
                exec(function(error, tickets) {
                    if (error) {
                        return res.status(500).json({ error: error.toString() });
                    }
                    res.json({ tickets: tickets });
                });
        };
    }));

    app.post('/', wagner.invoke(function(Ticket) {
        return function(req, res) {    
            var ticket = new Ticket(req.body)
            ticket.save();
            res.status(200).json({ "message": "Ticket created" });
        }
    }));

    app.get('/:id', 
        function(req, res) {
            res.send('GET handler for /tickets/'+ req.params.id +' route.');
        }
    );

    app.put('/:id', 
        function(req, res) {
            res.send('PUT handler for /tickets/'+ req.params.id +' route.');
        }
    );

    app.delete('/:id', 
        function(req, res) {
            res.send('DELETE handler for /tickets/'+ req.params.id +' route.');
        }
    );

  return app;
};
