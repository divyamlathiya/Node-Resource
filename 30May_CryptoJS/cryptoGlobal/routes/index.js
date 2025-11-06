var express = require("express");
var router = express.Router();
var crypto = require("../global/crypto");

/* GET home page. */
router.get("/:password", async function (req, res, next) {
  var password = req.params.password;
  var encPass = await crypto.encPass(password);

  res.render("index", { title: encodeURIComponent(encPass) });
});

module.exports = router;
