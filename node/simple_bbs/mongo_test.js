const db = require('./model/db_async.js');
// db.insert({'a':1}).then((d)=>{
//     console.log('ojbk');
// }).catch((e)=>{
//     console.log('err',e);
// });
// (async ()=>{
//     let d = await db.insert({'a':3});
//     console.log('ojbk');
// })();
// db.update({'a':1},{$set:{o:3}}).then((d)=>{
//     console.log('ojbk');
// }).catch((e)=>{
//     console.log('err',e);
// });
// (async ()=>{
//     let result = await db.update({'a':3},{$set:{n:100}});
//     console.log(result);
// })();
// db.find().then(d=>{
//     console.log('d',d);
// }).catch((e)=>{
//     console.log('err',e);
// });
// (async ()=>{
//     let result = await db.find({'a':3});
//     console.log(result);
// })();
// db.getCount().then(d=>{
//     console.log('d',d);
// }).catch((e)=>{
//     console.log('err',e);
// });
// (async ()=>{
//     let result = await db.getCount({'a':3});
//     console.log(result);
// })();
// db.remove({"a":1}).then(result=>{
//     console.log('ojbk');
// }).catch(e=>{
//     console.log('e',e);
// });
// (async ()=>{
//     let result = await db.remove({'a':3});
//     console.log(result);
// })();