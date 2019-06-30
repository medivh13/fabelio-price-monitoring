const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    createdAt: {
        type: Date, 
        default: Date.now 
    },
    vote: {
        type: Number,
        default: 0
    }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;