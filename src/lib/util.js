const config = require('./config');

exports.getFileName = (input) => {
    return input.replace(config.path.base, '');
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
    const delimiter = "<--space-anchor-->";
    let remainder = input.replace(/((\d+))(Bien)/i, "");
    let anotherRemainder = remainder.replace(
        /(\s)Uni((\d)+((,)(\d+))*((\.)\d*)){2}IVA:\s((\d)+((,)(\d+))*((\.)\d*)){1}/i, delimiter
    );

    const cleanValue = anotherRemainder.split()
    console.log(`anotherRemainder: ${anotherRemainder}`)
    return anotherRemainder;

}