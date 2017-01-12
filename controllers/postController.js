var Post = require('../models/post');

module.exports = {
  index: index,
  show: show,
}

function index(req, res, next) {
  console.log("Okay, I hear you!");

  Post.find({}, function(err, posts) {
    if (err) next(err);
    res.json(posts);
  });
}

function show(req, res, next) {
  var id = req.params.id;
  console.log("The one post to rule them all...");

  Post.findOne({_id: id}, function(err, post) {
    if (err || !post) {
      next(err);
    }
    else {
      res.json(post);
    }
  })
}
