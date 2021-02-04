const fs = require("fs");
const pdfReader = require("pdf-parse");

exports.openData = async function (file) {
  let dataBuffer = fs.readFileSync(file);
  const options = {};
  return pdfReader(dataBuffer, options);
};
