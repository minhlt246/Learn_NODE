var express = require('express');
var router = express.Router();
var mongoose = require('../models/categrory');

/* GET home page. */
router.get('/categrory', async function (req, res, next) {
    res.render('categrory', { title: 'Express' });
    let data = await Category.find();
    res.json(data);
});

module.exports = router;
