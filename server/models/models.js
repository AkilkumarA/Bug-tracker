var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var ticketMongooseSchema = require('./schemas/ticket.js');

module.exports = function(wagner) {
  mongoose.connect('mongodb://localhost:27017/bugtracker');

  autoIncrement.initialize(mongoose.connection);
  ticketMongooseSchema.plugin(autoIncrement.plugin, { 
    model: 'Ticket', 
    startAt: 1
  });
  var Ticket = mongoose.model('Ticket', ticketMongooseSchema, 'tickets');

  wagner.factory('Ticket', function() {
    return Ticket;
  });

  return {
    Ticket: Ticket
  };
};
