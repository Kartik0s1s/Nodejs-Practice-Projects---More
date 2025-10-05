const http = require('http');

const userData= [
    {
        userName:"Kartik",
        age:22,
        Emailid:"Kartik@test.com"
    },

     {
        userName:"Ram",
        age:22,
        Emailid:"Ram@test.com"
    },

     {
        userName:"Shyam",
        age:22,
        Emailid:"Shyam@test.com"
    }

]


const server1= http.createServer((req, resp)=>{
resp.setHeader("Content-Type","application/json")
resp.write(JSON.stringify(userData));
resp.end();
});
server1.listen(3000,()=>{
    console.log("Server is running");
});