//  symbol独一无二的值，与任何值都不同
const s = Symbol(); //  不需要new
console.log(s);
const s2 = Symbol();
// console.log('s===s2',s===s2); false
const s3 = Symbol('aaa');   //  可穿字符串做标识用，相同标识的Symbol也不相等

//  Symbol无法参与运算，但可转化成字符串或者布尔值
//  Symbol可做属性名
//  es6语法
let prop = 'name';
const obj = {
	// name:'openwolf',
	// [prop]:'openwolf',
	[`my${prop}is`]:'openowlf'
};
console.log(obj);
// const s4: unique symbol = Symbol('key');
const s4 = Symbol('key');
const obj2 = {
    [s4]:'val',
    age:18,
    sex:'man'
};
console.log(obj2);
obj2[s4] = 'new_val';
console.log(obj2);

//  Symbol作为属性名时，有几种方式无法遍历到
//  for .. in
//  for .. of
//  Object.keys()
//  Object.getOwnPropertyNames()
//  JSON.stringify()
//  可得到
//  Object.getOwnPropertySymbols()
//  Reflect.ownKeys()

//	Symbol.for()	Symbol.keyFor()
//	Symbol.for()会根据传入标识在全局查找看是否用相同标识Symbol值，如果没有就创建一个如果有就返回它
//	const s8 = Symbol.for('key');
//	const s9 = Symbol.for('key');
//	s8 === s9 true








