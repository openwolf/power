const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const timestamp = require('time-stamp');
const mongoUrl = 'mongodb://localhost:27017';
const app = express();
// app.use(express.static('public'));
app.get('/favicon.ico',(req,res)=>res.status(204));
app.get('/',(req,res)=>{
    // console.log(timestamp('YYYY-MM-DD HH:mm:ss'));
    let time = timestamp('YYYY-MM-DD HH:mm:ss');
    console.time('insert');
    MongoClient.connect(mongoUrl,{useNewUrlParser:true}, function(err, client) {
        if(err){
            res.send('Bad!!!');
            return;
        }
        console.log("Connected successfully to server");
        const db = client.db('test');
        const collection = db.collection('user');
        collection.insertOne({
            time:time
        }, function(err, result) {
            console.timeEnd('insert');
            if(err) {
                res.send('Bad!!!');
                return;
            }
            res.send('insert:ok~<br/>time:'+time);
            client.close();
        });
    });
});
app.listen(3000);