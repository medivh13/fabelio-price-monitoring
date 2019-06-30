const helper = require('../helper/comment')
const express = require('express');
const router = express.Router();

router.get('/single/:id', helper.getComment);
router.get('/:productId', helper.getComments);
router.post('/', helper.addComment);
router.put('/:id', helper.voteComment);

module.exports = router;