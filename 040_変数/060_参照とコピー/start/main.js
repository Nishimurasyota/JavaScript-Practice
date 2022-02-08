let a = 'Hello';
let b = a;

b = 'Bye';

// console.log(a);
// console.log(b);

let c = {
	prop: 'Hello',
};

let d = c;

c.prop = 'Bye';

console.log(c);
console.log(d);
