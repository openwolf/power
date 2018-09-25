const http = require('http');
const server = http.createServer((req,res)=>{
    res.end('success!');
});
server.listen(80,'127.0.0.1');