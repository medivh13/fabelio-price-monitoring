const helper = require('../helper/product')
const express = require('express');
const router = express.Router();
const schedule  = require('node-schedule');

router.get('/', helper.getProducts);
router.get('/:id', helper.getProduct);
router.post('/', helper.addProduct);
schedule.scheduleJob('* * * * *', helper.hourlyUpdate);

module.exports = router;