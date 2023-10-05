const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  photo: {
    type:String,
    required:true,
  },
  username:{
    type:String,
    required:false,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type:Date,
    required:false,
  },
  eventTime: {
    type: String,
    required: true,
  },
  eventLocation: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  eventId: {
    type: String,
    default: () => uuidv4(),
  },
  user_id:{
    type:String,
    required:true,
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
