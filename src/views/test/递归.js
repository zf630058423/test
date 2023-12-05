//阶乘
//委托  
function factorial(x) {
  if (x === 1) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

console.log(factorial(5));

//从1+100
function fun(x, y) {
  if (x === y) {
    return 1;
  } else {
    return y + fun(x, y - 1);
  }
}
console.log(fun(1, 100));

//递归第三个例子： 菲薄啦数列
//0、1、1、2、3、5、8、13、21、34 
function calc(x) {
  if (x === 1) {
    return 0;
  } else if (x === 2) {
    return 1;
  } else {
    return calc(x - 1) + calc(x - 2);
  }
}
console.log(calc(5));