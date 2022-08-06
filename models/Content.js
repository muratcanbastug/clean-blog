const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  post_title: String,
  sub_title: String,
  content: String,
  author: String,
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
