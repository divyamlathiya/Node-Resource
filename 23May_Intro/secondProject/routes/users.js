var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", async function (req, res, next) {
  var { name, pass } = req.body;
  const username = "username@gmail.com";
  const password = "123";
  if (name == username) {
    res.send("Succes Login");
  } else {
    res.send("Faild Login");
  }
});

module.exports = router;
