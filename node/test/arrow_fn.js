let n = 1;
let a ={
    c:(fn)=>{
        console.log('this');
        fn&fn();
    },
    n:2
};
a.c(()=>{
    console.log(this.n);
});