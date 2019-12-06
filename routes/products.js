const products = require('../controllers/product')
const express = require('express');
const router = express.Router();
const schedule  = require('node-schedule');

router.get('/', products.getProducts);
router.get('/:id', products.getProduct);
router.post('/', products.addProduct);
schedule.scheduleJob('* * * * *', products.hourlyUpdate);

module.exports = router;