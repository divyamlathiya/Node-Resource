const CryptoJS = require("crypto-js");

// Encryption Function
function encrypt(text, key) {
  var enc1 = CryptoJS.AES.encrypt(text, secKey).toString();
  var enc2 = CryptoJS.DES.encrypt(enc1, secKey).toString();
  var enc3 = CryptoJS.TripleDES.encrypt(enc2, secKey).toString();
  return enc3.toString();
}

// Decryption Function
function decrypt(encryptedText, key) {
  const bytes3 = CryptoJS.TripleDES.decrypt(encryptedText, secKey);
  const enc2 = bytes3.toString(CryptoJS.enc.Utf8);
  const bytes2 = CryptoJS.DES.decrypt(enc2, secKey);
  const enc1 = bytes2.toString(CryptoJS.enc.Utf8);
  const bytes1 = CryptoJS.AES.decrypt(enc1, secKey);
  const originalText = bytes1.toString(CryptoJS.enc.Utf8);

  return originalText;
}

// Example Usage
// const secretKey = "MySecretKey";
// const message = "Hello, this is a secret message!";

password = "Divyam@555";
secKey = "SecKey";

// Encrypt the message
const encryptedMessage = encrypt(password, secKey);
console.log("Encrypted:", encryptedMessage);

// Decrypt the message
const decryptedMessage = decrypt(encryptedMessage, secKey);
console.log("Decrypted:", decryptedMessage);
