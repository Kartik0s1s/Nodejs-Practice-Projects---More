 
const http= require("http");

const arg= process.argv;
const port = arg[2]
const server1= http.createServer((req, resp)=>{
 
resp.write("Testing Command Line input");
resp.end();
});

server1.listen(port);
 