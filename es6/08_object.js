// 1.属性的简洁表示法
// es6允许直接写入变量和函数,作为对象的属性和方法.这样的书写更加简洁
// const foo = "bar";
// const baz = {foo};
// baz // { foo : "bar" }
// 等同于
// const baz = {foo:foo}

// 上面代码表明,es6允许在对象之中,直接写变量.这时,属性名为变量名,属性值为变量的值.

// function f(x,y) {
// 	return {x,y};
// }

// 等同于

// function f(x,y) {
// 	return {x:x,y:y};
// }
// 等同于
// function f(x,y) {
// 	return {x:x,y:y};
// }

// f(1,2); // Object {x:1,y:2}

// 除了属性简写,方法也可以简写
// const o = {
// 	method(){
// 		return "Hello!";
// 	}
// };

// 等同于

// const o = {
// 	method:function () {
// 		return "Hello!";
// 	}
// };

// 下面是一个实际的例子
// let birth = "2000/01/01";
// const Person = {
// 	name:"张三",
// 	//等同于 birth:birth
// 	birth,
// 	//等同于 hello:function(){...}
// 	hello(){ console.log("我的名字是",this.name);}
// };

// 这种写法用于函数的返回值,将会非常方便
// function getPoint() {
// 	const x = 1;
// 	const y = 10;
// 	return {x,y};
// }
// getPoint(); //{x:1,y:10}

// CommonJS模块输出一组变量,就非常适合使用简洁写法.

// let ms = {};
// function getItem(key) {
// 	return key in ms ? ms[key]:null;
// }
// function setItem(key,value) {
// 	ms[key] = value;
// }
// function clear() {
// 	ms = {};
// }
//
// module.exports = {getItem,setItem,clear};
// 等同于
// module.exports = {
// 	getItem:getItem,
// 	setItem:setItem,
// 	clear:clear
// };

// 属性的赋值器(setter) 和 取值器(getter) ,事实上也是采用这种写法.
// const cart = {
// 	_wheels:4,
// 	get wheels(){
// 		return this._wheels;
// 	},
// 	set wheels(value){
// 		if(value<this._wheels){
// 			throw new Error("数值太小了!");
// 		}
// 		this._wheels = value;
// 	}
// }

// 属性名表达式
// javascript 定义对象的属性,由两种方法.
// 方法一
// obj.foo = true;
// 方法二
// obj["a" + "bc"] = true;

// 上面代码的方法一是直接用标识符作为属性名,方法二是用表达式作为属性名,这时要将表达式放在方括号之内.
// 但是,如果使用字面量方式定义对象(使用大括号),在es5中只能使用方法一(标识符)定义属性.
// let obj = {
// 	foo:true,
// 	abc:123
// };

// es6允许字面量定义对象时,用方法二(表达式)作为对象的属性名,即把表达式放在方括号内.
// let propKey = "foo";
// let obj = {
// 	[propKey]:true,
// 	["a"+"bc"]:123
// };

// 下面是另一个例子.

// let lastWord = "last word";
// const a = {
// 	"first word":"hello",
// 	[lastWord]:"world"
// };
// a["first word"]; // "hello"
// a[lastWord]; // "world"
// a["last word"]; // "world"

// 表达式还可以用于定义方法名
// let obj = {
// 	["h"+"ello"](){
// 		return "hi";
// 	}
// };
// obj.hello(); //hi

// 方法的name属性
// 估计我用不到..具体的再去看教程

// Object.is()
// es5比较两个值是否相等,只有两个运算符:相等预算符(==)和严格相等运算符(===).它们都有缺点,
// 前者会自动转换数据类型,后者的NaN不等于自身,以及+0等于-0.javascript缺乏一种运算,
// 在所有环境中,只要两个值是一样的,它们就应该相等.
// es6提出"same-valus equality"(同值相等)算法,用来解决这个问题.
// Object.is就是部署这个算法的新方法.她用来比较两个值是否严格相等,与严格比较运算符(===)的行为基本一致.
Object.is("foo","foo"); // true
Object.is({},{}); // false
// 不同之处只有两个:一是 +0 不等于 -0,二是NaN等于自身.
// +0 === -0 // true
// NaN === NaN // false
Object.is(+0,-0); // false
Object.is(NaN,NaN); // true

// Object.assign() 可以复制对象,想不到我使用的场景,等有了再补充

// 属性的可枚举性和遍历
// 可枚举性
// 对象的每个属性都有一个描述对象(descriptor),用来控制该属性的行为.
// Object.getOwnPropertyDescriptor 方法可以获取该属性的描述对象.
// let obj = {foo:123};
// Object.getOwnPropertyDescriptor(obj,"foo");
// {
// 	value:123,
// 	writable:true,
// 	enumerable:true,
// 	configurable:true
// }
// 描述对象的 enumerable 属性,称为"可枚举性",如果该属性为false,就表示某些操作会忽略当前属性.
// 目前,有四个操作会忽略enumerable为false的属性.
// 	- for ... in 循环:只遍历对象自身的和继承的可枚举的属性.
//  - Object.keys():返回对象自身的所有可枚举的属性的键名.
//  - JSON.stringify():只串行化对象自身的可枚举的属性.
//  - Oject.assign():忽略enumerable为false的属性,只拷贝对象自身的可枚举的属性.

// 这四个操作之中,前三个是es5就有的,最后一个Object.assign()是es6新增的.
// 其中,只有for...in会返回继承的属性,其他三个方法都会忽略继承的属性,只处理对象自身的属性.
// 实际上,引入"可枚举性"(enumerable)这个概念的最初目的,就是让某些属性可以规避掉for...in操作,
// 不然所有内部属性和方法都会被遍历到.
// 比如,对象原型的toString方法,以及数组的length属性,就通过"可枚举性",从而避免被for...in遍历到.

Object.getOwnPropertyDescriptor(Object.prototype,"toString").enumerable;
// false

Object.getOwnPropertyDescriptor([],"length").enumerable;
// false

// 上面代码中,toSting和length属性的enumerable都是false,因此for...in不会遍历到这两个继承自原型的属性.
// 另外,es6规定,所有Class的原型的方法都是不可枚举的.

Object.getOwnPropertyDescriptor(class {foo (){}}.prototype,"foo").enumerable;
// false
// 总的来说操作中引入继承的会让问题复杂化,大多数时候,我们只关心对象自身的属性.所以,
// 尽量不要用for...in循环,而用Object.keys()代替.

// Object.keys()
// 方法会返回一个由一个给定对象的自身可枚举属性组成的数组,
// 数组中属性名的排列顺序和使用for...in遍历该对象时返回的顺序一致
// 语法 Object.keys(obj)
// obj 要返回其枚举自身属性的对象.
// 返回值 一个表示给定对象的所有可枚举属性的字符串数组.
// let obj = {"0":"a","1":"b","2":"c"};
// Object.keys(obj).forEach((key)=>{
// 	console.log(key,obj[key]);
// });

// 属性的遍历
// es6 一共有5中方法可以遍历对象的属性.
// 1.for...in
// 	循环遍历对象自身的和继承的可枚举属性
// 2.Object.keys(obj)
//  返回一个数组,包括对象自身的(不含继承的)所有可枚举属性(不含 Symbol 属性)的键名.
// 3.Object.getOwnPropertyNames(obj);
// 	返回一个数组,包含对象自身的所有属性(不包含Symbol属性,但是包含不可枚举属性)的键名.
// 4.Object.getOwnPropertySymbols(obj);
// 	返回一个数组,包含对象自身的所有Symbol属性的键名.
// 5.Reflect.ownKeys(obj)
// 	返回一个数组,包含对象自身的所有键名,不管键名是Symbol或字符串,也不管是否可枚举

// 遍历的次序规则.
// 	- 首先遍历所有数值键,按照数值升序排列.
// 	- 其次遍历所有字符串键,按照加入时间升序排列.
//  - 最后遍历所有Symbol键,按照加入时间升序排列.
Reflect.ownKeys({ [Symbol()]:0,b:0,10:0,2:0,a:0 });
// ["2","10","b","a",Symbol()]

// Object.getOwnPropertyDescriptors()
// es2017 引入了 Object.getOwnPropertyDescriptors方法,返回指定对象所有自身属性(非继承属性)的描述对象.
// const obj = {
// 	foo:123,
// 	get bar() { return "abc"; }
// }
// Object.getOwnPropertyDescriptors(obj);
// { foo:
//    { value: 123,
//      writable: true,
//      enumerable: true,
//      configurable: true },
//   bar:
//    { get: [Function: get bar],
//      set: undefined,
//      enumerable: true,
//      configurable: true } }
// 上面代码中,Object.getOwnPropertyDescriptors方法返回一个对象,所有原对象的属性名都是该对象的属性名,
// 对应的属性值就是该属性的描述对象.
// 该方法的实现非常容易
// function getOwnPropertyDescriptors(obj) {
// 	const result = {};
// 	for (let key of Reflect.ownKeys(obj)) {
// 		result[key] = Object.getOwnPropertyDescriptor(obj, key);
// 	}
// 	return result;
// }

// __proto__属性,Object.setPrototypeOf(),Object.getPrototypeOf()
// __proto__属性,用来读取或设置当前对象的prototype对象.
// 建议使用
//  Object.setPrototypeOf();    // 写操作
//  Object.getPrototypeOf();    // 读操作
//  Object.create();    // 生成操作

// Object.create() 方法会使用指定的原型对象及其属性去创建一个新的对象.
// 语法 Object.create(proto[, propertiesObject])
// 参数 proto 新创建对象的原型对象
// 参数 propertiesObject 可选,没有则指定为undefined,有则是要添加到新创建对象的属性
// (即其自身定义的属性，而不是其原型链上的枚举属性)
// 使用 Object.create 的 propertyObject参数
// let o;
// o = Object.create(Object.prototype, {
// 	// foo会成为所创建对象的数据属性
// 	foo: {
// 		writable:true,
// 		configurable:true,
// 		value: "hello"
// 	},
// 	// bar会成为所创建对象的访问器属性
// 	bar: {
// 		configurable: false,
// 		get: function() { return 10 },
// 		set: function(value) {
// 			console.log("Setting `o.bar` to", value);
// 		}
// 	}
// });

// Object.setPrototypeOf()
// Object.setPrototypeOf,用来设置一个对象的prototype对象,返回参数对象本身.
// 格式
// Object.setPrototypeOf(object,prototype)
// 用法
// const o = Object.setPrototypeOf({},null)
// 该方法等同于下面的函数
// function (obj,proto) {
// 	obj.__proto__ = proto;
// 	return obj;
// }
// 下面是一个例子.
// let proto = {};
// let obj = {x:10};
// Object.setPrototypeOf(obj,proto);
// proto.y = 20;
// proto.z = 40;
// obj.x // 10
// obj.y // 20
// obj.z // 40
// 上面的代码将proto对象设为obj对象的原型,所以从obj对象可以读取proto对象的属性.

// Object.getPrototypeOf()
// 该方法与Object.setPrototypeOf方法配套,用于去读一个对象的原型对象.
// Object.getPrototypeOf(obj);
// 例子
// function Rectangle() {
// }
// const rec = new Rectangle();
// Object.getPrototypeOf(rec) === Rectangle.prototype // true
// Object.setPrototypeOf(rec, Object.prototype);
// Object.getPrototypeOf(rec) === Rectangle.prototype // false

// super 关键字
// this关键字总是只想函数所在的当前对象,es6又新增了另一个类似的关键字super,指向当前对象的原型对象.

// const proto = {
// 	foo:"hello"
// };
// const obj = {
// 	find(){
// 		return super.foo;
// 	}
// };
// Object.setPrototypeOf(obj,proto);
// obj.find(); // hello

// 上面代码中,对象obj的find方法之中,通过super.foo引用了原型对象proto的foo属性.
// 注意,super关键字表示原型对象时,只能用在对象的方法之中,用在其他地方都会报错.
// 报错
// const obj = {
// 	foo:super.foo;
// }
// 报错
// const obj = {
// 	foo:() => super.foo;
// }
// 报错
// const obj = {
// 	foo:function () {
// 		return super.foo;
// 	}
// }

// 上面三种super的用法都会报错,因为javaScript引擎来说,这里的super都没有用在对象的方法之中.
// 第一种写法是super用在属性里面,第二种和第三种写法super用在一个函数里面,然后赋值给foo属性.
// 目前,只有对象方法的简写可以让javaScript引擎确认,定义的时对象的方法.

// const proto = {
// 	x:"hello",
// 	foo(){
// 		console.log(this.x);
// 	}
// };
// const obj = {
// 	x:"world",
// 	foo(){
// 		super.foo();
// 	}
// };
//
// Object.setPrototypeOf(obj,proto);
// obj.foo(); // world

// 上面代码中,super.foo指向原型对象proto的foo方法,但是绑定的this却还是当前对象obj,
// 因此输出的就是world.

// Object.keys()
// es5引入了Object.keys方法,返回一个数组,
// 成员时参数对象自身的(不含继承的)所有可遍历属性的键名.
// let obj = { foo:"bar" ,baz:42 };
// Object.keys(obj); // ["foo","baz"];

//es2017引入了跟Object.keys配套的Object.values和Object.entries,
// 作为遍历一个对象的补充手段,供for...of循环使用.

// let {keys,values,entries} = Object;
// let obj = { a:1,b:2,c:3 };
// for(let key of keys(obj)){
// 	console.log(key);   // "a","b","c"
// }
// for(let value of values(obj)){
// 	console.log(value);   // "1","2","3"
// }
// for(let [key,value] of entries(obj) ){
// 	console.log([key,value]); // ["a",1] ["b",2] ["c",3]
// }

// Object.values()
// Object.values 方法返回一个数组,成员是参数对象自身的(不含继承的)所有可遍历属性的键值.
// const obj = {foo:"bar",baz:42};
// Object.values(obj); // ["bar",42];

// Object.values只返回对象自身的可遍历属性.
// const  obj = Object.create({},{p:{value:42}});
// Object.values(obj); // []
// 上面代码中,Object.create方法的第二个参数添加的对象属性,如果不显示声明,
// 默认是不可遍历的,因为p的属性描述对象的enumerable默认是false,Object.values不会返回这个属性.
// 只要把enumerable改为true,Object.values就会返回属性p的值.
// const obj = Object.create({},{p:{
// 	value:42,
// 	enumerable:true
// }});
// Object.values(obj); // [42]

// Object.values会过滤属性名为Symbol值的属性.
// Object.values({[symbol()]:123,foo:"abc"}); // ["abc"]

// Object.entries
// Object.entries 方法返回一个数组,成员时参数对象自身的(不含继承的)所有可遍历属性的简直对数组.
// const obj = {foo:"bar",baz:42};
// Object.entries(obj); // [ ["foo","bar"],["baz",42]]
// 除了返回值不一样,该方法的行为与Object.values基本一致.

// 对象的扩展运算符
// es2018 将这个运算符(...)引入了对象.

// 解构赋值
// 对象的解构赋值用于从一个对象取值,相当于将目标对象自身的所有可遍历的(enumerable),
// 但尚未被读取的属性,分配到指定的对象上面.所有的键和它们的值,都会拷贝到新对象上面.
// let {x,y,...z} = {x:1,y:2,a:3,b:4};
// x; // 1
// y; // 2
// z; // {a:3,b:4}

// 上面代码中,变量z时解构赋值所在的对象.它获取等号右边的所有尚未读取的键(a和b),将它们连同值一起拷贝过来.

// 由于解构赋值要求等号右边是一个对象,所以如果等号右边时undefined或null,就会报错因为它们无法转为对象.
// let{x,y,...z} = null; //运行时报错
// let{x,y,...z} = undefined; //运行时报错

//解构赋值必须时最后一个参数,否则会报错.
// let {...x,y,z} = obj; // 句法错误
// let {x,...y,...z} = obj; // 句法错误

// 注意,解构赋值的拷贝时浅拷贝,即如果一个键的值时复合型的值(数组,对象,函数),
// 那么解构赋值拷贝的时这个值的引用,而不是这个值的副本.
// let obj = {a:{b:1}};
// let {...x} = obj;
// obj.a.b = 2;
// x.a.b // 2

// 上面代码中,x是解构赋值所在的对象,拷贝了对象obj的a属性.啊属性引用了一个对象,修改这个对象的值,
// 会影响到解构赋值对它的引用.

// 另外,扩展运算符的解构赋值,不能复制继承自原型对象的属性.
// let o1 = {a:1};
// let o2 = {b:2};
// Object.setPrototypeOf(o2,o1);
// let {...o3} = o2;
// o3 // {b:2};
// o3.a // undefined

// 上面代码中,对象o3复制了o2,但是只复制了o2自身的属性,没有复制它的原型对象o1的属性.

// const o = Object.create({x:1,y:2});
// o.z = 3;
// let {x,...{y,z}} = o;
// x //1
// y // undefined
// z // 3

// 上面代码中,变量x是单纯的解构赋值,所以可以读取对象o继承的属性;变量y和z时扩展运算符的解构赋值,
// 只能读取对象o自身的属性,所以变量z可以赋值成功,变量y取不到值.

// 解构赋值的一个用处,时扩展某个函数的参数,引入其他操作.
// function baseFunction({a,b}) {
// 	// ...
// }

// function wrapperFunction({x,y,...restConfig}) {
// 	// 使用x和y参数进行操作
// 	// 其余参数传给原始函数
// 	return baseFunction(restConfig);
// }

// 上面代码中,原始函数baseFunction接受a和b作为参数,
// 函数wrapperFunction在baseFunction的基础上进行了扩展,能够接受多余的参数,并且保留原始函数的行为.