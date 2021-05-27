let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let blogSchema = new Schema({
  articles: String,
  comments: String,
  user: String,
});

let Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
