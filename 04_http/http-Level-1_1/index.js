const readFile = require("./readfile");
const http = require("http");

const server = http.createServer((request, response) => {
  console.log("new request:", request.method, request.url);

  const filePath = request.url === "/" || request.url === "/home" ? "index.html" : `${request.url.slice(1)}.html`;

  if (request.url !== "/favicon.ico") {
    readFile(`./public/pages/${filePath}`)
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end('<a href="/home">Home</a>');
      });
  }
});

const PORT = 270;
server.listen(PORT, () => console.log("server ready at port", PORT));
