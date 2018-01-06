var mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String },
	// createdOn: { type: Date, default: Date.now, required: true },
	// closedOn: { type: Date },	
	reporter: { type: String, required: true },
	assignee: { type: String },
	status: {
		type: String,
		enum: ['Open', 'In progess', 'Done'],
		required: true
	},
	severity: {
		type: String,
		enum: ['Low', 'Medium', 'High', 'Critical']
	}
});

module.exports = mongoose.model('Ticket', ticketSchema, 'tickets');