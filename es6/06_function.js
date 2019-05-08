// 1.函数参数的默认值
// es6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
// function log(x,y = "world") {
//     console.log(x,y);
// }
// log("hello");
// log("hello","china");
// log("hello","");

// 参数变量是默认声明的，所以不能用 let 或 const 再次声明。
// function foo(x=5) {
//     let x = 1;   error
//     const x = 2; error
// }

// 另外，一个容易忽略的地方是，参数默认值不是传值的，而是每次都重新计算默认值表达式的值。
// let a = 10;
// function foo(p = a + 1) {
//     console.log(p);
// }
// foo(); // 11
// a = 22;
// foo(); // 23

// 与解构赋值默认值结合使用
// 参数默认值可以与解构赋值的默认值，结合起来使用。

// function foo({x,y=5}) {
//     console.log(x,y);
// }
// foo({});
// foo({x:1,y:"aa"});
// foo({x:10});
// foo();
// 上面代码只使用了对象的解构赋值默认值，没有使用函数参数的默认值。
// 只有当函数foo的参数是一个对象时，变量x和y才会通过解构赋值生成。
// 如果函数foo调用时没有提供参数，变量x和y就不会生成，从而报错。
// 通过提供函数参数的默认值，就可以避免这种情况。
// function foo({x,y=5}={}) {
//     console.log(x,y);
// }
// foo({x:1,y:"aaa"});

// 作用域
// let x = 1;
// function  f(x,y = x) {
//     console.log(y);
// }
// f(1,2); // 2
// f(3);   // 3

// 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域(context)。
// 等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。

// 应用
// 利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。
// function throwIfMissing() {
//     throw new Error("Missing parameter");
// }
// function foo(mustBeProvided = throwIfMissing()) {
//     return mustBeProvided;
// }
// foo();

// rest参数
// es6引入rest参数(形式为...变量名)，用于获取函数的多余参数，这样就不需要使用arguments对象了。
// rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
// rest参数是一个真正的数组。
// function showPar(...vals) {
//     console.log(vals);
// }
// showPar(1,2,3,4,5,6,7,8,9,23,24,652,6,234,234,234,234,234,234);

// 箭头函数
// es6允许使用"箭头"(=>)定义函数。
// let f = v => v;
// 上面的箭头函数等同于
// let f = function (v) {
//     return v;
// };
// f(1); // 1

// 如果箭头函数不需要参数或者需要多个参数，就使用一个原括号代表参数部分。
let f0 = () => 5;
console.log(f0());
// 等同于
let f1 = function () {
	return 5;
};
// console.log(f1());

let sum0 = (num1,num2) => num1 + num2;
// console.log(sum0(1,2));
// 等同于
let sum1 = function (num1,num2) {
	return num1 + num2;
};
// console.log(sum1(2,1));

// 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。

let sum2 = (num1,num2) => {
	console.log(`num1:${num1}`);
	console.log(`num2:${num2}`);
	return num1 + num2;
};
// console.log(sum2(10,20));

// 由于大括号被解释为代码块，所有如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
// 报错
// let getTempItem = id => { id:id, name:"Temp" };

// 不报错
// let getTempItem = id => ({ id:id, name:"Temp" });
// console.log(JSON.stringify(getTempItem("aa"))); // {"id":"aa","name":"Temp"}

// 箭头函数可以与变量解构结合使用。
// const  full = ({first,last}) => first + " " + last;
// 等同于
// function  full(person) {
//     return person.first + " " + person.last;
// }

// 箭头函数的一个用处是简化回调函数。
// 正常函数写法
// [1,2,3].map(function (x) {
//     return x * x;
// });

// 箭头函数写法
// [1,2,3].map(x => x * x);

// const numbers = (...nums) => nums;
// console.log(numbers(1,2,3,4,5,6,7,8));
// const headAndTail = (head,...tail) => [head,tail];
// console.log(headAndTail(1,2,3,4,5,6,7,1,1,1,1));

// let getTempItem = id => {
//     console.log(1+2);
//     let a = 1;
//     console.log(a);
//     return {
//         a:a,
//         b:id
//     };
// };
// console.log(JSON.stringify(getTempItem("aa"))); // {"a":1,"b":"aa"}

// 使用注意点
// 箭头函数有几个使用注意点。
// 1.函数体内this对象，就是定义时所在的对象，而不是使用时所在的对象。
// 2.不可以当作构造函数，也就是说，不可以使用new命令，否则会爆出一个错误。
// 3.不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以使用rest参数代替。
// 4.不可以使用yield命令，因此箭头函数不能用作Generator函数。

// function who() {
//     setTimeout(()=>{
//         console.log(`id:${this.id}`);
//     },100);
// }
// who.call({id:3});
// who.call({id:4});

// 普通function函数和箭头函数的行为有一个微妙的区别，
// 箭头函数没有它自己的this值，箭头函数内的this值继承自外围作用域。
// this指向的固定化，并不是因为箭头函数内部绑定this的机制，实际原因是箭头函数根本没有自己的this，
// 导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。
// 除了this，以下三个变量在箭头函数之中也是不存在的。指向外层函数的对应变量:arguments,super,new.target。

// 双冒号函数 ("函数绑定"运算符)
// 函数绑定运算符是并排的两个冒号(::)，双冒号左边是一个对象，右边是一个函数。
// 该运算符会自动将左边的对象，作为上下文环境(即this对象)，绑定到右边的函数上面。

// foo::bar;
// 等同于
// bar.bind(foo);

// foo::bar(...arguments);
// 等同于
// bar.apply(foo,arguments);

// 尾调用优化
// 尾调用 是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。

// function f(x) {
//     return g(x);
// }
