var express = require('express');
var router = express.Router();
var addProduct = require('../../controller/cart/add.js');

/* GET home page. */
router.post('/', async function (req, res) {

  await addProduct(req, res);
});

module.exports = router;
