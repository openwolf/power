const config = require('./db_config.js');
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

function base() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url,{useNewUrlParser: true }).then((client)=>{
            resolve(client);
        }).catch((err)=>{
            reject(err);
        });
    });
}

// base().then((client)=>{
//     console.log("Connected successfully to server");
//     const db = client.db(config.dbName);
//     client.close();
// }).catch((e)=>{
//     console.log('err',e);
// });

//  插入一条数据
function insert(data) {
    return new Promise((resolve, reject) => {
        base().then((client)=>{
            const db = client.db(config.dbName);
            db.collection(config.collectionName).insertOne(data).then(result=>{
                client.close();
                resolve(result);
            })
                .catch(err=>{
                client.close();
                reject(err);
            });
        })
            .catch( err =>{
            reject(err);
        });
    });
}
//  删除匹配数据
function remove(data){
    return new Promise((resolve, reject) => {
        base().then((client)=>{
            const db = client.db(config.dbName);
            db.collection(config.collectionName).deleteMany(data).then(result=>{
                client.close();
                resolve(result);
            }).catch(err=>{
                client.close();
                reject(err);
            });
        }).catch( err =>{
            reject(err);
        });
    });
}
//  更新/替换匹配数据
function update(filter,val){
    return new Promise((resolve, reject) => {
        base().then((client)=>{
            const db = client.db(config.dbName);
            db.collection(config.collectionName).updateMany(filter,val).then(result=>{
                client.close();
                resolve(result);
            }).catch(err=>{
                client.close();
                reject(err);
            });
        }).catch( err =>{
            reject(err);
        });
    });
}
//  按条件查询数据
function find(filter={},skip=0,limit=0){
    return new Promise((resolve, reject) => {
        base().then((client)=>{
            const db = client.db(config.dbName);
            db.collection(config.collectionName).find(filter).skip(skip).limit(limit).toArray().then((docs)=>{
                client.close();
                resolve(docs);
            }).catch( err =>{
                reject(err);
            });
        }).catch( err =>{
            reject(err);
        });
    });
}
function getCount(filter={}){
    return new Promise((resolve, reject) => {
        base().then((client)=>{
            const db = client.db(config.dbName);
            db.collection(config.collectionName).find(filter).count().then((result)=>{
                client.close();
                resolve(result);
            }).catch( err =>{
                reject(err);
            });
        }).catch( err =>{
            reject(err);
        });
    });
}
module.exports={
    insert:insert,
    update:update,
    find:find,
    remove:remove,
    getCount:getCount
};