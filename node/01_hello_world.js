const http = require("http");
const server = http.createServer(function (req,res) {
	// console.log(req);
	// console.log(res);
	res.end("hello world!");
});
server.listen("3000","127.0.0.1");