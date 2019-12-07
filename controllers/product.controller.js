const Product = require('../models/product');
const cheerio = require('cheerio');
const axios = require('axios')

const helper= {
    findAll : async (req, res, next) => {
        // const products = await Product.find();
        // res.send(products);
        await Product.find()
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Products."
            });
        });
    },
    findOne : async (req, res, next) => {
        
        await Product.findById(req.params.id)
        .then(product => {
            if(!product) {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.id
                });            
            }
            res.send(product);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.id
                });                
            }
            return res.status(500).send({
                message: "Error retrieving Product with id " + req.params.id
            });
        });
    },

    fetchData : async function(siteUrl){
        const result = await axios.get(siteUrl);
        return cheerio.load(result.data);
      },
    addProduct : async (req, res, next) => {
        const { url } = req.body;
            const $ = await helper.fetchData(url);
            let name = $('.page-title').text();
    
            // get product Id
            let finalPriceHtml = $('.price-final_price');
            let productId = $(finalPriceHtml).data('product-id');
    
            // get product price
            let price = $(`#product-price-${productId}`).data('price-amount');
            
            // get product description
            let description = $('.product-info__description').html()

            if(!name || !price || !description){
                return res.status(400).send({ message: 'Wrong Url'});
            }

            // get product image urls
            const imageScript = $('body > script').map((i, x) => x.children[0]).filter((i, x) => x && x.data.match(/magnifierOpts/)).get(0);
            const imageData = imageScript.data;
            const parsed = JSON.parse(imageData);
            const images = parsed['[data-gallery-role=gallery-placeholder]']['mage/gallery/gallery'].data;
            const imgUrls = images.map(item => item.img);

            const product = new Product({
                url,
                name : name.trim(), 
                description: description.trim(),
                imgUrls,
                prices :  [{
                    price
                }],
                createAtMinute : new Date().getMinutes()
            });
            
            try {
                await product.save();
                res.send(product);
            } catch (err) {
                
                res.status(400).send(err);
            }
        
    },
    hourlyUpdate: async (req, res, next) =>{
        let products = await Product.find();
        const now = new Date();
        const nowMins = now.getMinutes();
        for(let product of products){
            let latestPriceTime = product.prices[product.prices.length -1].at;
            let latestPriceTimeMins = latestPriceTime.getMinutes();
            if( nowMins === latestPriceTimeMins ){ // check if the latest price recorded 1 hour from now
                let $ = await helper.fetchData(product.url);
                let finalPriceHtml = $('.price-final_price');
                let productId = $(finalPriceHtml).data('product-id');
                let price = $(`#product-price-${productId}`).data('price-amount');
                let pro = await Product.findById(product._id);
                pro.prices.push({
                    price,
                    at: new Date()
                })
                try {
                    await pro.save();
                    console.log(`Updated - ${product._id}`);
                  
                } catch(err){
                    console.log(err);
                   
                }
            } else {
                console.log(`No Update - ${product._id}`)
            }
            
        }
    }
}

module.exports = helper;