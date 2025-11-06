var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", async function (req, res, next) {
  const { setEmail, pass } = req.body;

  const userEmail = process.env.EMAIl || "";
  const password = process.env.PASS || "";

  if (!userEmail || !password) {
    res.end("Not ");
  }

  if (setEmail == userEmail && pass == password) {
    res.send("Success login");
  } else {
    res.send("Failed login");
  }
});

module.exports = router;
