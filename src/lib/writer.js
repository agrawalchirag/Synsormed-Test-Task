const fs = require('fs');
const csvWriter = require('csv-write-stream');

// read existing csv file if headers are already present
const readCSVFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('output/index.csv', (err, data) => {
      err ? reject(err) : resolve(data.toString());
    })
  })
}

// write the parsed json in the CSV file
const writeCSVfile = async (output, headers) => {
  const writer = csvWriter({ sendHeaders: headers });
  writer.pipe(fs.createWriteStream('output/index.csv', { flags: 'a' }));
  writer.write(output);
  writer.end()
}

// perform operations in csv file read and write
const csvFile = async (output) => {
  const data = await readCSVFile();
  var headers = data.length ? false : true;
  await writeCSVfile(output, headers);
}

module.exports = csvFile;
