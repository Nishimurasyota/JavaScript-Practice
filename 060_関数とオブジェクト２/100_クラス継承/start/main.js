class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log("hello " + this.name);
  }
}

class Japanese extends Person {
  constructor(name, age, gender) {
    super(name, age);
    // superで親クラスのコンストラクターを参照している
    this.gender = gender;
  }
  // helloはPersonでもあるのでextendsで継承されているため使用可能
  // 上書きしているのでJapanese側で定義したメソッドが実行される
  hello() {
    console.log("Konnichiwa " + this.name);
  }

  bye() {
    console.log("Sayonara " + this.name);
  }
}

const bob = new Person("Bob", 24);
console.log(bob);

const taro = new Japanese("taro", 21, "Male");
console.log(taro);
taro.hello();
