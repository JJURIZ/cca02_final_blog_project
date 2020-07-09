let express = require('express');
let router = express.Router();
let repo = require("../models/postRepository");

router.get('/:permalink', (req, res, next) => {
    let post = repo.getPostByPermalink(req.params.permalink);
    res.render('post', { title: post.title, post: post});

});


module.exports = router;