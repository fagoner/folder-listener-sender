const { degrees, PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');

async function modifyPdf() {

  const pdfDoc = await PDFDocument.load(fs.readFileSync('./resources/dteIgss_copy.pdf'))

  const pages = pdfDoc.getPages()
  const firstPage = pages[0]
  const { width, height } = firstPage.getSize()
  firstPage.drawText('123456', {
    x: width * (94.891/100),
    y: height - 20,
    size: 8,
    fontSize:8,
    color: rgb(0, 0, 0.255)
  })

  fs.writeFileSync('./resources/dteIgss_copy.pdf', await pdfDoc.save());
}
modifyPdf();