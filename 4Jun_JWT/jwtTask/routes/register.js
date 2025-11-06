var express = require("express");
const fs = require("fs");
require("dotenv").config();
const crypto = require("crypto-js");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  var enc = crypto.AES.encrypt(
    process.env.password,
    process.env.SECKEY
  ).toString();

  const userRegister = {
    name: "Divyam",
    email: "divyam@123",
    password: enc,
  };

  fs.writeFile("register.txt", JSON.stringify(userRegister), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File created successfully!");
      res.render("index", { title: "Express" });
    }
  });
});

module.exports = router;
