const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// 配列にfalsyな値がある場合は使える（表示される）
// let i = 0;
// while (i < array.length) {
//   console.log(array[i]);
//   i++;
// }

// 配列にfalsyな値がある場合はfalsyな値の前までが表示される
let v,i = 0;
while ((v = array[i++])) {
  console.log(v);
}
