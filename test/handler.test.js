const assert = require("assert");
const { extractData } = require("../src/lib/handler");

describe(" handler", function () {
  it("handler simple path", function () {
    const input =
      "Fecha Vencimiento: 22/01/2021\n" +
      "Moneda: GTQPágina: 1/1\n" +
      "1Bien1.00 Uni700.000700.00IVA: 75.00DOCETAXEL KEMEX 80 MG\n" +
      "2Bien1.00 Uni300.000300.00IVA: 32.14DOCETAXEL KEMEX 20 MG\n" +
      "Powered by TCPDF (www.tcpdf.org)\n" +
      "Sujeto a Pagos Trimestrales\n";

    const expected = extractData(input);
    assert.equal(expected.length, 2);
  });
});
