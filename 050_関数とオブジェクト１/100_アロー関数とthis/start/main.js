window.name = 'k';

const person = {
	name: 'Tom',
	hello: () => {
		console.log('Hello ' + this.name);
	},
	bye: function () {
		console.log('Hello ' + this.name);
	},
};

person.hello();
person.bye();
