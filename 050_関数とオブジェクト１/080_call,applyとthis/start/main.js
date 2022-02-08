function a(name, name1) {
	console.log(`Hello ${name},Hello${name1}`);
}

const k = {
	name: 'Kanon',
};

const b = a.bind(k);

// b();

a.apply(null, ['Tim', 'Bob']);
// //第一引数にはthis、第二引数を配列で参照する
// a.call(tim, 'Tim');
// //第一引数にはthis、第二引数は独立しているものを参照している

// const arr = [1, 2, 3, 4, 5];
// const res = Math.max.apply(null, arr);
// console.log(res);
