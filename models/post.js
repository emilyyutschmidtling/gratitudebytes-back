var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  user: {type: String, ref: 'User'},
  content: String,
  img_url: String,
  comment: {type: String, ref: 'Comment'},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
});

// create the Post constructor
var Post = mongoose.model('Post', PostSchema);

// make the Post constructor available everywhere in the app
module.exports = Post;
