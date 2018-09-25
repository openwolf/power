const Db = require('./model/db_async_1');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const timestamp = require('time-stamp');
const crypto = require('crypto');
const session = require('express-session');

const app = express();
const dbUser = new Db('test','user');
const dbMessage = new Db('test','message');

const md5 = (val)=>{
    let hash = crypto.createHash('md5');
    return hash.update(val).digest('base64');
};

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(bodyParser.json());
app.use('/public',express.static('./public'));

//  首页
app.get('/',(req,res)=>{
    fs.readFile('./views/index.html',(err,data)=>{
        if(err){
            res.end(404);
            return;
        }
        res.end(data);
    });
});
//  注册
app.get('/register',(req,res)=>{
    fs.readFile('./views/register.html',(err,data)=>{
        if(err){
            res.end(404);
            return;
        }
        res.end(data);
    });
});
//  登陆
app.get('/login',(req,res)=>{
    fs.readFile('./views/login.html',(err,data)=>{
        if(err){
            res.end(404);
            return;
        }
        res.end(data);
    });
});
//  注册接口
app.post('/api/register',(req,res)=>{
    let data = req.body;
    res.set('Content-type','application/json;charset=utf-8');
    if( data.accounts && data.password ){
        dbUser.find({"accounts":data.accounts}).then((d)=>{
            if(d.length){
                res.end(JSON.stringify({"success":false,"message":"账户已存在"}));
            }else {
                dbUser.insert({"accounts":data.accounts,"password":md5(data.password)}).then((d)=>{
                    res.end(JSON.stringify({"success":true,"message":"用户注册成功"}));
                });
            }
        });
    }else {
        res.end(JSON.stringify({"success":false,"message":"缺少参数"}));
    }
});
//  登陆接口
app.post('/api/login',(req,res)=>{
    let data = req.body;
    res.set('Content-type','application/json;charset=utf-8');
    if( data.accounts && data.password ){
        dbUser.find({"accounts":data.accounts,"password":md5(data.password)}).then((d)=>{
            console.log(d);
            if(d.length){
                req.session.login = true;
                req.session.name = d[0].accounts;
                res.end(JSON.stringify({"success":true,"message":"登陆成功"}));
            }else {
                res.end(JSON.stringify({"success":false,"message":"用户名或密码有误"}));
            }
        });
    }else {
        res.end(JSON.stringify({"success":false,"message":"缺少参数"}));
    }
});
//  判断登陆
app.post('/api/getstatus',(req,res)=>{
    res.set('Content-type','application/json;charset=utf-8');
    if( req.session.login ){
        res.end(JSON.stringify({"success":false,"message":"已登陆"}));
    }else {
        res.end(JSON.stringify({"success":false,"message":"尚未登陆"}));
    }
});
//  获取用户信息
app.post('/api/getinfo',(req,res)=>{
    res.set('Content-type','application/json;charset=utf-8');
    if( req.session.login ){
        res.end(JSON.stringify({"success":false,"message":"已登陆","data":{"name":req.session.name}}));
    }else {
        res.end(JSON.stringify({"success":false,"message":"尚未登陆"}));
    }
});
//  发送留言
app.post('/api/sendMessage',(req,res)=>{
    let data = req.body;
    if(!data.message){
        res.end(JSON.stringify({success:false}));
        return;
    }
    data.user = 'aaa';
    data.time = timestamp('YYYY-MM-DD HH:mm:ss');
    // db.insert(data).then((d)=>{
    //     res.end(JSON.stringify({success:true}));
    // });
    let getMessage = async (data,res)=>{
        //  插入数据
        await dbMessage.insert(data);
        //  获取留言板内容
        let result = await dbMessage.find();
        console.log(result);
        res.end(JSON.stringify({success:true,messageList:result}));
    };
    getMessage(data,res);
});
//  获取留言
app.post('/api/getMessage',(req,res)=>{
    let data = req.body;
    console.log(data);
    dbMessage.find({},data.pageNum*4,3).then((d)=>{
        console.log(d);
        res.end(JSON.stringify({success:true,data:d}));
    });
});


app.listen(3000);