//深拷贝共用方法 递归
function deepClone(target) {
  var result;
  if (typeof target === 'object') {
    if (Array.isArray(target)) {
      result = [];
      for (var i in target) {
        result.push(deepClone(target[i]));
      }
    } else if (target === null) {
      result = null;
    } else if (target.constructor === RegExp || target.constructor === Date) {
      result = target;
    } else {
      result = {}; //
      for (var i in target) {
        result[i] = deepClone(target[i]);
      }
    }
  } else {
    result = target;
  }
}