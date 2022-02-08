function fn() {
	const a = arguments[0];
	const b = arguments[1];
	return b;
}

const a = fn(1, 4);
console.log(a);
