const http = require("http");

const server1 = http.createServer((req, resp) => {
  resp.writeHead(200,{"content-type":"text/html"})  
  console.log(req.url)
  if(req.url=="/" ){ 
  resp.write(`
 <form action ="/submit" method="Post">
 <input type="text" Placeholder="Enter name" name="Name"/>
 <input type="text" Placeholder="Enter e-mail" name="email"/>
 <button>Submit</button>
 </form>

    `);
    }
    else if (req.url=="/submit"){
        resp.write(`<h1>DATA SUBMITTED<h1>`)
    }
  resp.end();
});

server1.listen(3000);
