// interface A {
// 	name: number;
// }
// let a: A = {
// 	name: 1,
// };
// function fn0(): A {
// 	let a = null;
//
// 	return a;
// }

// function printLabel(labelledObj: { label: string }) {
// 	console.log(labelledObj.label);
// }
//
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// interface LabelledValue {
// 	label: string;
// }
//
// function printLabel(labelledObj: LabelledValue) {
// 	console.log(labelledObj.label);
// }
//
// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);

interface A {
	value: number;
}

function  toArray(n: number[]): A[] {
	const result = [];
	for (const num of n) {
		result.push({
			value: num,
		});
	}
	return result;
}
toArray([1, 2, 3, 4, 5, 6]);
