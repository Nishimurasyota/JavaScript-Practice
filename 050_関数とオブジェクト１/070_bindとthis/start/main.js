window.name = 'John';

const person = {
	name: 'Tom',
	hello: function () {
		console.log('Hello ' + this.name);
	},
};
person.hello();

const helloTom = person.hello.bind(person);

function fn(ref) {
	ref();
}

fn(helloTom);

function a(name) {
	console.log('Hello ' + name);
}
const b = a.bind(null, 'Tim');
//bind()の第一引数にthisを第二引数にa()の引数を指定している

b();
