const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const podcastSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  podcastId: {
    type: String,
    default: () => uuidv4(), 
    required: true,
    unique: true, 
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Podcast = mongoose.model('Podcast', podcastSchema);

module.exports = Podcast;
