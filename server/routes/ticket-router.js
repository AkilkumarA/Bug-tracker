var express = require('express');

module.exports = function(wagner) {
  var app = express.Router();

    app.get('/', 
        function(req, res) {
            res.send('GET handler for /tickets route.');
        }
    );

    app.post('/', wagner.invoke(function(Ticket) {
        return function(req, res) {    
                var ticket = new Ticket({
                _id: 'ID-02',
                title: 'John    ',
                description: 'john@smith.io',
                reporter: 'akil',
                assignee: 'akil',
                status: 'Open',
                severity: 'Low'
            });
            ticket.save();
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
