var express = require('express');
var router = express.Router();
var postController = require('../controllers/postController');

router.route('/api/posts')
  .get(postController.index)
  .post(postController.create)

router.route('/api/posts/:id')
  .get(postController.show)
  .patch(postController.update)
  .delete(postController.destroy)

module.exports = router
