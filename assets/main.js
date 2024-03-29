const getCurrency = () => {
	return globalDataBilly.currency;
};

const formatNumber = (val, l = globalDataBilly.locale) => {
	return val.toLocaleString(l, {
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
	return globalDataBilly.currency + ' ' + formatNumber(val);
};

/**
 * Download TSV
 */

function download_tsv(tsv, filename) {
	var tsvFile, downloadLink;

	// TSV file blob
	tsvFile = new Blob([tsv], { type: 'text/tab-separated-values' });

	// Download link
	downloadLink = document.createElement('a');
	downloadLink.download = filename;
	downloadLink.href = window.URL.createObjectURL(tsvFile);
	downloadLink.style.display = 'none';
	document.body.append(downloadLink);

	downloadLink.click();
}

function export_table_to_tsv(html, filename) {
	var tsv = [],
		rows = document.querySelectorAll('.table thead tr, .table tbody tr');

	for (var i = 0; i < rows.length; i++) {
		var row = [],
			cols = rows[i].querySelectorAll('td, th');

		for (var j = 0; j < cols.length; j++) {
			row.push(
				cols[j].dataset.value
					? cols[j].dataset.value
					: cols[j].innerHTML.replace(/<[^>]*>?/gm, ' ')
			); // Get value (data-value or inner HTML). Strip HTML tags.
		}

		tsv.push(row.join('	'));
	}

	// Create download link
	download_tsv(tsv.join('\n'), filename);
}

if (document.querySelector('.tsv-button') !== null) {
	document
		.querySelector('.tsv-button')
		.addEventListener('click', function () {
			var html = document.querySelector('.table').outerHTML;

			export_table_to_tsv(
				html,
				document.querySelector('#billy-accounting h1').innerHTML +
					'.tsv'
			);
		});
}
