class animal{
	constructor(name){
		this.name = name;
	}
	say(){
		console.log(this.name);
	}
	eat(){
		console.log("eat");
	}
	toString(){
		console.log("this name:" + this.name);
	}
};
const cat = new animal("mimi");
cat.say();
cat.eat();
cat.toString();

class Dog extends animal{
	constructor(name,type){
		super(name);
		this.type = type;
	}

	say(){
		super.say();
		console.log("my type is " + this.type);
	}
};
const dog = new Dog("ddd","adc");
dog.say();
dog.eat();
dog.toString();