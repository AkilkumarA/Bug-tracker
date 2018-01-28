var express = require('express');

module.exports = function(wagner) {
  var app = express.Router();

    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

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
            ticket.save(function(error){
                if (error) {
                    return res.status(500).json({ error: error.toString() });
                }
                res.status(200).json({ "message": "Ticket created" });
            });
        }
    }));

    app.get('/:id', wagner.invoke(function(Ticket) {
        return function(req, res) {
            Ticket.findById(req.params.id, function(error, ticket) {
                if (error) {
                    return res.status(500).json({ error: error.toString() });
                }
                return res.json({ticket});
            });
        }
    }));

    app.put('/:id', wagner.invoke(function(Ticket) {
        return function(req, res) {
            Ticket.findById(req.params.id, function(error, ticket) {
                if (error) {
                    return res.status(500).json({ error: error.toString() });
                }
                for (var prop in req.body) {
                    ticket[prop] = req.body[prop];
                }
                ticket.save(function(error){
                    if (error) {
                        return res.status(500).json({ error: error.toString() });
                    }
                    res.status(200).json({ "message": "Ticket updated" });
                });
            });
        }
    }));

    app.delete('/:id', wagner.invoke(function(Ticket) {
        return function(req, res) {
            Ticket.findById(req.params.id, function(error, ticket) {
                if (error) {
                    return res.status(500).json({ error: error.toString() });
                }
                ticket.remove(function(err) {
                    if (error) {
                        return res.status(500).json({ error: error.toString() });
                    }
                    res.status(200).json({ "message": "Ticket deleted" });
                });
            });
        }
    }));

  return app;
};
