var express = require("express");
var router = express.Router();
var crypto = require("crypto-js");

/* GET home page. */
router.get("/", function (req, res, next) {
  var password = "Gabani@123";
  var secret = "123456789";

  // Encrypt
  var ciphertextAES = crypto.AES.encrypt(password, secret).toString();
  var ciphertextDES = crypto.DES.encrypt(password, secret).toString();
  var ciphertextTripleDES = crypto.TripleDES.encrypt(
    password,
    secret
  ).toString();

  // Decrypt
  var bytes1 = crypto.AES.decrypt(ciphertextAES, secret);
  var bytes2 = crypto.DES.decrypt(ciphertextDES, secret);
  var bytes3 = crypto.TripleDES.decrypt(ciphertextTripleDES, secret);

  var originalText1 = bytes1.toString(crypto.enc.Utf8);
  var originalText2 = bytes2.toString(crypto.enc.Utf8);
  var originalText3 = bytes3.toString(crypto.enc.Utf8);

  res.json({
    ciphertextAES: ciphertextAES,
    ciphertextDES: ciphertextDES,
    ciphertextTripleDES: ciphertextTripleDES,
    dec: {
      originalText1: originalText1,
      originalText2: originalText2,
      originalText3: originalText3,
    },
  });
});

module.exports = router;
