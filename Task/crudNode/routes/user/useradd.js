var express = require("express");
var fs = require("fs");
const path = require("path");
var router = express.Router();

const {
  generateUniqueId,
  getExistingUserFiles,
  checkFileExists,
} = require("../../utilities/userIDHelper");

const filesDir = path.join(__dirname, "..", "..", "files");

/* GET home page. */
router.post("/", function (req, res, next) {
  const { name, email, password, address, phone } = req.body;

  if (
    name.trim() != "" &&
    email.trim() != "" &&
    password != "" &&
    phone != ""
  ) {
    if (!address) {
      return res.status(400).json({ error: "Address is missing" });
    }

    const { street, city, state, country } = address;

    if (!street || !city || !state || !country) {
      return res.status(400).json({ error: "Incomplete address data" });
    }

    const existingFiles = getExistingUserFiles(filesDir);
    const existingIds = new Set(
      existingFiles
        .map((file) => parseInt(file.match(/\d{4}/)?.[1]))
        .filter(Boolean)
    );

    const id = generateUniqueId(existingIds);

    const userData = {
      id: id,
      name: name,
      email: email,
      password: password,
      address: {
        street: street,
        city: city,
        state: state,
        country: country,
      },
      phone: phone,
    };

    const folderPath = path.resolve(__dirname, "..", "..", "files");

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    } else {
      const currentDate = new Date().toISOString().split("T")[0];
      const safeName = name.replace(/[^a-z0-9]/gi).toLowerCase();
      const fileName = `${safeName}${currentDate}.txt`;

      const filePath = path.join(folderPath, fileName);

      if (checkFileExists(fileName, filesDir)) {
        return res.status(409).json({ error: "File already exists" });
      }

      fs.writeFile(filePath, JSON.stringify(userData, null, 2), (err, data) => {
        if (err) {
          console.log("Error:", err);
        } else {
          console.log("File created successfully!");
          res.json({ data: "File created successfully!" });
        }
      });
    }
  } else {
    console.log("Please fill all fields");
  }
});

module.exports = router;
