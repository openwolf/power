const http = require('http');
const fs = require('fs');
const { URL } = require('url');
const path = require('path');



const localDir = './static';
const host = 'http://127.0.0.1:3000';

//	存储错误日志
function saveErr(data){
	const str = new Date().toLocaleString() + '\n' + data.toString() + '\n';
	fs.writeFile(localDir + '/err.txt', str,{flag:'a+'}, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
	});
}
//	定义content-type
function switchMIME(extname){
	switch(extname){
	case '.bmp':
		return 'image/bmp';
	case '.gif':
		return 'image/gif';
	case '.jpeg':
	case '.jpg':
		return 'image/jpeg';
	case '.webp':
		return 'image/webp';
	case '.png':
		return 'image/png';
	case '.ico':
		return 'image/x-icon';
	default:
		return false;
	}
}


const server = http.createServer((req,res)=>{
	const reqUrl = new URL(host + req.url);
	// console.log(reqUrl);
	if(reqUrl.pathname==='/'){
		fs.readFile(localDir+'/index.html',(err,sdata)=>{
			res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
			res.end(sdata);
		});
	}else{
		fs.readFile(localDir+reqUrl.pathname,(err,sdata)=>{
			if(err){
				//	无文件
				const Err = err;
				fs.readFile(localDir+'/404.html',(err,sdata)=>{
					res.writeHead(404,{'Content-type':'text/html;charset=utf-8'});
					res.end(sdata);
					// throw Err;
					saveErr(Err);
				});
			}else{
				let extname = switchMIME(path.extname(reqUrl.pathname));
				if(extname){
					//	image
					res.writeHead(200,{'Content-type':extname});
					res.end(sdata);
				}else{	
					//	html	
					res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
					res.end(sdata);
				}
			}
		});
	}
});
server.listen(3000,'127.0.0.1');