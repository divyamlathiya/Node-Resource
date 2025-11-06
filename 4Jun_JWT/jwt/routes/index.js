var express = require("express");
var jwt = require("jsonwebtoken");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const token = jwt.sign({ userName: "Divyam" }, process.env.JWT_SECRET);

  console.log(token);
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log("Token is not valid");
    } else {
      res.render("index", { title: "Express", token: token, decoded: decoded });
      console.log(token, decoded);
    }
  });
});

module.exports = router;
