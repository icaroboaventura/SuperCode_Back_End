const fs = require("fs");

const content = "Hallo Welt";
const content2 = "Ich bin ein Webdeveloper";
const content3 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, laudantium. Amet harum nostrum enim quisquam inventore cupiditate tenetur numquam laborum?";
const content4 = "";

fs.writeFile("./blog1.txt", content, (err) => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

fs.writeFile("./blog1.txt", content2, (err) => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

fs.writeFile("./blog1.txt", content2, (err) => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

fs.writeFile("./blog2.txt", content3, (err) => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

const folderName = "./assets";
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}

fs.writeFile("./assets/delete.txt", content4, (err) => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

fs.writeFile("./Hello.txt", content3, (err) => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

fs.rename("./HelloWorld", "./HelloWorld.txt", (err) => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});
