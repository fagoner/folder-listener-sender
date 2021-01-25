const config = require("./config");

exports.getFileName = (input) => {
  return input.replace(config.path.base, "");
};

exports.isValidFileName = (input) => {
  const result = config.filter.fileNameRegexp.test(input.toLowerCase());
  return result;
};

exports.cleanFileName = (input) => {
  const cleanValue = input.toLowerCase().replace(/\s*/g, "").trim();
  return cleanValue;
};

exports.splitContent = (input) => {
  
  let remainder = input.replace(config.filter.sectionBien, "");
  
  let anotherRemainder = remainder.replace(
    config.filter.sectionUniPreciosIva,
    config.filter.delimiter
  );

  const separatedValues = anotherRemainder.split(config.filter.delimiter);
  
  const result = {
    cantidad: separatedValues[0],
    producto: separatedValues[1],
  };
  
  return result;
};
