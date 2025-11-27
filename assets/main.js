import * as XLSX from "xlsx";

window.XLSX = XLSX;

const getCurrency = () => globalDataBilly.currency;

const formatNumber = (val, locale = globalDataBilly.locale) => {
	return val.toLocaleString(locale, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
};

const formatNumberPlain = (val) => {
	return val.toLocaleString(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
};

const formatCurrency = (val) => {
	return `${globalDataBilly.currency} ${formatNumber(val)}`;
}
