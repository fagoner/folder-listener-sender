const {
  splitContent,
  getFileName,
  isValidFileName,
  cleanFileName,
} = require("../src/lib/util");
const config = require("../src/lib/config");

const path = require("path");
it("Have to remove the info", () => {
  const fileName = "test-file.pdf";
  const input = path.join(config.path.base, "test-file.pdf");
  const expectedValue = getFileName(input);

  expect(fileName === expectedValue).toBeTruthy;
});

it("A name should return valid for the regexp ", () => {
  const validInputs = [
    "fel2.pdf",
    "FEL2.pdf",
    "FEL2.pdf",
    "fel 123.pdf",
    "fel        123.pdf",
    "fel \t123.pdf",
    "fel \t123 .pdf",
    "fel \t123 .PDF",
    "   fel123 .PDF",
    "   fel123 . PDF",
    "   fel 123 . PDF  ",
  ];

  validInputs.forEach((input) => expect(isValidFileName(input)).toBe(true));
});

it("A name should return false for the regexp ", () => {
  const validInputs = ["el2.pdf", "EL2.pdf", ".pdf", "FEL2.", "FEL2 . pd"];

  validInputs.forEach((input) => expect(isValidFileName(input)).toBe(false));
});

it("Should clean the name", () => {
  const inputValues = [
    {
      raw: "fel 12.pdf",
      expected: "fel12.pdf",
    },
    {
      raw: "   fel 123 . pdf",
      expected: "fel123.pdf",
    },
    {
      raw: " fel     1  2  3.p df     ",
      expected: "fel123.pdf",
    },
  ];

  inputValues.forEach((input) => {
    expected = input.expected;
    actual = cleanFileName(input.raw);
    expect(actual).toBe(expected);
  });
});

//Split values

it("Spliting values from Mynube", () => {

  const inputValues = [
    {
      raw: "1Bien1.00 Uni700.000700.00IVA: 75.00DOCETAXEL KEMEX 80 MG",
      expected: {
        cantidad: "1.00",
        producto: "DOCETAXEL KEMEX 80 MG",
      },
    },
    {
      raw: "2Bien1.00 Uni300.000300.00IVA: 32.14DOCETAXEL KEMEX 20 MG",
      expected: {
        cantidad: "1.00",
        producto: "DOCETAXEL KEMEX 20 MG",
      },
    },
    {
      raw: "1Bien206.00 Uni178.50036,771.00IVA: 3,939.75OXALIPLATINO 100 MG",
      expected: {
        cantidad: "206.00",
        producto: "OXALIPLATINO 100 MG",
      },
    },
  ];

  inputValues.forEach((input) => {
    const actualValue = splitContent(input.raw);
    expect(actualValue).toStrictEqual(input.expected);
  });

});
