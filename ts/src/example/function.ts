// function addNum(a: number, b: number): number {
// 	return a + b;
// }
//
// console.log(addNum(1, 3));
// 定义函数类型

// let addNum: (a: number, b: number) => number;
// addNum = (a, b) => {
// 	return a + b;
// };
type AddNum = (a: number, b: number) => number;

let fn0: AddNum = (a, b) => {
	console.log('type: AddNum', a + b);
	return a + b;
};
// fn0('aa', 1);
fn0(0, 10);

// 可选参数
type AddNum2 = (a: number, b: number, c?: number) => number;
// 默认值
let fn1 = (a: number, b: number = 1): number => {
	return	a + b;
};

