function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function () {
    console.log("Own: hello " + this.name);
  };
}

Person.prototype.hello = function () {
  console.log("P: hello " + this.name);
};

Object.prototype.hello = function () {
  console.log("O: hello " + this.name);
};

// 実行する際に優先順位があり、浅い順から遡って探すようになっている

const bob = new Person("Bob", 18);
bob.hello();

// hasOwnPropertyはbobにもPersonにもなくてObjectにしかない
// プロトタイプチェーンを遡って検索して使用している
const result = bob.hasOwnProperty("name");
console.log(result);
