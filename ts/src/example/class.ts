class Point {
	public x: number;
	public y: number;
	constructor(x: number, y: number) {
	this.x = x;
	this.y = y;
	}
	public getPosition() {
	return `( ${this.x}, ${this.y})`;
	}
}
const p = new Point(0, 1);
console.log(p);

class Parent {
	public name: string;
	protected type: string;
	private age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
		this.type = 'Parent';
	}
}
const parent = new Parent('aaa', 18);
console.log(parent);
console.log(parent.name);
// console.log(parent.age);

class Child extends Parent {
	constructor(name: string, age: number) {
		super(name, age);
		console.log(this.type);
	}
}

const c = new Child('ccc', 19);
console.log('c', c);
