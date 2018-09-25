const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const mime = require('mime-types');
const path = require('path');
const querystring = require('querystring');
const util = require('util');
const timestamp = require('time-stamp');


const { URL } = require('url');

const host = 'http://127.0.0.1';

//	存储错误日志
function saveErr(data){
    const str = new Date().toLocaleString() + '\n' + data.toString() + '\n';
    fs.writeFile(__dirname + '/err/err.txt', str,{flag:'a+'}, (err) => {
        // if (err) throw err;
        console.log('The file has been saved!');
    });
}
//  读取文件
function readFile(path,extname,res) {
    fs.readFile(__dirname + path,(err,data)=>{
        if(err){
            show404(res);
            saveErr(err);
        }else {
            res.writeHead(200,{'Content-type':mime.contentType(extname)});
            res.end(data);
        }
    });
}
//  404
function show404(res) {
    fs.readFile(__dirname + '/html/404.html',(err,data)=>{
        if(err){
            saveErr(err);
        }
        res.writeHead(404,{'Content-type':'text/html;utf-8'});
        res.end(data);
    });
}
//  读取目录
function readDir(path) {
    return new Promise((resolve, reject)=>{
        fs.readdir(path,(err,data)=>{
            if(err){
                saveErr(err);
                reject(err);
            }else {
                let dir = [];
                let file = [];
                Promise.all((function () {
                    let arr = [];
                    for(let i=0;i<data.length;i++){
                        arr[i] = new Promise((res,rej)=>{
                            fs.stat(path + '\\' + data[i],(err,stats)=>{
                                if(err){
                                    rej(err);
                                }
                                else {
                                    let dataType = '';
                                    if(stats.isDirectory()){
                                        dataType = 'dir';
                                    }
                                    if(stats.isFile()){
                                        dataType = 'file';
                                    }
                                    res({
                                        name:data[i],
                                        type:dataType
                                    });
                                }
                            });
                        });
                    }
                    return arr;
                })()).then(function (d) {
                    resolve(d);
                });
            }
        });
    });
}
//  获取数据
function receiveData(req) {
    let postData = '';
    return new Promise((resolve, reject) => {
        req.addListener('data',(chunk)=>{
            postData += chunk;
        });
        req.addListener('end',()=>{
            let resD = JSON.stringify(querystring.parse(postData));
            resolve(resD);
        });
    });
}
//  返回数据
function responseData(d,status) {
    let data = {
        data:d,
        success:status
    };
    return JSON.stringify(data);
}

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url === '/'){
        //  首页
        fs.readFile(__dirname + '/html/index.html',(err,data)=>{
            if(err){
                saveErr(err);
            }
            res.writeHead(200,{'Content-type':'text/html;utf-8'});
            res.end(data);
        });
    }
    // else if(req.url === '/favicon.ico'){
    //     //  icon
    //     fs.readFile(__dirname + '/image/favicon.ico',(err,data)=>{
    //         if(err){
    //             saveErr(err);
    //         }
    //         res.writeHead(200,{'Content-type':'image/x-icon'});
    //         res.end(data);
    //     });
    // }
    else{
        let extname = path.extname(req.url);
        //  请求文件
        if(extname){
            let dirPath = '';
            if(extname === '.html'){
                dirPath += /html/;
            }
            readFile(dirPath+req.url,extname,res);
        }
        else {
            //  请求接口
            if(req.method.toLowerCase() === 'post'){
                //  ajax
                if(req.url==='/ajax'){
                    receiveData(req).then((d)=>{
                        res.writeHead(200,{'Content-Type':'application/json'});
                        res.end(responseData(d,true));
                    });
                }
                else if(req.url==='/updata'){
                    //  上传文件
                    let form = new formidable.IncomingForm();
                    form.uploadDir = __dirname + "/upload";
                    form.parse(req, function(err, fields, files) {
                        if(err){
                            console.log(err);
                        }
                        // console.log(util.inspect({fields: fields, files: files}));
                        console.log(fields.path);
                        let filePath = fields.path?(fields.path+'/'):'';
                        let fileExtname = path.extname(files.file.name);
                        let oldName = __dirname + '/upload/' + path.basename(files.file.path);
                        let newName = __dirname + '/upload/' + filePath + timestamp('YYYYMMDDHHmmss') + '_' + Math.floor(Math.random() * 10000) + fileExtname;
                        fs.rename(oldName,newName,(err)=>{
                            if(err) {
                                saveErr(err);
                                res.writeHead(404, {'content-type': 'application/json'});
                                res.end(responseData(null,false));
                            }
                            else {
                                readDir(__dirname + '/upload/' + filePath ).then((d)=>{
                                    res.writeHead(200, {'content-type': 'application/json'});
                                    res.end(responseData(d,true));
                                });
                            }
                        });
                    });
                }
                else if(req.url==='/mkdir'){
                    //  新增文件夹
                    receiveData(req).then((d)=>{
                        let data = JSON.parse(d);
                        let filePath = data.path?data.path:'';
                        let fileName = data.file;
                        console.log(__dirname + '\\upload' + filePath + '\\' + fileName);
                        fs.mkdir(__dirname + '\\upload\\' + filePath + '\\' + fileName,(err)=>{
                            if(err){
                                if(err.errno===-4075){
                                    res.writeHead(404, {'content-type': 'application/json'});
                                    res.end(responseData(null,false));
                                }else {
                                    res.writeHead(404, {'content-type': 'application/json'});
                                    res.end(responseData(null,false));
                                }
                            }
                            else {
                                readDir(__dirname + '\\upload'+ filePath).then((d)=>{
                                    // console.log(d);
                                    res.writeHead(200, {'content-type': 'application/json'});
                                    res.end(responseData(d,true));
                                }).catch((e)=>{
                                    console.log(e);
                                    res.writeHead(404, {'content-type': 'application/json'});
                                    res.end(responseData(null,false));
                                });
                            }
                        });
                    });
                }
                else if(req.url==='/getList'){
                    receiveData(req).then((d)=>{
                        let path = JSON.parse(d).path;
                        if(path){
                            path = '\\' + path;
                        }
                        readDir(__dirname + '\\upload' + path).then((arr)=>{
                            res.writeHead(200, {'content-type': 'application/json'});
                            res.end(responseData(arr,true));
                        });
                    });
                }
                else {
                    show404(res);
                }
            }else {
                show404(res);
            }
        }
    }
});
server.listen(80,'127.0.0.1');