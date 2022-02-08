function incrementFac() {
	let num = 0;
	function increment() {
		num = num + 1;
		console.log(num);
	}
	return increment;
}

const increment = incrementFac();

increment();
increment();
increment();
increment();
