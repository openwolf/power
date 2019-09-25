(() => {

	type AddNum = (a: number, b: number) => number;

	const addNum: AddNum = (a, b) => {
		return a + b;
	};

	const subNum: AddNum = (a, b) => {
		return a - b;
	}

	console.log('addNum', addNum(1, 2));
	console.log('subNum', subNum(3, 1));

	// 参数默认值
	const fun0 = (a: number, b = 2) => {
		return a + b;
	}

	console.log('fun0', fun0(1));
	console.log('fun0', fun0(1, 5));

	// 可选参数
	const fun1 = (a: number, b?: number) => {
		return b ? a + b : a;
	}

	console.log('fun1', fun1(10));
})()
