function F(a, b) {
  this.a = a;
  this.b = b;
  //   return { a: 1 };
}

F.prototype.c = function () {};

const instance = new F(2, 3);
console.log(instance instanceof F);
console.log(instance.__proto__);
console.log(F.prototype);
console.log(instance.__proto__ === F.prototype);
