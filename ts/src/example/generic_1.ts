type TypeFn = <T> (value: T) => T;

let showType: TypeFn = (v) => {
	console.log('showType', v);
	return v;
}

showType<number>(1);
showType('a');