var express = require("express");
const fs = require("fs");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  const { name, email, password, cPassword, adress } = req.body;

  const obj = {
    name: name,
    email: email,
    password: password,
    cPassword: cPassword,
    adress: adress,
  };

  // All
  if (!name || !email || !password || !cPassword || !adress) {
    res.send("Please the field");
  }

  // Password
  // if (password == password.length >= 6) {
  //   res.send("ok");
  // } else {
  //   res.send("Password more than 6 character");
  // }

  // if (cPassword == password) {
  //   res.send("Password match");
  // } else {
  //   res.send("cPassword should match with password");
  // }
  // res.end();

  fs.writeFile("data_file.txt", JSON.stringify(obj), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File created successfully");
    }
  });

  res.end("finish");

  //   res.json({
  //     err: {
  //       data: "",
  //       code: "400",
  //       message: "Invalid...",
  //     },
  //   });
});

module.exports = router;
