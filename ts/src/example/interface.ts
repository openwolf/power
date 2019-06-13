interface NameInfo {
	firstName: string;
	lastName: string;
}
function  getFullName({ firstName, lastName }: NameInfo): string {
	return `${firstName} ${lastName}`;
}
console.log(getFullName({firstName: 'open', lastName: 'wolf'}));
let name: string = getFullName({firstName: 'open', lastName: 'wolf'});
console.log(name);

interface Vegetable {
	color?: string;
	readonly type: string;
	[prop: string]: any;
}
function getVegetable({ color, type}: Vegetable) {
	return `A ${color ? (color + ' ') : ''}${type}`;
}

console.log(getVegetable({
	type: 'tomato',
	color: 'red',
}));
console.log(getVegetable({type: 'tomato'}));

const vagetableInfo = {
	type: 'tomato',
	color: 'red',
	size: 2,
}

console.log(getVegetable({
	type: 'tomato',
	color: 'red',
	size: 2,
}));

// console.log(getVegetable(vagetableInfo));

// vegetableObj.type = 'carrot';

// interface AddInter {
// 	(a: number,b: number): number
// }

type AddInter = (a: number, b: number) => number;

// const add: AddInter = (a, b) => {
// 	return a + b;
// }
// console.log(add(1, 2));
