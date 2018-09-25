let fn0 = (a,b) =>{
    return console.log(a,b);
};
fn0.apply(null,[1,2]);
fn0.apply(null,[[1,2,3]]);