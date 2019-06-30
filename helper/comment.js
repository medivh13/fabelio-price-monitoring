const Comment = require('../models/comment');

module.exports = {
    getComments : async (req, res, next) => {
        const comments = await Comment.find({ productId : req.params.productId});
        res.send(comments)
    },
    getComment : async (req, res, next) => {
        const comment = await Comment.findById(req.params.id);
        res.send(comment)
    },
    addComment : async (req, res, next) => {
        const { name, body, productId } = req.body
        const comment = new Comment({
            name,
            body,
            productId
        })
        
        try {
            await comment.save();
            res.send(comment);
        } catch (err) {
            res.status(400).send(err);
        }
        
    },
    voteComment: async (req, res, next) => {
        const comment = await Comment.findById(req.params.id);
        comment.vote += req.body.vote;
        try {
            await comment.save();
            console.log(comment)
            res.send(comment);
        } catch (err) {
            res.status(400).send(err);
        }
    }
}