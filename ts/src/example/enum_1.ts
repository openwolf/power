//  数字枚举
enum Role {
	Developer,
	Owner,
	Guest,
}

// 字符串枚举
enum Message {
	Success = "成功",
	Fail = "失败",
}

const enum Meg {
	Success = "成功",
	Fail = "失败",
}

// 	个人理解，枚举类型很像是定义了一组有关联的常量，一种配置项

console.log(Role.Owner);	// 	1
console.log(Message.Fail);	// 	失败
console.log(Meg.Fail)
console.log(Meg.Success)
