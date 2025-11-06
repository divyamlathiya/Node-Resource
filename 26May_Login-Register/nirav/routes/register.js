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
  fs.writeFile("new_file.txt", JSON.stringify(obj), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("File created successfully!");
    }
  });
  res.json({
    error: {
      data: "",
      code: "400",
      message: "Invalid...",
    },
  });
});

module.exports = router;
