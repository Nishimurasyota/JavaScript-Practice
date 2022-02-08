function F(a, b) {
	this.a = a;
	this.b = b;
	// return {};
}

// F.prototype.c = function () {};

// const instance = new F(1, 2);
// console.log(instance);

// function Fn(a, b) {
// 	this.a = a;
// 	this.b = b;
// 	return 1;
// }

// Fn.prototype.c = function () {};

// const instance2 = new Fn(1, 2);
// console.log(instance2);
//consoleではFn{1,2}が出力される

function newOpe(C, ...args) {
	//argsで可変長の引数を設定する
	const _this = Object.create(C.prototype);
	console.log(_this);
}

const instance3 = newOpe(F, 1, 2, 3);
console.log(instance3);
