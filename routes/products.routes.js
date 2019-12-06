const products = require('../controllers/product.controller');
const express = require('express');
const router = express.Router();
const schedule  = require('node-schedule');

router.get('/', products.findAll);
router.get('/:id', products.findOne);
router.post('/', products.addProduct);
schedule.scheduleJob('* * * * *', products.hourlyUpdate);

module.exports = router;