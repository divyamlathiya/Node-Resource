var express = require("express");
var fs = require("fs");
var crypto = require("crypto-js");
require("dotenv").config();
var jwt = require("jsonwebtoken");
var router = express.Router();

/* GET home page. */
router.post("/", function (req, res, next) {
  var { userName, Password } = req.body;
  
  fs.readFile("register.txt", "utf-8", (err, data) => {
    console.log(data, err);
    const user = JSON.parse(data);
    const encPass = user.password;

    var dec = crypto.AES.decrypt(encPass, process.env.SECKEY);
    var originalText = dec.toString(crypto.enc.Utf8);

    console.log(originalText);

    var email = user.email;
    var token = jwt.sign({ email }, process.env.SECKEY);
    jwt.verify(token, process.env.SECKEY, (err, decode) => {
      if (err) {
        console.log("Token is not valid!");
      } else {
        console.log(token, decode);
      }
    });
  });

  res.render("index", { title: "Express" });
});

module.exports = router;
