var tMul = {
	'h': 3600,
	'm': 60,
	's': 1
}

export const secsToString = (secs) => {
	let str = '';
	let h = parseInt(secs / tMul.h);
	let m = parseInt(secs % tMul.h / tMul.m);
	let s = parseInt(secs % tMul.m);

	if(h != 0)
		str += h + 'h';
	if(m != 0 || h != 0) {
		str += m + 'm';
		if(s == 0)
			return str;
	}
	return str + s + 's';
}

export const stringToSecs = (string) => {
	let secs = 0, load = '';
	for(let i=0; i<string.length; i++){
		let chr = string.charAt(i);
		if(Object.keys(tMul).includes(chr)){
			secs += parseInt(load) * tMul[chr];
			load = '';
		}
		else
			load += chr;
	}
	return secs;
}
