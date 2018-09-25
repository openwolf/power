const config = require('./db_config.js');
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

let base = async ()=>{
    try {
        let client = await MongoClient.connect(url,{useNewUrlParser: true });
        let db = client.db(config.dbName);
        return [client,db];
    }catch (e) {
        console.log('db boom!',e);
    }
};
// (async ()=>{
//     try {
//         let result = await base();
//         console.log('ojbk');
//         result.close();
//     }catch (e) {
//         console.log('数据库炸了',e);
//     }
// })();

//  插入一条数据
async function insert(data) {
    try{
        let [client,db] = await base();
        let result = await db.collection(config.collectionName).insertOne(data);
        client.close();
        return result;
    }catch (e) {
        console.log('insert boom!',e);
    }
}
//  删除匹配数据
async function remove(data){
    try{
        let [client,db] = await base();
        let result = await db.collection(config.collectionName).deleteMany(data);
        client.close();
        return result;
    }catch (e) {
        console.log('remove boom!',e);
    }
}
//  更新/替换匹配数据
async function update(filter,val){
    try {
        let [client,db] = await base();
        let result = await db.collection(config.collectionName).updateMany(filter,val);
        client.close();
        return result;
    }catch (e) {
        console.log('update boom!',e);
    }
}
//  按条件查询数据
async function find(filter={},skip=0,limit=0){
    try {
        let [client,db] = await base();
        let result = await db.collection(config.collectionName).find(filter).skip(skip).limit(limit).toArray();
        client.close();
        return result;
    }catch (e) {
        console.log('find boom!',e);
    }
}
async function getCount(filter={}){
    try {
        let [client,db] = await base();
        let result = await db.collection(config.collectionName).find(filter).count();
        client.close();
        return result;
    }catch (e) {
        console.log('getCount boom!',e);
    }
}
module.exports={
    insert:insert,
    update:update,
    find:find,
    remove:remove,
    getCount:getCount
};