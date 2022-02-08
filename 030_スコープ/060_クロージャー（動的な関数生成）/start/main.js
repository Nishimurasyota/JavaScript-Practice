function addNumberFac(num) {
	function addNumber(value) {
		return num + value;
	}
	return addNumber;
}

const add5 = addNumberFac(5);
console.log(add5);
const res = add5(10);
console.log(res);
