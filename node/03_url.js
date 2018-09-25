const http = require('http');
const {URL} = require('url');
const querystring = require('querystring');
const server = http.createServer((req,res)=>{
	//	最关键的就是req.url属性，表示用户的请求URL地址。所有的路由设计，都是通过req.url来实现的
	//	识别URL，用到两个新模块。第一个是url模块，第二个是queryString模块
	//	字符串查询用 queryString模块 处理
	if(req.url!=='/favicon.ico'){
		let myUrl = new URL(req.url,'http://127.0.0.1:3000');
		console.log(myUrl);
		if(myUrl.search){
			 let name = myUrl.searchParams.get('name');
			 let age = myUrl.searchParams.get('age');
			 let city = myUrl.searchParams.get('city');
			 let word = myUrl.searchParams.get('word');
			 let game = myUrl.searchParams.get('game');
			 console.log(name,age,city,word,game);
		}
		// console.log(req.url);
	}
	res.end('ok!');
});
server.listen(3000,'127.0.0.1');