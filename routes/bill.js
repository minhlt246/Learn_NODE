var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/bill', function(req, res, next) {
    res.render('bill', { title: 'Express' });
});

module.exports = router;
