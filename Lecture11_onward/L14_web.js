const http = require("http");
const fs = require("fs");

const server1 = http.createServer((req, resp) => {
  fs.readFile("html/web.html", "utf-8", (err, data) => {
    if (err) {
      resp.writeHead(500, { "content-type": "text/plain" })
      resp.write("Internal server error")
      resp.end()
      return
    } else {
      resp.writeHead(200, { "Content-Type": "text/html" })
      resp.write(data)
      resp.end()
    }
  })
})

server1.listen(3000)
