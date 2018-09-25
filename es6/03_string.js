// 字符串的扩展
// 4.字符串遍历器接口
// es6为字符串添加了遍历器接口，使得字符串可以被 for...of循环遍历。
let str = "hello world";
for (let s of str){
    // console.log(s);
}

// includes(),startsWith(),endsWith()
let s = "hello world!";
console.log(s.startsWith("hello"));
console.log(s.endsWith("!"));
console.log(s.includes("hello"));

// 这三个方法都支持第二个参数，表示开始搜索的位置。
console.log(s.startsWith("world",6));
console.log(s.endsWith("hello",5));
console.log(s.includes("hello",6));

// 上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。
// 它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。

// repaet()方法返回一个新字符串，表示将原字符串重复n次
console.log("x".repeat(3));
console.log("world".repeat(2));
console.log("heiheihei".repeat(0));

// padStart(),padEnd().es2017引入了字符串补全长度的功能。
// 如果某个字符串不够指定长度，会在头部或者尾部补全。
console.log("x".padStart(10,"a"));
console.log("x".padStart(6,"ab"));
console.log("x".padEnd(6,"abaa"));
// padStart和padEnd一共接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。

// 如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。
console.log("xxx".padStart(2,"aaaa"));

// 如果用来补全的字符串与原字符串，两者的长度之和超过了最顶的最小长度，则会街去超出位数的补全字符串
console.log("abc".padStart(10,"0123456789"));

// 如果省略第二个参数，默认使用空格补全长度。
console.log("x".padStart(4));

//模板字符串，是增强版的字符串，用反引号（`）标识。
//它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
let s0 = `In Javascript '\n' is a line-feed.`;
console.log(s0);
let s1 = `In Javascript this is not legal`;
console.log(s1);
console.log(`string text line 1
string text line 2`);
let [name,time] = ["Bob","today"];
let s2 = `Hello ${name} ,how are you ${time}`;
console.log(s2);
// 如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。
let s3 = `\`Yo\` World`;
console.log(s3);
let s4 = `<ul>
    <l1></l1>
    <l1></l1>
<ul>`;
console.log(s4);
//上面的代码中，所有模板字符串的空格和换行，都是被保留的。
//如果你不想要这个换行，可以使用trim方法消除它。
let s5 = `
<ul>
    <l1></l1>
    <l1></l1>
<ul>`.trim();
console.log(s5);
// 模板字符串中嵌入变量，需要将变量名写在${}之中。
// 大括号内部可以放入任意的Javascript表达式，可以进行运算，以及引用对象属性。
let obj = {x:1,y:2};
console.log(`${obj.x + obj.y}`);