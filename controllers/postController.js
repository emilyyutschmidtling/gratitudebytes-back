var Post = require('../models/post');

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
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

function create(req, res, next) {
  console.log("Making a new post!");

  var newPost = new Post(req.body);
  newPost.save(function(err, savedPost) {
    if (err) next(err);
    res.json(savedPost);
  })
}

function update(req, res, next) {
  var id = req.params.id;

  Post.findOne({id: id}, function(err, post) {
    if (err || post) {
      next(err);
    }
    else {
      if(req.body.content) post.content = req.body.content
      if(req.body.img_url) post.img_url = req.body.img_url
      if(req.body.updatedAt) post.updatedAt = req.body.updatedAt

      post.save(function(err, updatedPost) {
        if (err) next(err);
        console.log("Trying to make a change...");
        res.json(updatedPost);
      })
    }
  })
}

function destroy(req, res, next) {
  var id = req.params.id;

  Post.remove({_id:id}, function(err) {
    if (err) next(err);
    res.json({msg: "Post deleted"});
  })
}
