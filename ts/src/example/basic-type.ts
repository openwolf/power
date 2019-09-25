//  布尔类型
let bool: boolean = true;
console.log('bool:', bool);

//  数值类型
let num: number = 123;
console.log('num:', num);

//  字符串类型
let str: string = 'abc';
str = `数值是${num}`;
console.log('str',str);

//  数组
//  [1,2,3]
//  写法1
let arr: number[] = [1,2,3];
console.log('arr',arr);
//  写法2
let arr2: Array<number> = [1,2,3];
console.log('arr2',arr2);
//  写法3
let arr3: (number | string)[] = [1,'2',3];
console.log('arr3',arr3);

//  元组类型
let tuple: [string,number,boolean];
tuple = ['a',0,true];

//  枚举类型    0,1,2
enum Roles {
    SUPER_ADMIN,
    ADMIN,
    USER
}
console.log('Roles.SUPER_ADMIN:',Roles.SUPER_ADMIN);
console.log('Roles.ADMIN:',Roles.ADMIN);
console.log('Roles.USER:',Roles.USER);

console.log('Roles[0]:',Roles[0]);
console.log('Roles[1]:',Roles[1]);
console.log('Roles[2]:',Roles[2]);

//  any类型,运行时才知道类型
let value: any;
value = 1;
console.log('vaule:',value);
value = true;
console.log('vaule:',value);
value = '0';
console.log('vaule:',value);

//  void类型  没有任何类型  undefined
const consoleText = (text: string): void =>{
    console.log('consoleText:',text);
};
let v: void;
v = undefined;
consoleText('abc');

//  null 和 undefined    任意内类型子类型
let u: undefined;
u = undefined;

let n: null;
n = null;

//  never类型 永远不存在的值的类型  报错和死循环  任意内类型子类型
const errorFunc = (message: string): never =>{
    throw  new Error(message);
};
const infiniteFunc = (): never =>{
    while (true){}
};

//  object
function getObject(obj: object): void {
    console.log(obj);
}
getObject({num:1});

//  类型断言    <string> (target as string) 断言两种写法
const getLength = (tatget: string | number): number=>{
    if((<string>tatget).length || (tatget as string).length === 0){
        return  (<string>tatget).length;
    }else {
        return tatget.toString().length;
    }
}