const p0 = function () {
    return new Promise((resolve,reject)=>{
        console.log('p0');
        setTimeout(()=>{
            console.log('p0_ok');
            resolve('p0_ok');
        },2000);
    });
};
const p1 = function () {
    return new Promise((resolve,reject)=>{
        console.log('p1');
        setTimeout(()=>{
            console.log('p1_ok');
            resolve('p1_ok');
        },4000);
    });
};
const p2 = function () {
    return new Promise((resolve,reject)=>{
        console.log('p2');
        setTimeout(()=>{
            console.log('p2_ok');
            resolve('p2_ok');
        },6000);
    });
};
const arr = [p0,p1,p2];
const for_of = async ()=>{
    let result = [];
    for(let v of arr){
        let a = await v();
        result.push(a);
    }
    console.log(result);
};
for_of();
// arr.forEach(async (v)=>{
//     await v();
// });
