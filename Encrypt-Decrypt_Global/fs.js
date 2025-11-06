const fs = require("fs");

const file = {
  name: "divyam",
  Styd: "clg",
};

const convert = JSON.stringify(file);

const data = fs.writeFileSync("new.txt", convert);

const dataRead = fs.readFileSync("new.txt");

console.log(dataRead.toString());
