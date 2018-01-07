var mongoose = require('mongoose');
var ticketMongooseSchema = require('./schemas/ticket.js');

module.exports = function(wagner) {
  mongoose.connect('mongodb://localhost:27017/bugtracker');

  var Ticket = mongoose.model('Ticket', ticketMongooseSchema, 'tickets');

  wagner.factory('Ticket', function() {
    return Ticket;
  });

  return {
    Ticket: Ticket
  };
};
