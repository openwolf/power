// 1.扩展运算符
// 扩展运算符是三个点(...)它好比rest参数的逆运算,将一个数组转为用逗号分隔的参数序列.
// console.log(...[1,2,3]);
// 1 2 3
// [...document.querySelectorAll("div")];
// [<div>,<div>,<div>];

// 该运算符主要用于函数调用.
// function add(x , y) {
//     console.log(x + y);
//     return x + y;
// }
// const a = [7,3];
// add(...a);

// 替代数组的 apply 方法
// 由于扩展运算符可以展开数组,所以不再需要 apply 方法,将数组转为函数的参数了.
// es5 的写法
// function f(x,y,z) {
// }
// var args = [0,1,2];
// f.apply(null,args);

// apply 语法
// fun.apply(thisArg,[argsArray]);
// 参数
// thisArg 在fun函数运行时指定的this值.
// argsArray 一个数组或者类数组对象,其中的数组元素将作为单独的参数传给fun函数.

// 一个取代apply方法的实际的例子
// es5 的写法
console.log(Math.max.apply(null,[14,3,77]));

// es6 的写法
console.log(Math.max(...[14,3,77]));

// 等同于
console.log(Math.max(14,3,77));

// 另一个例子是通过 push 函数,将一个数组添加到另一个数组的尾部.
// es5 的写法
// var arr1 = [0,1,2];
// var arr2 = [3,4,5];
// Array.prototype.push.apply(arr1,arr2);

// es6 的写法
// let arr1 = [0,1,2];
// let arr2 = [3,4,5];
// arr1.push(...arr2);

// 复制数组
// 扩展运算符提供了复制数组的简便写法.
// const a1 = [1,2];
// const a2 = [...a1];
// const [...a2] = a1;

// 合并数组
// 扩展运算符提供了数组合并的新写法.
// es5
// [1,2].concat(more);
// es6
// [1,2,...more];

// 与解构赋值结合
// 扩展运算符可以与解构赋值结合起来,用于生成数组

// es5
// a = list[0],rest = list.slice(1);
// es6
// [a,...rest] = list;

// const [fitst,...rest] = [1,2,3,4,5];
// first // 1
// rest // [2,3,4,5]

// const [first,...rest] = [];
// first // undefined
// rest // []
// 如果将扩展运算符用于数组赋值,只能放在参数的最后一位,否则会报错.

// 字符串
// 扩展运算符还可以将字符串转为真正的数组.
// [...'hello'];
// ["h","e","l","l","o"];
// 上面的写法,有一个重要的好处,那就是能够正确识别四个字接的Unicode字符.

// 实现了 iterator接口的对象
// 任何 iterator 接口的对象,都可以使用扩展运算符转为真正的数组
// let nodelist = document.querySelectorAll("div");
// let arr = [...nodelist];

// 上面代码中,querySelectotAll 方法返回的是一个 nodelist 对象.
// 它不是数组,而是一个类似数组的对象.
// 这时,扩展运算符可以将其转为真正的数组,原因就在于 NodeList 对象实现了 iterator.

// let  arrayLike = {
//     "0":"a",
//     "1":"b",
//     "2":"c",
//     "lenght":3
// };
// TypeError:cannot spread non-iterator object
// let arr = [...arrayLike];

// 上面代码中,arraylike 是一个类似数组的对象,但是没有部署 iterator 接口,扩展符就会报错.
// 这时,可以改为使用 Array.from 方法将 arrayLike 转为真正的数组.

// Array.from()
// Array.from 方法用于将两类对象转为真正的数组:类似数组的对象和可遍历的对象

// 下面是一个类似数组的对象,Array.from将它转为真正的数组.
// let arraylike = {
// 	"0": "a",
// 	"1": "b",
// 	"2": "c",
// 	length: 3
// };
// es5的写法
// let arr1 = [].slice.call(arraylike);
// es6的写法
// let arr2 = Array.from(arraylike);

// NodeList 对象
// let ps = document.querySelectorAll("p");
// Array.from(ps).filter(p=>{
// 	return p.textContent.length > 100;
// });

// 只要是部署了 iterator 接口的数据结构,Array.from 都能将其转为数组.
// Array.from("hello");
// ["h","e","l","l","o"]

// 值得提醒的是,扩展运算符(...)也可以将某些数据结构转为数组.
// arguments 对象
// function foo() {
// 	const args = [...arguments];
// }

// NodeList对象
// [...document.querySelectorAll("div")]
// 扩展运算符背后调用的是遍历器接口(Symbol.iterator),如果一个对象没有部署这个接口,就无法转换.
// Array.from方法还支持类似数组的对象.所谓类似数组的对象,本质特征只有一点,即必须有length属性.
// 因此,任何有length属性的对象,都可以通过Array.from方法转为数组,而此时扩展运算符就无法转换.
// Array.from({length:3});
// [undefined,undefined,undefined]
// 上面代码中,Array.from返回了一个具有三个成员的数组,每个位置的值都是undefined.
// 扩展运算符转换不了这个对象

// Array.from还可以接受第二个参数,作用类似于数组的map方法,
// 用来对每个元素进行处理,将处理后的值放入返回的数组.

// Array.from(arraylike,x => x*x);
// 等同于
// Array.from(arraylike).map(x => x*x);
// Array.from([1,2,3],x => x*x);
// [1,4,9]
// 下面的例子将数组中布尔值为false的成员转为0
// Array.from([1,,2,,3],(n) => n||0 );
// [1,0,2,0,3]

// Array.of()
// Array.of 方法用于将一组值,转换为数组.
Array.of(3,11,8); // [3,11,8]
Array.of(3); // [3]
Array.of(3).length; // 1

Array.of(); // []
Array.of(undefined); // [undefined]
Array.of(1); // [1]
Array.of(1,2); // [1,2]

// Array.of 总是返回参数值组成的数组.如果没有参数,就返回一个空数组

// Array.of 方法可以用下面的代码模拟实现
// function ArrayOf() {
// 	return [].slice.call(arguments);
// }

// 数组实例的 copyWithin()
// 数组实例的 copyWithin 方法,在当前数组内部,将指定位置的成员复制到其他位置(会覆盖原有成员),
// 然后返回当前数组.也就是说,使用这个方法,会修改当前数组.
// Array.prototype.copyWithin(target,start = 0,end = this.length);
// 它接受三个参数
// -target (必须):从该外置开始替换数据.如果为负值,表示倒数.
// -start (可选):从该位置开始读取数据,默认为0,如果为负值,表示倒数.
// -end (可选):到该位置前停止如果为负值,表示倒数.

[1,2,3,4,5].copyWithin(0,3); // [4,5,3,4,5]

// 数组实例的 find() 和 findIndex()
// 数组实例的find方法,用于找出第一个符合条件的数组成员.它的参数是一个回调函数,
// 所有数组成员依次执行该回调函数,直到找出第一个返回值为true的成员,然后返回该成员.
// 如果没有符合条件的成员,则返回undefined
[1,4,-5,10].find((n) => n < 0); // -5
// 上面代码找出数组中第一个小于0的成员.
[1,5,10,15].find(function (value,index,arr) {
	return value > 9;
});
// 10
// 上面代码中,find方法的回调函数可以接受三个参数,依次为当前的值,当前的位置和原数组.
// 数组实例的findIndex方法的用法与find方法非常类似,返回第一个符合条件的数组的成员的位置,
// 如果所有成员都不符合条件,则返回-1.

[1,5,10,15].findIndex(function (value,index,arr) {
	return value > 9;
});
// 2
// 这两个方法都可以接受第二个参数,用来绑定回调函数的this对象.
function f(v) {
	return v > this.age;
}
let person = { name:"John" , age:20 };
[10,12,26,15].find(f,person); // 26
// 上面的代码中,find函数接收了第二个参数person对象,回调函数中this对象指向person对象.
// 另外,这两个方法都可以发现NaN,弥补了数组的indexOf方法的不足.
[NaN].indexOf(NaN); // -1
[NaN].findIndex( y => Object.is(NaN,y)); // 0
// 上面代码中,indexOf方法无法识别数组的NaN成员.但是findIndex方法可以借助Object.is方法做到.

// 数组实例的fill()
// fill 方法使用给定值,填充一个数组.
["a","b","c"].fill(7); // [7,7,7]
// fill 方法还可以接受第二个和第三个参数,用于指定填充的起始位置和结束位置.
["a","b","c"].fill(7,1,2); // ["a",7,"c"]
// 上面代码表示,fill方法从1号位开始,向原数组填充7,到2号位之前结束.

// 数组实例的entries(),keys()和values()
// es6 提供三个新的方法 entries(),keys()和values() 用于遍历数组.
// 它们都返回一个遍历器对象,可以用for...of循环进行遍历,唯一的区别是keys()是对键名的遍历,
// values()是对键值的遍历,entries()是对键值对的遍历.

for(let index of ["a","b"].keys()){
	console.log(index);
}
// 0
// 1

for(let elem of ["a","b"].values()){
	console.log(elem);
}
// "a"
// "b"

for(let [index,elem] of ["a","b"].entries()){
	console.log(index,elem);
}
// 0 "a"
// 1 "b"

// 如果不使用for..of循环,可以手动调用遍历器对象的next方法,进行遍历.
let  letter = ["a","b","c"];
let entries = letter.entries();
console.log(entries.next().value); // [0 , "a"]
console.log(entries.next().value); // [1 , "b"]
console.log(entries.next().value); // [2 , "c"]

// 数组实例的includes()
// Array.prototype.includes 方法返回一个布尔值,表示某个数组是否包含给定的值,与字符串的includes方法类似.

[1,2,3].includes(2); // true
[1,2,3].includes(4); // false
[1,2,NaN].includes(NaN); // true

// 该方法的第二个参数表示搜索的起始位置,默认为0

// 数组的空位
// 数组的空位值,数组的某一个位置没有任何值.比如,Array构造函数返回的数组都是空位.
Array(3); // [ , , ]
// 上面代码中,Array(3)返回一个具有3个空位的数组.
// 注意,空位不是undefined,一个位置的值等于undefined,依然是有值的.
// 空位没有任何值,in运算符可以说明这一点.
0 in [undefined,undefined,undefined]; // true
0 in [,,]; // false

// es5对空位的处理,已经很不一致了,大多数情况下会忽略空位.
// es6则明确的将空位转为undefined
