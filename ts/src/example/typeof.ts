
interface A {
	run(): void;
}

interface B {
	jump(): void;
}
// 交叉类型时类型的并集
const cc: A & B = {
	run(): void {
		return;
	},
	jump(): void {
		return;
	},
};

// 联合类型和字面量联合类型
// let a: number | string = 'a';
// let b: 'a' | 'b' | 'c';
// let c: 1 | 2 | 3;

interface Square {
	kind: 'square';
	size: number;
}
interface Rectangle {
	kind: 'rectangle';
	width: number;
	height: number;
}

type Shape = Square | Rectangle;

function area(s: Shape) {
	switch (s.kind) {
		// 通过一个属性给联合类型创建保护区
		case "rectangle":
			return s.height * s.width;
		case "square":
			return s.size * s.size;
		default:
			// 通过编辑器提示。如果后添加的类型没有进分支会报错
			return ((e: never) => {throw new Error(e); })(s);
	}
}

const objA = {
	a: 1,
	b: 2,
	c: 3,
};

function getValues<T, K extends keyof T>(obj: T, keys: K[]): Array<T[K]> {
	return keys.map((key) => obj[key]);
}

console.log(getValues(objA, ['a', 'b']));

export {};
