const a = {
	prop: 'Hello',
};

let { prop } = a;

prop = 'Bye';

// console.log(a, prop);

function fn(obj) {
	let { prop } = obj;
	prop = 'Bye';
	console.log(obj, prop);
}

// fn(a);

const c = {
	prop1: {
		prop2: 0,
	},
};

let { prop1 } = c;

let { prop2 } = prop1;
prop2 = 2;

console.log(c, prop2);
