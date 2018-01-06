var mongoose = require('mongoose');
var Ticket = require('./model/ticket');

mongoose.connect('mongodb://localhost:27017/bugtracker');

var ticket = new Ticket({
  title: 'John Smith',
  description: 'john@smith.io',
  reporter: 'akil',
  assignee: 'akil',
  status: 'Open',
  severity: 'Low'
});

console.log("Hi, I am Running!!");

ticket.save();