window.name = 'John';

const person = {
	name: 'Tom',
	hello: function () {
		console.log('Hello ' + this.name);
		a();
	},
};

person.hello();

// const ref = person.hello;
// ref();

function a() {
	console.log('Hello ' + this.name);
}
