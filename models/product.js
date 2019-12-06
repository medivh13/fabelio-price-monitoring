const mongoose = require ("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    url : {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrls: Array,
    prices: [{
        price: {
            type: Number,
            required: true
        },
        at : {
            type: Date, 
            default: Date.now
        }
    }],
},{
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;