var express = require("express");
var router = express.Router();
const fs = require("fs");
const crypto = require("crypto-js");

router.post("/", function (req, res, next) {
  var { name, userName, email, password, cPassword } = req.body;
  
  if (name.trim() != "" && userName.trim() != "" && email.trim() != "" && password != "" &&  cPassword != "") {
    if (password == cPassword) {

      const encPassword = crypto.AES.encrypt(password, process.env.ENCSECRET).toString();
      const fileName = userName + ".txt";
      const jsonData = {
        name: name,
        userName: userName,
        email: email,
        password: encPassword,
      };  

      fs.writeFile(fileName, JSON.stringify(jsonData), (err, data) => {
        if (err) {
          res.end("Error :", err);
        } else {
          res.send("Your Data saved succes...");
        }
      });

    } else {
      res.end("Password And Confirm Password Dose Note Match...");
    }
  } else {
    res.end("Please Fill All value...");
  }
});

module.exports = router;
