function fn() {
  let b = 1;
  const fn1 = new Function("a", "b", "return a + b");
  return fn1;
}

fn.test = "test";
console.log(fn.test);

const f = fn();
console.log(f(1, 2));

function a(a, b) {
  console.log(a, b);
}
