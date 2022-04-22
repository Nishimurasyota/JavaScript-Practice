function Person(name, age) {
  this.name = name;
  this.age = age;
}

Object.prototype.hello = function () {
  console.log("Object: hello " + this.name);
};

const bob = new Person("Bob", 18);

const res = Object.prototype.hasOwnProperty("hello");
console.log(res);
// hasOwnPropertyはそのオブジェクトがメソッドを持っているかを判断する

// inはプロトタイプチェーンを遡って判断する
console.log("hello" in bob);
