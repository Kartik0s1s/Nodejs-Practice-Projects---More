const http = require('http');

const server1= http.createServer((req, resp)=>{
resp.setHeader("Content-Type", "text/html");
resp.write(`
      <html>
      <header>
     <Title> Code With kartik </Title>
      </header>
      <body>
      <h1>Hello world</h1>
      <h2>`+new Date+`</h2>
      </body>
      </html>    
    `);

resp.end();
});


server1.listen(3000);