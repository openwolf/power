// es6在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法。
// Number.isFinite()用来检查一个数值是否为有限的(finite)。
console.log(Number.isFinite(15));
console.log(Number.isFinite(0.8));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite("foo"));
console.log(Number.isFinite({}));
console.log(Number.isFinite(null));
console.log(Number.isFinite(true));
console.log("-----------------------------------");
// Number.isNaN()用来检查一个值是否为NaN。
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(15));
console.log(Number.isNaN("15"));
console.log(Number.isNaN(true));
console.log(Number.isNaN(9/NaN));
console.log(Number.isNaN("asd"/0));
console.log(Number.isNaN("asd"/"asd"));
// 它们与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，
// 再进行判断，而这两个新方法只对数值有效，Number.isFinite()对非数值一律返回fasle,Number.isNaN()
// 只有对于NaN才返回true，非NaN一律返回false。
console.log("-----------------------------------");
console.log(Number.isInteger(25));
console.log(Number.isInteger(25.0000000000));
console.log(Number.isInteger("25"));
console.log(Number.isInteger(0));
console.log(Number.isInteger(true));
// Number.isInteger()用来判断一个值是否为整数。需要注意的是，
// 在Javascript内部，整数和浮点数是同样的储存方式，所以3和3.0被视为同一个值。

// Math.trunc()
// Math.trunc方法用于去除一个数的小数部分，返回整数部分。
console.log(Math.trunc(4.111111111111111));  // 4
console.log(Math.trunc(-3.33333333333333333333));  // -3
console.log(Math.trunc(1.0));  // 1
console.log(Math.trunc(0.23422111));  // 0

// 对于非数值，Math.trunc内部使用Number方法将其先转为数值。
console.log(Math.trunc("1.123"));
console.log(Math.trunc(true));
console.log(Math.trunc(false));
console.log(Math.trunc(null));
// 对于空值和无法截取整数的值，返回NaN。

