let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let articleSchema = new Schema(
  {
    title: String,
    description: String,
    tags: String,
    likes: Number,
    author: String,
    comments: String,
  },
  { timestamps: true }
);

let Article = mongoose.model('Article', articleSchema);

module.exports = Article;
