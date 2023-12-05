// "use strict";

//1. 没有声明的变量不能使用
a = 10;
console.log(a);

//2.删除变量和不存在的属性会报错

//3.函数中相同的形参名会报错

//4.对象不能重名的属性

//5.禁止八进制
//一起可以使用0作为八进制的前缀
var i = 010;
console.log(i);

//6.函数内部this值为undefind

//7.不能使用保留字作为标识符
var public = 10;
console.log(public);
