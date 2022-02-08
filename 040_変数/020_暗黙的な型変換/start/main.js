function printTypeof(val) {
	console.log(typeof val, val);
}

let a = 3;

printTypeof(a);

let b = parseInt('1') + a;

printTypeof(b);

let c = 15 - b;

printTypeof(c);

let d = c - null;

printTypeof(d);

let e = d - true;

printTypeof(e);
