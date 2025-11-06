var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

/* GET users listing. */
router.post('/',async function(req, res, next) {
     try {
    const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
});

const Product = mongoose.model('Product', productSchema);
    const products = await Product.find();
      res.status(201).send(products);
    } catch (error) {
      res.status(400).send("errrrrr"+error);
    }
  res.send('respond with a resource');
});

module.exports = router;
