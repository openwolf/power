const express = require('express');
const session = require('express-session');

const app = express();
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.get('/',(req,res)=>{
    if(req.session.data){
        res.send('欢迎您'+req.session.data.username);
    }else {
        res.send('您未登陆');
    }
});
app.get('/path',(req,res)=>{
    res.redirect('/nb');
});

app.get('/nb',(req,res)=>{
    res.end('');
});

app.get('/login',(req,res)=>{
    req.session.data={
        username:'openwolf'
    };
    res.send('登陆成功')
});

app.listen(3000);