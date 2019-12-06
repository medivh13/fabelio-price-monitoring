const comments = require('../controllers/comment')
const express = require('express');
const router = express.Router();

router.get('/single/:id', comments.getComment);
router.get('/:productId', comments.getComments);
router.post('/', comments.addComment);
router.put('/:id', comments.voteComment);

module.exports = router;