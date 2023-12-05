//
function add(x, y) {
  return x + y;
};

//柯里化 最大的好处是固定参数
function add2(x) {
  return function (y) {
    return x + y;
  }
}
add2(1)(2);


//封装一个通用的柯里化函数  固定参数
function curry() {
  var fn = arguments[0]; //获取要执行的函数
  var args = [].slice.call(arguments, 1);  //获取传递的参数，构成一个参数数组
  // var args = Array.prototype.slice.call(arguments,1); //
  if (arg.length === fn.length) {
    return fn.apply(this, args);
  }
  //参数不够向外界返回的函数
  function _curry() {
    //推入之前判断
    //将新接收到的参数推入到参数数组中
    args.push(...arguments);
    if (arg.length === fn.length) {
      return fn.apply(this, args);
    }
    return _curry;
  }
  return _curry;
}

function add3(a, b, c) {
  return a + b + c;
}

//测试
console.log(curry(add3)(1)(2)(3));
console.log(curry(add3, 1, 2)(3));
console.log(curry(add3, 1, 2, 3));

//封装一个通用的柯里化函数  不固定参数
function add4() {
  //拿到第一次调用的所有的参数
  var args = Array.prototype.slice.call(arguments);
 
  //该函数会被返回，该函数的作用是继续收集参数
  function _adder() {
    args.push(...arguments);
    return _adder;
  }

  //当调用toString方法的时候，说明我不要再接收参数了
  //执行计算操作
  _adder.toString = function () {
    return args.reduce((a, b) => a + b);
  }
  return _adder;
}
console.log(add4(1)(2)(3).toString());
console.log(add4(1, 2, 3)(4).toString());
console.log(add4(1)(2)(3, 4, 5)(6).toString());
