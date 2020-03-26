export const getCurrency = () => {
	return globalDataBilly.currency;
}

export const formatNumber = ( val, l = undefined ) => {
	return val.toLocaleString( l, { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 } );
}

export const percentToDecimal = val => {
	return parseFloat( val ) / 100;
}

export const getQuarter = d => {
	d = new Date( d ) || new Date();
	var q = [ 1, 2, 3, 4 ];
	return q[ Math.floor( d.getMonth() / 3 ) ];
}
