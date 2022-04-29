const obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

Object.prototype[Symbol.iterator] = function () {
  const keys = Object.keys(this);
//   console.log(keys);
  let i = 0;
  let _this = this;
  return {
    next() {
      let key = keys[i++];
    //   console.log(_this);
      return {
        value: [key, _this[key]],
        done: i > keys.length,
      };
    },
  };
};

// const items = Object.entries(obj);
for (let [k,v] of obj) {
  console.log(k,v);
}
