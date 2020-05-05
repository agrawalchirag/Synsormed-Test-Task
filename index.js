const inputJSON = require("./input/data.json");
const parsedData = require("./src/lib/parser");
const csvFile = require("./src/lib/writer");

(async () => {
  try {
    console.log("***********Started******************");
    // iterate on input data for multiple orgs
    for (let i = 0; i < inputJSON.length; i++) {
      // parse data for a single org
      const parsedJSON = await parsedData(inputJSON[i]);
      // pass the parsedJSON to the write for writing it in CSV
      await csvFile(parsedJSON);
      console.log("*****Desired Output*******", parsedJSON);
      console.log("Sucess: Output Saved in 'output/index.csv' file");
    }
    console.log("************Ended*******************");
  } catch (error) {
    // prints the error if an error occur
    console.log(error);
  }
})();
