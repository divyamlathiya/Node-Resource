var express = require("express");
var router = express.Router();
var crypto = require("../global/crypto");

/* GET users listing. */
router.get("/:encPass", async function (req, res, next) {
  var encPass = req.params.encPass;
  console.log(encPass);

  var decPass = await crypto.decPass(encPass);
  console.log(decPass);
  res.render("index", { title: decPass });
});

module.exports = router;
