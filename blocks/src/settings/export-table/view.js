/**
 * Export HTML table to spreadsheet
 */
import { store, getElement } from '@wordpress/interactivity';
// import { __, sprintf } from "@wordpress/i18n";
// [TODO]: Remove workaround once @wordpress modules other than "interactivity" work!
const __ = wp.i18n.__;

// Clean HTML: string.cleanHtmlText();
String.prototype.cleanHtmlText = function () {
	return this.replace(/(<br\s*[\/]?>|<\/p>)/gi, ', ') // Replace breaks/paragraphs with commas
		.replace(/<\/?[^>]+(>|$)/g, '') // Strip remaining HTML tags
		.replace(/,\s*$/, ''); // Remove trailing commas
};

store('billy', {
	actions: {
		exportTable: () => {
			const { ref } = getElement();

			const fileType = ref.value ?? 'xlsx';

			const title =
				globalDataBilly?.postTitle || __('Billy Table', 'billy');

			// Target the original table
			const originalTable = document.querySelector(
				'[id^="billy-"] table'
			);

			if (originalTable) {
				// Clone the table to avoid mutating the live UI
				const table = originalTable.cloneNode(true);

				// Addressee section
				const addressee = document.querySelector('.addressee');
				if (addressee) {
					const trAdressee = document.createElement('tr');
					const cellAddressee = document.createElement('td');

					// Clean table cell
					cellAddressee.innerText =
						addressee.innerHTML.cleanHtmlText();

					trAdressee.appendChild(cellAddressee);
					table.insertBefore(trAdressee, table.firstChild);
				}

				// Prepend row with post date
				if (globalDataBilly?.postDate) {
					const trDate = document.createElement('tr');
					const cellDate = document.createElement('td');
					cellDate.innerText = String(globalDataBilly?.postDate);

					trDate.appendChild(cellDate);
					table.insertBefore(trDate, table.firstChild);
				}

				// Prepend empty row
				const tr0 = document.createElement('tr');
				tr0.appendChild(document.createElement('td'));
				table.insertBefore(tr0, table.firstChild);

				// Clean all table cells
				table.querySelectorAll('td').forEach((td) => {
					td.innerText = td.innerHTML.cleanHtmlText();
				});

				// Generate and download file
				const wb = XLSX.utils.table_to_book(table, {
					sheet: title.replace(/\W/g, ''),
				});

				XLSX.writeFile(wb, `${title}.${fileType}`);
			} else {
				console.warn(__('Table not found for export.', 'billy'));
			}
		},
	},
});
