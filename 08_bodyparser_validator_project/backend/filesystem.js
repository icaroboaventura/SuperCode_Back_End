import fs from "fs";
import url from "url";
import path from "path";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const readJsonFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) return reject(err);
      const jsonStr = data.toString();
      const jsObj = JSON.parse(jsonStr);
      resolve(jsObj);
    });
  });
};

export const readMessages = () => {
  return readJsonFile(__dirname + "/data/messages.json");
};

export function writeJsonFile(path, jsObj) {
  return new Promise((resolve, reject) => {
    const jsonStr = JSON.stringify(jsObj, null, 2);
    fs.writeFile(path, jsonStr, (err) => {
      if (err) return reject(err);
      resolve(jsObj);
    });
  });
}

export function writeMessages(messagesArray) {
  return writeJsonFile(__dirname + "/data/messages.json", messagesArray);
}
