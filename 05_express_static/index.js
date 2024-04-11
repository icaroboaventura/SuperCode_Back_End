import express from "express";
import url from "url";
import path from "path";
import { readFile } from "./filesystem.js";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const app = express();

app.use((req, res, next) => {
  console.log("new request", req.method, req.url);
  next();
});

app.use(express.static("public"));
app.use(function supportPageNameRoutesStatic(req, res, next) {
  const filePath = __dirname + "/public/pages" + req.url + ".html";

  readFile(filePath)
    .then((dataBuffer) => {
      res.write(dataBuffer);
      res.end();
    })
    .catch(() => next());
});

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/pages/home.html");
// });

app.use((_, res) => {
  res.status(404).send("<h3>404 Not found</h3><h3>");
});

const PORT = 3003;
app.listen(PORT, () => console.log("Server ready at", PORT));
