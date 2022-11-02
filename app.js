const http = require("http");
const fs = require("fs");
const path = require("path");

const sever = http.createServer((req, res) => {
  if (req.method === "GET") {
    let getSting = req.url;

    switch (getSting) {
      case "/":
        console.log("HTML");
        const test = fs.readFileSync("./index.html", (err) => {
          if (err) throw err;
        });
        res.writeHead(200, { "content-Type": "text/html" });
        res.write(test);
        res.end();

        break;
      case "/style.css":
        console.log("CSS");
        const css = fs.readFileSync("./style.css", (err) => {
          if (err) throw err;
        });
        res.writeHead(200, { "content-Type": "text/css" });
        res.write(css);
        res.end();

        break;

      case "/event.js":
        console.log("Javascript");
        const scrpit = fs.readFileSync("./event.js", (err) => {
          if (err) throw err;
        });
        res.writeHead(200, { "content-Type": "text/javascript" });
        res.write(scrpit);
        res.end();

        break;
    }
  }
});

sever.listen(5678, (err) => {
  console.log("server listening on");
  if (err) throw err;
});
