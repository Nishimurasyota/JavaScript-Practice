const array1 = [1, 2, 3, 4, 5];
const array2 = [...array1];

function sum(...args) {
  let ret = 0;
  for (let v of args) {
    ret = ret + v;
  }
  return ret;
}

const res = sum(1, 2, 3, 4);
console.log(res);

const obj1 = {
  props1: "value1",
  props2: "value2",
  props3: "value3",
};

Object.prototype[Symbol.iterator] = function* () {
  for (let key in this) {
    yield [key, this[key]];
  }
};

const array3 = [...obj1];

console.log(array3);
