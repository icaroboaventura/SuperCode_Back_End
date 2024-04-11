const fs = require("fs");

const newData = [];

fs.readFile("./data.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  const data = JSON.parse(jsonString);
  data.map((item) => {
    newData.push(`${item.id} - ${item.title} \n ${item.description}`);
  });
  const dataArray = newData.join("\n");
  fs.writeFile("./data.txt", dataArray, (err) => {
    if (err) {
      console.error(err);
    }
  });
});
