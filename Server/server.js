// const http= require('http');
// http.createServer().listen(3000);

// const http=require('http');

// http.createServer((req, resp)=>{
//     resp.write("<h1>Hello this is kartik</h1>");
//     resp.end("Hello");
// }).listen(3000);
const nodemon= require("nodemon");
const http = require("http");
const colors= require("colors");

const server1 = http.createServer((req, resp) => {
  resp.write("<h1>This is server 1</h1>");
  resp.end("We are done with processing");
});
server1.listen(4000, () => {
  console.log("Serve is running".red);
});

const server2 = http.createServer((req, resp) => {
  resp.write("<h1>This is server 2</h1>");
  resp.end("We are done with processing");
});
server2.listen(4001, () => {
  console.log("Serve is running".green);
});
