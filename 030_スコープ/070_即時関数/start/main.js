let c = (function () {
	console.log('called');
	let privateVal = 1;
	let publicVal = 2;

	function privateFn() {
		console.log('private Function');
	}

	function publicFn() {
		console.log('public Function');
	}

	return {
		pFn: publicFn,
		pVal: publicVal,
	};
})();

c.pFn();

console.log(c.pVal);
