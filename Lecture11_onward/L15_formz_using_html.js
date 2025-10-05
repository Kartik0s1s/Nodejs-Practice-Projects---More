const http = require("http");
const fs = require("fs");

const server1 = http.createServer((req, resp) => {
  if (req.url == "/") {
    fs.readFile("html/form.html", "utf-8", (error, data) => {
      if (error) {
        resp.writeHead(500, { "Content-Type": "text/plain" });
        resp.write("internal server error");
        return;

      } else 
      resp.writeHead(200, { "Content-Type": "text/html" });
      resp.write(data);
      resp.end();
 
    });
  }

      if (req.url == "/submit") {
        resp.write(`<h1>DATA SUBMITTED<h1>`);
      }
      resp.end();
});

server1.listen(3000);
