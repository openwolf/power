const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

function Base(dbName,collectionName){
    this.dbName = dbName;
    this.collectionName = collectionName;
}
Base.prototype.base = async function(){
    try {
        let client = await MongoClient.connect(url,{useNewUrlParser: true});
        let db = client.db(this.dbName);
        return [client,db];
    }catch (e) {
        console.log('db boom!',e);
    }
};

//  插入一条数据
Base.prototype.insert = async function (data){
    try{
        let [client,db] = await this.base();
        let result = await db.collection(this.collectionName).insertOne(data);
        client.close();
        return result;
    }catch (e) {
        console.log('insert boom!',e);
    }
};
//  删除匹配数据
Base.prototype.remove = async function (data){
    try{
        let [client,db] = await this.base();
        let result = await db.collection(this.collectionName).deleteMany(data);
        client.close();
        return result;
    }catch (e) {
        console.log('remove boom!',e);
    }
};
//  更新/替换匹配数据
Base.prototype.update = async function (filter,val){
    try {
        let [client,db] = await this.base();
        let result = await db.collection(this.collectionName).updateMany(filter,val);
        client.close();
        return result;
    }catch (e) {
        console.log('update boom!',e);
    }
};
//  按条件查询数据
Base.prototype.find = async function (filter={},skip=0,limit=0){
    try {
        let [client,db] = await this.base();
        let result = await db.collection(this.collectionName).find(filter).skip(skip).limit(limit).toArray();
        client.close();
        return result;
    }catch (e) {
        console.log('find boom!',e);
    }
};
Base.prototype.getCount = async function (filter={}){
    try {
        let [client,db] = await this.base();
        let result = await db.collection(this.collectionName).find(filter).count();
        client.close();
        return result;
    }catch (e) {
        console.log('getCount boom!',e);
    }
};

// (async ()=>{
//     try {
//         let o = new Base('test','message');
//         let [client,db] = await o.base();
//         console.log('ojbk');
//         client.close();
//     }catch (e) {
//         console.log('数据库炸了',e);
//     }
// })();

// (async ()=>{
//     try {
//         let o = new Base('test','message');
//         await o.dbFind().then((d)=>{
//             console.log(d);
//         });
//     }catch (e) {
//         console.log('数据库炸了',e);
//     }
// })();

module.exports=Base;