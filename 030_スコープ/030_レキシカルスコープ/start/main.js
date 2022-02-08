let a = 2;
function fn() {
	let b = 1;
	function fn2() {
		let c = 3;
		console.log(b);
	}
	fn2();
}

function fn3() {
	let s = 5;
	fn();
}

fn3();
