let express = require('express');
let router = express.Router();
let repo = require('../models/postRepository');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: ' ExpressBlog',
        author: 'by Jeremy Uriz',
        dataSource: repo.dataSource,
        postCount: repo.postCount(),
        posts: repo.getPosts()
    });
});

module.exports = router;