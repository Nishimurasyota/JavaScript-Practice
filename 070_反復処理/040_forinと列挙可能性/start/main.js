const s = Symbol();

const obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
  [s]: "value4",
};
// Symbolは列挙対象にならない

// Object.prototype.method = function(){}
// Object.defineProperty(Object.prototype,"method",{
// 	enumerable: false
// })
// definePropertyでenumerableをfalseにすると列挙対象にならない

for (let key in obj) {
  // hasOwnPropertyで条件をつけた場合、propは定義されているがprototypeは継承したものなので該当しない
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]);
  }
}
