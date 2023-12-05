var obj = {};
// obj.x = 100; //数据属性

//接下来，我们通过属性描述符的形式来添加属性
//属性描述符是一个对象，作为第三个参数传入
Object.defineProperty(obj, 'x', {
  value: 100,
  writable: true,  //设置属性值是否可写
  configurable: true  //为false禁止配置
});
console.log(obj.x);

//获取某一个对象的属性的属性描述符
const test = Object.getOwnPropertyDescriptor(obj, 'x');
console.log(test);


// getter 和 setter 示例
var obj2 = Object.create(Object.prototype, {
  //私有属性，不对外
  _x: { //数据属性
    value: 1,  //初始值
    writable: true,
  },
  //对外的，外部可以访问和修改
  x: {  //访问器属性
    //通过getter 和 setter 访问器来访问和设置属性值，可以做一些限制
    get: function () {
      return this._x; //返回_x属性值
    },
    set: function (value) {
      if (typeof value != "number") {
        throw new Error('请输入数字');
      }
      this._x = value; //赋值
    }
  }
});
console.log(obj2.x); //1
obj2.x = 100;
console.log(obj2.x); //100
// obj.x = "2"// 抛出异常

//对上面obj2的简写
// var obj3 = {
//   _x: 1,
//   get x(){
//     return this._x;
//   },
//   set x(value){
//     if (typeof value != "number") {
//       throw new Error('请输入数字');
//     }
//     this._x = value; //赋值
//   }
// };
