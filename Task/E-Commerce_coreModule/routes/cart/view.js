var express = require('express');
var router = express.Router();
var viewCart = require('../../controller/cart/view.js');

/* GET home page. */
router.get('/', async function(req, res, next) {

  await viewCart(req, res);

});

module.exports = router;
