const inputJSON = require('../../input/data.json');
const parsedData = require('../../src/lib/parser');

const expectedOutput = {
  orgName: 'Test Org Acme Inc',
  numMonitors: 6,
  '04/22/2020': 17,
  '04/24/2020': 161
};

describe("JSON Parser", () => {

  test("it should return 0 monitors and blank org name when blank input", async () => {
    const input = {};
    var output = await parsedData(input);
    expect(output).not.toEqual(expectedOutput);
    expect(output).toEqual({ orgName: '' });
  });

  test("it should return 0 num of monitors when no Users given", async () => {
    const input = {
      "id": 1,
      "name": "Test Org Acme Inc"
    };
    var output = await parsedData(input);
    expect(output).not.toEqual(expectedOutput);
    expect(output).toEqual({ orgName: 'Test Org Acme Inc' });
  });

  test("it should parsed Data and retun a parsed Json", async () => {
    const input = inputJSON;
    const output = await parsedData(input[0]);
    expect(output).toEqual(expectedOutput);
  });

});
