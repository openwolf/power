interface BookList {
	title: string;
	price: number;
	author: string;
}

interface ResData {
	data: BookList[];
	status: number;
}

function Render(d: ResData) {
	d.data.forEach((v) => {
		console.log('title:', v.title, 'price', v.price, 'author:', v.author);
	});
}

let data = {
	status: 0,
	data: [{
		title: 'js算法',
		price: 12.3,
		author: '不知道',
	}, {
		title: '犀牛书',
		price: 60.0,
		author: '阿里翻译',
	}],
};

Render(data)

// 不确定类型属性个数时，可使用索引类型的接口
// 可索引类型的接口，可以用数字/字符串做索引

interface StrArray {
	[i: number]: string;
}

let names: StrArray = ['aaa', 'bbb', 'ccc'];

interface AddArray {
	[k: string]: string;
}

let addData: AddArray = {
	home: '南京',
	company: '暂无',
	district: '秦淮区',
};

console.log(addData)