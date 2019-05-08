// ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
// let [a,b,c] = [1,2,3];
// let [foo,[[bar],baz]] = [1,[[2],3]];
// let [,,thrid] = ["foo","bar","baz"];
// let [x,,y] = [1,2,3];
// 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。

// 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。
// 报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

// 默认值
// let [foot = true] = [];
// console.log(foot);
// let [x,y="b"] = ["a"];
// let [x=1,y="b"] = [];
// 注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。
// 所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
// let [x=undefined,y="b"] = [];
// console.log(x);
// console.log(y);

// 解构不仅可以用于数组，还可以用于对象。
// let {aaa,bbb} = {aaa:111,bbb:222};
// console.log(aaa);
// console.log(bbb);
// 对象的解构与数组有一个重要的不同。数组的元素是按次序排序列的，变量的取值由它的位置决定。
// 而对象的属性没有次序，变量必须与属性同名，才能去到正确的值。
// let {cc,dd,ee} = {cc:11,dd:22};
// console.log(cc);
// console.log(dd);
// console.log(ee);

// let {a:aa,b:bb,c:cc} = {a:11,b:22,c:33};
// console.log(aa);
// console.log(bb);
// console.log(cc);
// 对象解构赋值的内部机制，是先找到同名属性，然后再赋值给对应的变量。真正被赋值的是后者，而不是前者。

// let { foo:baz } = { foo:"aaa",bar:"bbb" };
// console.log(baz);
// baz "aaa"
// foo error : foo is not defind

// 对象的解构也可以指定默认值
// let { x = 3 } = {};
// console.log(x); 3
// let { x, y = 5} = {x:1};
// console.log(x);
// console.log(y);

// let { x : y = 3 } = {};
// console.log(y);

// let { x : y = 3 } = { x : 5 };
// console.log(y);

// 函数的参数也可以使用解构赋值。
function add([x,y]) {
	return x + y;
}
// console.log(add([1,2]));

// function move({x = 0,y = 0} = {}) {
//     return [x , y];
// }
// console.log(move({x:3,y:8}));
// console.log(move({x:300}));
// console.log(move({y:-8}));
// console.log(move({}))

//上面代码中，函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和变量y的值。
//如果解构失败，x和y等于默认值。

// ------------------------------------

// function move({x,y} = {x:0,y:0}) {
//     return [x , y];
// }
// console.log(move({x:3,y:8}));
// console.log(move({x:300}));
// console.log(move({y:-8}));
// console.log(move({}));

//上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，
//所以会得到与迁移中写发不同的结果。


// 用途
// 1.交换变量的值
// let aa = 1;
// let bb = 2;
// [aa,bb]=[bb,aa];
// console.log(aa);
// console.log(bb);

// 2.从函数返回多个值
function example0() {
	return [1,2,3];
}
let [a,b,c] = example0();
console.log(a);
console.log(b);
console.log(c);

function  example1() {
	return {
		foo:1,
		bar:2
	};
}
let {foo,bar} = example1();
console.log(foo);
console.log(bar);
