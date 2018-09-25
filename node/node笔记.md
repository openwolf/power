# node 笔记

## 需关注模块
**fs** 、**path** 、**querystring** 、 **util** 、 **http** 、 **util**
## 好用的第三方法模块
**mime-type** 、 **time-stamp** 、 **formidable**	、**express**、**body-parser**

## async 函数
**async**函数返回一个 Promise 对象。
**async**函数内部**return**语句返回的值，会成为**then**方法回调函数的参数。
**async**函数内部抛出错误，会导致返回的 Promise 对象变为**reject**状态。抛出的错误对象会被**catch**方法回调函数接收到。

如果**await**后面的异步操作出错，那么等于**async**函数返回的 Promise 对象被**reject**。
```
const superagent = require('superagent');
const NUM_RETRIES = 3;

async function test() {
  let i;
  for (i = 0; i < NUM_RETRIES; ++i) {
    try {
      await superagent.get('http://google.com/this-throws-an-error');
      break;
    } catch(err) {}
  }
  console.log(i); // 3
}

test();
```
上面代码中，如果**await**操作成功，就会使用**break**语句退出循环；如果失败，会被**catch**语句捕捉，然后进入下一轮循环。

## post数据接收
```
//创建服务器
var server = http.createServer(function(req,res){
    var alldata = "";
    //下面是post请求接收的一个公式
    //node为了追求极致，它是一个小段一个小段接收的。
    //接受了一小段，可能就给别人去服务了。防止一个过大的表单阻塞了整个进程
    req.addListener("data",function(chunk){
        alldata += chunk;
    });
    //全部传输完毕
    req.addListener("end",function(){
        var datastring = alldata.toString();
        res.end("success");
        //将datastring转为一个对象
        var dataObj = querystring.parse(datastring);
        console.log(dataObj);
        console.log(dataObj.name);
        console.log(dataObj.sex);
    });
});
```

### express

使用方法
```
const express = require('express');
const app = express();
app.get('/',(req,res,next)=>{
    res.send('hello world');
});
app.listen(3000);
```
.get .post .use 是中间件
业务层 - 中间件 - 逻辑层
视图 - 控制器 - 模型 （mvc）
中间件函数的第三个参数next可以将控制权传递给下一个中间件函数（中间件顺序很重要）

```
app.set('view engine','ejs');
```
设置模版引擎

```
app.use(express.static("./public"));
```
express提供的静态资源功能

```
//冒号
app.get("/:username/:oid",function(req,res){
    var username = req.params["username"];
    var oid = req.params["oid"];
    res.write(username);
    res.end(oid);
});
```
express的路由





## 参考文章：

1. [async 函数](http://es6.ruanyifeng.com/#docs/async)
2. 