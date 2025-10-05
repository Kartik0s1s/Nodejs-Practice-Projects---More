const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

const server1 = http.createServer((req, resp) => {
  if (req.url == "/") {
    fs.readFile("html/form.html", "utf-8", (error, data) => {
      if (error) {
        resp.writeHead(500, { "Content-Type": "text/plain" });
        resp.write("Internal Server Error");
        resp.end();
        return;
      } else {
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write(data);
        resp.end();
      }
    });
  } else if (req.url == "/submit") {
    resp.writeHead(200, { "Content-Type": "text/html" });

    let databody = [];
    req.on("data", (chunk) => {
      databody.push(chunk);
    });

    req.on("end", () => {
      let rawdata = Buffer.concat(databody).toString();
      let readable = querystring.parse(rawdata);

      // creted file and loaded data into that
      let Stringdata =
        "My name is " + readable.Name + "My mail id is " + readable.email;
        // create file using async
      fs.writeFileSync("text/" + readable.Name + ".txt", Stringdata);
      console.log("File Created");



      // create file using sync
      fs.writeFile("text/" + readable.Name + ".txt", Stringdata,"utf-8",(err)=>{
        if(err){
              resp.end("Internal server error")
              return false
        }else{
             console.log("File Created");
        }
      })
       

      console.log(Stringdata);
      resp.writeHead(200, { "Contetent-Type": "text/html" });
      resp.write("<h1>DATA SUBMITTED</h1>");
      resp.write(`<p>Name: ${readable.Name}</p>`);
      resp.write(`<p>E-mail: ${readable.email}</p>`);

      resp.end();
    });
  } else {
    resp.writeHead(404, { "Content-Type": "text/plain" });
    resp.write("Page Not Found");
    resp.end();
  }
});

server1.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
