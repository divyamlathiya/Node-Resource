var express = require("express");
const fs = require("fs");
const path = require("path");
var router = express.Router();

const { checkFileExists } = require("../../utilities/userIDHelper");

const filesDir = path.join(__dirname, "..", "..", "files");

/* GET users listing. */
router.get("/", function (req, res, next) {
  const fileName = "virat2025-06-10.txt";
  const filePath = path.join(__dirname, "..", "..", "files", fileName);

  if (!checkFileExists(fileName, filesDir)) {
    return res.status(409).send("File doesn't exists.");
  }

  fs.unlink(filePath, (err) => {
    if (err) {
      console.log("Error:", err);
    }
    res.send(`<pre>${fileName} Deleted successfully!</pre>`);
  });
});

module.exports = router;
