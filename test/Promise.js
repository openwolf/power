function fn(){
	return new Promise((res,rej)=>{
		rej('no');
	});
}
module.exports = fn;