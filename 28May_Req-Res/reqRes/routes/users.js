var express = require("express");
var router = express.Router();
var response = require("../common/response");

/* GET users listing. */
router.post("/", function (req, res, next) {
  const data = true;
  if (data === true) {
    response.success(response, { name: "Divyam" }, "Success");
  } else {
    response.error(response, "Something went wrong");
  }
});

module.exports = router;
