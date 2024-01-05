let invoiceErrorArray = ['3', '1', '7', '5'];
let num = '7';

if (invoiceErrorArray.includes(num)) { 
  const index = invoiceErrorArray.indexOf(num);
  console.log("查找位置===:", index);
  let currentArray = invoiceErrorArray.splice(index, 1);
  console.log("currentArray===：", currentArray);
  console.log("invoiceErrorArray===:", invoiceErrorArray);
  
}

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2);
// console.log("fruits===：", fruits);


//实现一个获取对象任意属性值的方法
// const getAttribute = (object, path, defaultValue) => { 
   
// }

// const obj = { a: { b: { c: 100 } }, d: [{ f: 'abc' }] }
// getAttribute(obj, 'a.b.c', 0);  //===100
// getAttribute(obj, 'a.b.e', 0);  //===default
// getAttribute(obj,'d.0.f', 0);  //===abc