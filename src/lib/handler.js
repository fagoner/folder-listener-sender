const {
    splitLines,
    collectSectionBien,
    splitContent
} = require('./util');

exports.extractData = function (input) {

    const lines = splitLines(input);
    const validRows = collectSectionBien(lines);
    let rows = [];
    validRows.forEach(element => {
        rows.push(
            splitContent(element)
        )
    });
    return rows;
    
}