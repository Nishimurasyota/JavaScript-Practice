function a() {
	console.log('text');
}
function b() {
	a();
	console.log('b-text');
}
function c() {
	b();
	console.log('c-text');
}
c();
