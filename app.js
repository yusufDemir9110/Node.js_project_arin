const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/about.html"));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/blog.html"));
});

app.listen(port, hostname, () => {
  console.log(`server is running http://${hostname}:${port}`);
});
