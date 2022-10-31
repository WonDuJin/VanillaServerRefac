const http = require("http");
const fs = require("fs");
const path = require("path");

const sever = http.createServer((req, res) => {
  const test = fs.readFileSync("./index.html", (err) => {
    if (err) throw err;
  });
  const css = fs.readFileSync("./style.css", (err) => {
    if (err) throw err;
  });
  const scrpit = fs.readFileSync("./event.js", (err) => {
    if (err) throw err;
  });

  if (req.method === "GET") {
    if (req.url === "/") {
      console.log("메롱");

      res.writeHead(200, { "content-Type": "text/html" });
      res.write(test);
      res.end();
    } else if (req.url === "/style.css") {
      console.log("무슨모양?");

      res.writeHead(200, { "content-Type": "text/css" });
      res.write(css);
      res.end();
    } else if (req.url == "/event.js") {
      console.log("script파일 왔니?");

      res.writeHead(200, { "content-Type": "text/javascript" });
      res.write(scrpit);
      res.end();
    }
    console.log(req.url);
  }
});

sever.listen(5678, (err) => {
  console.log("server listening on");
  if (err) throw err;
});
