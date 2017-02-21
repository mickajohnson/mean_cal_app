var mongoose = require('mongoose')

var eventSchema = mongoose.Schema({
  description: {type: String, required: [true, 'Description is required.'], minlength: [3, 'Description must be longer than 3 characters.']},
  startDate: {type: Date, required: [true, 'Start time is required.']},
  endDate: {type: Date, required: [true, 'End time is required.']}
},{timestamps: true})

var userSchema = mongoose.Schema({
  username: {type: String, required: [true, 'Username is required.'], unique: [true, 'Username is already created.'], minlength: 3},
  events: [eventSchema]
},{timestamps: true})

mongoose.model('Event', eventSchema);
mongoose.model('User', userSchema);
