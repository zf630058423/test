//通过一个二维数组，可以快速的初始化一个map
var arr = [
  ['name', 'zhangsan'],
  ['age', 18],
  ['gender', 'male'],
  ['address', '深圳']
]
var m = new Map(arr);
console.log(m);
console.log(m.get('name'));

//反过来遍历
for (var i of m) {
  console.log(i);
}

//WeakMap不支持迭代对象forEach
var wm = new WeakMap();
wm.set(1, 2); //报错  键必须是对象
wm.set({ 'name': 'zhangsan' }, 3); //


//set基本用法