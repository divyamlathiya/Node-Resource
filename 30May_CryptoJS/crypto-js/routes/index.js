var express = require("express");
var router = express.Router();
var crypto = require("crypto-js");
require("dotenv").config();

/* GET home page. */
router.get("/", function (req, res, next) {
  var password = process.env.PASSWORD;
  var secret = process.env.SECRETKEY;

  // Encrypt
  var ciphertextAES = crypto.DES.encrypt(password, secret).toString();

  // Decrypt
  var bytes = crypto.DES.decrypt(ciphertextAES, secret);

  var originalText = bytes.toString(crypto.enc.Utf8);

  res.json({
    ciphertextAES,
    originalText,
  });
});

module.exports = router;
