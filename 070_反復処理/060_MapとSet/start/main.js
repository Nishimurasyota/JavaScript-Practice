const map = new Map();
const key1 = {};

map.set(key1, "value1");
// console.log(map.get(key1));

const key2 = function () {};
map.set(key2, "value2");
// console.log(map.get(key2));

for (const v of map) {
  //   console.log(v);
}

const s = new Set();
s.add(key1);
s.add(key2);

console.log(s.has(key2));

for (let k of s) {
  console.log(k);
}
