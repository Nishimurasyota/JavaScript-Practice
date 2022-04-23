function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  console.log("hello " + this.name);
};

const taro = new Person("taro", 20);
console.log(taro.name);

function Japanese(name, age) {
  Person.call(this, name, age);
}

Japanese.prototype = Object.create(Person.prototype);

const jiro = new Japanese("jiro", 12);
console.log(jiro);
jiro.hello();
