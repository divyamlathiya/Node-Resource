var express = require("express");
const fs = require("fs");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  const { email, password } = req.body;

  const data = fs.readFileSync("new_file.txt", "utf-8");

  console.log(data, "data");

  res.end("finish");
});

module.exports = router;
