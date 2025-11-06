// var express = require("express");
// var router = express.Router();
// var crypto = require("crypto-js");
// require("dotenv").config();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   var password = process.env.PASSWORD;
//   var secret = process.env.SECRETKEY;

//   // Encrypt
//   var cliphertext = crypto.DES.encrypt(password, secret).toString();

//   // Decrypt
//   var bytes = crypto.DES.decrypt(cliphertext, secret);

//   var originalText = bytes.toString(crypto.enc.Utf8);

//   res.json({
//     cliphertext,
//     originalText,
//   });
// });

// module.exports = router;

var crypto = require("crypto-js");
require("dotenv").config();

var encPass = async (password) => {
  var encPass = await crypto.AES.encrypt(password, process.env.SECRETKEY);
  return encPass.toString();
};

var decPass = async (password) => {
  var decPass = await crypto.AES.decrypt(password, process.env.SECRETKEY);
  return decPass.toString(crypto.enc.Utf8);
};

module.exports = { encPass, decPass };
