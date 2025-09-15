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

const formatCurrency = (val) =>
	`${globalDataBilly.currency} ${formatNumber(val)}`;

/**
 * Download TSV
 */
function downloadTsv(tsv, filename) {
	const tsvFile = new Blob([tsv], { type: 'text/tab-separated-values' });
	const downloadLink = document.createElement('a');

	downloadLink.download = filename;
	downloadLink.href = window.URL.createObjectURL(tsvFile);
	downloadLink.style.display = 'none';
	document.body.append(downloadLink);

	downloadLink.click();
	document.body.removeChild(downloadLink); // Clean up the DOM
}

function exportTableToTsv(selector, filename) {
	const tsv = [];
	const rows = document.querySelectorAll(
		`${selector} thead tr, ${selector} tbody tr`
	);

	rows.forEach((row) => {
		const cols = row.querySelectorAll('td, th');
		const rowData = Array.from(cols).map((col) => {
			// Get value (data-value or inner HTML). Strip HTML tags.
			return (
				col.dataset.value ||
				col.innerHTML
					.replace(/(<([^>]+)>)/gi, '')
					.replace(/(?:\r\n|\r|\n)/g, '')
			);
		});
		tsv.push(rowData.join('\t')); // Use tab character for TSV
	});

	downloadTsv(tsv.join('\n'), filename);
}

const tsvButton = document.querySelector('.tsv-button');
if (tsvButton) {
	tsvButton.addEventListener('click', function () {
		const billyWrapperId = this.closest('[id^="billy-"]').id;
		const filename = `${
			document.title ||
			document.querySelector('.wp-block-post-title').textContent
		}.tsv`;

		exportTableToTsv(`#${billyWrapperId} .table`, filename);
	});
}
