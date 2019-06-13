// const getArray = <T>(value: T, times: number = 5): T[] => {
// 	return	new Array(times).fill(value);
// };

// console.log(getArray<number>(5));
// console.log(getArray<string>('aaa'));

const getList = <T, U>(a: T, b: U, n: number = 3): Array<[T, U]> => {
	return new Array(n).fill([a, b]);
};
console.log(getList(1, 'a'));
console.log(getList<string, number>('aaa', 123));

interface LengthType {
	length: number;
}

type GetArr = <T extends LengthType>(a: T, times?: number) => T[];
let getArr0: GetArr = (a , n = 2) => {
	return new Array(n).fill(a);
};
console.log(getArr0({
	length: 0,
}));

const getVal0 = <T, K extends keyof T>(obj: T, key: K) => {
	return obj[key];
};

let val0 = {
	a: 'a',
	b: 'b',
};
console.log(getVal0(val0, 'a'));
