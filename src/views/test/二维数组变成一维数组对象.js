const myArray = [
  [
    { "name": "NoTaxUnitPrice", "value": "" },
    { "name": "Unit", "value": "" },
    { "name": "Num", "value": "1" },
    { "name": "TaxUnitPrice", "value": "100" },
    { "name": "Money", "value": "100" },
    { "name": "NoTaxMoney", "value": "" },
    { "name": "NameGoodsTaxableService", "value": "sdjf" },
    { "name": "Specification", "value": "" },
    { "name": "TaxRate", "value": "0.03" }
  ],
  [
    { "name": "NoTaxUnitPrice", "value": "" },
    { "name": "Unit", "value": "" },
    { "name": "Num", "value": "1" },
    { "name": "TaxUnitPrice", "value": "200" },
    { "name": "Money", "value": "100" },
    { "name": "NoTaxMoney", "value": "" },
    { "name": "NameGoodsTaxableService", "value": "sdjf" },
    { "name": "Specification", "value": "" },
    { "name": "TaxRate", "value": "0.03" }
  ]
];



let result = [];
for (let i = 0; i < myArray.length; i++) {
  let myData = myArray[i];
  let row = {};
  for (let j = 0; j < myData.length; j++) {
    for (let attr in myData[j]) {
      row[`${myData[j].name}`] = myData[j][attr]
    }
  }
  result.push(row);
}

console.log("result=====:",result);
// for (let i = 0; i < myArray.length; i++) { 
//   let myList = myArray[i];
//   for (let j = 0; j < myList.length; j++) { 
//     console.log("j===:", myList[j].name);
//     let taxRate = myList[j].TaxRate; //税率
//     let money = myList[j].Money;  //金额含税
//     let noTaxMoney = myList[j].NoTaxMoney;
//   }
// }