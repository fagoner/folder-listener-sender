const fs = require('fs');
const pdf = require('pdf-parse');


// default render callback
function render_page(pageData) {
    //check documents https://mozilla.github.io/pdf.js/
    let render_options = {
        //replaces all occurrences of whitespace with standard spaces (0x20). The default value is `false`.
        normalizeWhitespace: false,
        //do not attempt to combine same line TextItem's. The default value is `false`.
        disableCombineTextItems: false
    }

    return pageData.getTextContent(render_options)
        .then(function(textContent) {

            let lastY, text = '';
            for (let item of textContent.items) {
                // console.log(`${item.str}---`)
                console.log(item)
                if (lastY == item.transform[5] || !lastY) {
                    text += item.str;
                } else {
                    text += '\n' + item.str;
                }
                lastY = item.transform[5];
            }
            return text;
        });
}

let options = {
    pagerender: render_page
}

let dataBuffer = fs.readFileSync('resources/dteIgss.pdf');

// pdf(dataBuffer, options).then(function(data) {
//     //use new format
//     // console.log(data.text);
// });

pdf(dataBuffer).then(function(data) {


    // PDF text
    console.log(data.text);
    const lines = data.text.split("\n");

    lines.forEach(input => justBienes(input));

});


function justBienes(input) {
    const regexp = /(\d*)Bien/i;
    if (regexp.test(input)) {
        console.log(`Finded: ${input}`);
    }
}

function splitCondition() {

}