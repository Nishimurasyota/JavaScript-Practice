function Hello(name) {
	console.log(`Hello ${name}`);
}

function fn(cb) {
	cb('kanon');
}
//fnの引数に関数Helloが入ることでcb()で実行する

fn(Hello);

setTimeout(Hello, 5000);
