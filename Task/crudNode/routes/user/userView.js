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

  // const existingFiles = getExistingUserFiles(filesDir);

  if (!checkFileExists(fileName, filesDir)) {
    return res.status(409).send("File doesn't exists.");
  }

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(`<pre>${data}</pre>`);
  });
});

module.exports = router;
