var express = require("express");
const fs = require("fs");
var router = express.Router();

/* GET users listing. */
router.post("/", async function (req, res, next) {
  const { email, password } = req.body;

  await fs.readFileSync("data_file.txt", "utf-8", (err, data) => {
    console.log(data, err);
  });

  res.end("finish");

  // const user = JSON.parse(data);
});

module.exports = router;
