const crypto = require("crypto-js");
require("dotenv").config();

function encrypt(text, key) {
  var enc1 = crypto.AES.encrypt(text, secKey).toString();
  var enc2 = crypto.DES.encrypt(enc1, secKey).toString();
  var enc3 = crypto.TripleDES.encrypt(enc2, secKey).toString();
  return enc3.toString();
}

function decrypt(encText, key) {
  const bytes3 = crypto.TripleDES.decrypt(encText, secKey);
  var enc3 = bytes3.toString(crypto.enc.Utf8);
  const bytes2 = crypto.DES.decrypt(enc3, secKey);
  var enc2 = bytes2.toString(crypto.enc.Utf8);
  const bytes1 = crypto.AES.decrypt(enc2, secKey);
  var enc1 = bytes1.toString(crypto.enc.Utf8);
  return enc1;
}

module.exports = { encrypt, decrypt };

password = process.env.PASSWORD;
secKey = process.env.SECKEY;

const encMessage = encrypt(password, secKey);
console.log("encyprt:", encMessage);

const decMessage = decrypt(encMessage, secKey);
console.log("decrypt:", decMessage);
