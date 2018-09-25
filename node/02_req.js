const http = require('http');
const server = http.createServer((req,res)=>{
	//	最关键的就是req.url属性，表示用户的请求URL地址。所有的路由设计，都是通过req.url来实现的
	//	识别URL，用到两个新模块。第一个是url模块，第二个是queryString模块
	if(req.url!=='/favicon.ico'){
		console.log(req.url);
	}
	res.end();
});
server.listen(3000,'127.0.0.1');