let express = require('express'),
router = express.Router(),
repo = require("../models/postRepository");

router.get('/:permalink', (req, res, next) => {
    let post = repo.getPostByPermalink(req.params.permalink);
    res.render('editPost'), {
        title: post.title,
        permalink: post.permalink,
        author: post.author,
        content: post.postContent,
        id: repo.getPostIndex(req.params.permalink)
        }
        return;
    });

        // let udpatePost = {};
        // udpatePost.title = req.body.title;
        // udpatePost.permalink = req.body.permalink;
        // udpatePost.postContent = req.body.postContent;
        // udpatePost.author = req.body.author;
        // udpatePost.id = req.body.id;

        // repo.updatePost(updatePost);

        // res.redirect('/');

module.exports = router;