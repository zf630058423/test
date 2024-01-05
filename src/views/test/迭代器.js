const arr = [1, 2, 3, 4, 5];

//迭代器 迭代数组
const iterator = {
  i: 0,
  next() {
    return {
      value: this.arr[i++],
      done: this.i >= this.arr.length
    }
  }
}

//通用迭代器
function createIterator(arr) {
  let i = 0;
  return {
    next() {
      let result = {
        value: arr[i],
        done: i >= arr.length
      }
      i++;
      return result;
    }
  }
}


let data = iterator.next();
while (!data.done) {
  data = iterator.next();
}

//创建一个斐波拉契数列的迭代器
//1 1 2 3 5 8 13 21 24 45...
function createFeiboIterator() {
  let prev1 = 1,
    prev2 = 1, //当前位置的前位和前2位
    n = 1;  //当前是第几位
  return {
    next() {
      let value;
      if (n <= 2) {
        value = 1;
      } else {
        value = prev1 + prev2;
      }
      const result = {
        value,
        done: false //
      };
      prev2 = prev1;
      prev1 = result.value;
      n++;
      return result;
    }
  }
}
