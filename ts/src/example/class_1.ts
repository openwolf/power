interface Eat {
	eat(food: string): void;
}

class DogA implements Eat {
	public eat(food: string): void {
		console.log('dog eat: ' + food);
	}
}

class CatA implements Eat {
	public eat(food: string): void {
		console.log('cat eat:' + food);
	}
}

const dog0 = new DogA();
const cat0 = new CatA();

let eatGoods: Eat[] = [];

eatGoods.push(dog0);
eatGoods.push(cat0);

// 多态案例
eatGoods.forEach((v) => {
	v.eat('宠物饲料');
});
// dog eat: 宠物饲料
// cat eat:宠物饲料
