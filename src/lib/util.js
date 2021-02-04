const config = require("./config");
const Row = require("./row");

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

exports.getInvoiceNumber = (input) => {
    const cleanValue = input
        .toLowerCase()
        .replace(/(fel)/g, "")
        .replace(/(fel|factura)/g, "")
        .replace(/(\.)(pdf)/g, "")
        .trim();
    return cleanValue;
};

exports.splitContent = (input) => {
    let remainder = input.replace(
        config.filter.sectionBien,
        "");

    let anotherRemainder = remainder.replace(
        config.filter.sectionUniPreciosIva,
        config.filter.delimiter);

    const separatedValues = anotherRemainder.split(config.filter.delimiter);

    const result = new Row(
        separatedValues[0],
        separatedValues[1],
    );

    return result;
};

exports.splitLines = (content) => {
    return content.split("\n");
}

exports.collectSectionBien = (input, prefix) => {
    return input.filter(i => config.filter.sectionBien.test(i))
}