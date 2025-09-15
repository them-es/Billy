export const getCurrency = () => {
	return globalDataBilly.currency;
}

export const formatNumber = ( val, locale = undefined ) => {
	return val.toLocaleString( locale, { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 } );
}

export const percentToDecimal = val => {
	return parseFloat( val ) / 100;
}

export const getQuarter = (val) => {
	const date = new Date(val) || new Date();
	const q = [1, 2, 3, 4];

	return q[Math.floor(date.getMonth() / 3)];
};
