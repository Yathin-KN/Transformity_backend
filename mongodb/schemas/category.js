const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String,
    default: () => uuidv4(),
  },
  postCount: {
    type: Number,
    default: 0, 
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
