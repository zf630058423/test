
//函数防抖
function debounce(func, wait) {
  var timeId = null;
  return function (...args) {
    if (timeId) {
      timeId = null;
    }
    timeId = setTimeout(function () {
      func(...args);
    }, wait)
  }
}

//函数节流
//1.时间戳的形式来实现
/**
 * 
 * @param {*} func 要执行的函数
 * @param {*} wait 间隔的时间
 */
function throttle(func, wait) {
  var pre = 0;  //上一次时间 只不过一开始的时候为0
  return function (...args) {
    var now = Date.now();  //获取最新的时间戳
    if (now - pre > wait) {
      //进入此if ，说明时间已经到了等待时间那么长，可以执行一次
      fun(...args);
      //更新上一次的时间
      pre = now;
    }

  }
}

//2.使用定时器来实现 节流
function throttle(func, wait) {
  var timeId = null;  //上一次时间 只不过一开始的时候为0
  return function (...args) {
    if (!timeId) {
      func(...args);
      timeId = setTimeout(function () {
        timeId = null;
      }, wait);
    }

  }
}