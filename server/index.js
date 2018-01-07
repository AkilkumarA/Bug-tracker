var express = require('express');
var wagner = require('wagner-core');

require('./models/models.js')(wagner);

wagner.invoke(function(Ticket){
    var ticket = new Ticket({
        _id: 'ID-01',
        title: 'John Smith',
        description: 'john@smith.io',
        reporter: 'akil',
        assignee: 'akil',
        status: 'Open',
        severity: 'Low'
    });
    ticket.save();
});
