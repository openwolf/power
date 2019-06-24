class A {
	static fnName = 'A';
	constructor(name = 'aaa',sex = 'male'){
		this.name = name;
		this.sex = sex;
	}
	toString(){
		const val = `name: ${this.name}, sex: ${this.sex}`;
		console.log(val);
		return val;
	}
}
const aa = new A('a','female');
aa.toString();


// function addFN(target){
// 	target.show = function () {
// 		console.log(`I have props ['name','sex]`);
// 	};
// }
// @addFN
// class A {}
//
// A.show();


