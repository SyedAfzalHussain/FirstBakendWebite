const http = require('http');
const fileContent=require('fs');
const fileRead =fileContent.readFileSync('check.html');

const server=http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(fileRead);

})

server.listen(80, '127.0.0.1', ()=>{
    console.log("Listening on Port 80...");
})


