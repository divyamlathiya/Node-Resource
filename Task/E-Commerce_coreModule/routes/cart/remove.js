var express = require('express');
var router = express.Router();
var removeProduct = require('../../controller/cart/remove.js');

/* GET home page. */
router.post('/', async function(req, res, next) {

  await removeProduct(req, res);

});

module.exports = router;
