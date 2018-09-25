const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
	if(req.url!=='/favicon.ico'){
		let userId = parseInt(Math.random()*10000)+100000;
		console.log('welcome:'+userId);
		res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
		//	两个参数，第一个是完成路径，当前目录写./
		//	第二个参数，就是回调函数，表示文件读取成功之后，做的事情
		fs.readFile('./txt.txt',(err,data)=>{
			if(err){
				throw err;
			}
			console.log(userId+'readFile is over!');
			res.end(data);
		});
	}
});
server.listen(3000,'127.0.0.1');