 const http = require("http");
const userForm = require("./userForm");
const userData = require("./userData");

const server1 = http.createServer((req, resp) => {
  if (req.url == "/") {
    userForm(req, resp);
  } else if (req.url == "/submit") {
    userData(req, resp);
  } else {
    resp.end("Invalid route");
  }
});

server1.listen(3200);
