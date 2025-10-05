const http = require('http');

const server1= http.createServer((req, resp)=>{
    if( req.url =='/'){
        resp.write("<h1>This is Home page<h1>");
    } else if (req.url == '/login'){
        resp.write("<h1>This is login page</h1>");
    }else {
        resp.write("<h1>This is other page<h1> ");
    }
    resp.end();
});
server1.listen(3000);