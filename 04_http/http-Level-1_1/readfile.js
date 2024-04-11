const fs = require("fs");

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, dataBuffer) => {
      if (err) return reject(err);
      resolve(dataBuffer);
    });
  });
}

// export default { readFile };

module.exports = readFile;
