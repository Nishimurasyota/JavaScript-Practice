let a = 0;
let b = true;
console.log(Boolean(a));
console.log(a == b);

if (a) {
	console.log('Hello');
} else {
	console.log('bye');
}

//aはfalsyな値のため、if分のelse以下が実行される
