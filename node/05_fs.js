const http = require('http');
const fs = require('fs');
//	fs.stat	data
//	fs.mkdir
//	fs.rmdir
const name = './../node_learning';
const fileName = [];
const server = http.createServer((req,res)=>{
	if(req.url!=='/favicon.ico'){
		fs.readdir(name,(err,files)=>{
			if(err){
				throw err;
			}
			for(let i = 0; i < files.length;i++){
				let thisName = name + '/' + files[i];
				fs.stat(thisName,(err,stats)=>{
					if(err){
						throw err;
					}
					if(stats.isFile()){
						fileName.push(files[i]);
					}
					if(i===files.length-1){
						console.log(fileName);
					}
				});
			}
		});
		res.end('ok');
	}else{
		res.end('no_ico');
	}
});
server.listen(3000,'127.0.0.1');