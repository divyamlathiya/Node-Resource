var express = require("express");
var router = express.Router();
var { success, error } = require("../common/res");

/* GET users listing. */
router.post("/", function (req, res, next) {
  const data = true;
  if (data === true) {
    success(res, { hello: "hello" }, "Success");
  } else {
    error(res, "Something went wrong");
  }
});

module.exports = router;
