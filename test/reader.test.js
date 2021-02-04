const assert = require("assert");

const { openData } = require("../src/lib/reader");

describe("reader", function () {
  it("readSimpleValue", async function () {
    try {
      const file = "./resources/dte.pdf";
      const fileContent = await openData(file);
      const isGreater  = fileContent.lenght > 0;
      assert.equals(isGreater, true);

    } catch (error) {}
  });
});
