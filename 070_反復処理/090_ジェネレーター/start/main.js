// function* gen(){
//     yield 1;
//     yield 2;
//     return 3;
// }

// const it = gen();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

function* genIterator(max = 20) {
  let i = 10;

  while (i < max) {
    yield i++;
  }
  return;
}

const it = genIterator(20);
let a = it.next();

while (!a.done) {
  console.log(a.value);
  a = it.next();
}
