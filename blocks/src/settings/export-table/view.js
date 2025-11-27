/**
 * Export HTML table to spreadsheet
 */
import { store, getElement } from "@wordpress/interactivity";
// import { __, sprintf } from "@wordpress/i18n";
// [TODO]: Remove workaround once @wordpress modules other than "interactivity" work!
const __ = wp.i18n.__;

store("billy", {
	actions: {
		exportTable: () => {
			const { ref } = getElement();

			const fileType = ref.value ?? "xlsx";

			let title = __( 'Billy Table', 'billy' );

			if (globalDataBilly.postTitle) {
				title = globalDataBilly.postTitle;
			}

			const table = document.querySelector('[id^="billy-"] table');

			// Prepend empty row
			let tr0 = document.createElement("tr");

			tr0.appendChild(document.createElement("td")); // Empty cell

			table.insertBefore(tr0, table.firstChild);

			// Prepend row with post date
			if (globalDataBilly.postDate) {
				let trDate = document.createElement("tr");
				const cellDate = document.createElement("td");
				cellDate.innerText = String( globalDataBilly.postDate );

				// Add the cells
				trDate.appendChild(cellDate);

				// Prepend the new rows
				table.insertBefore(trDate, table.firstChild);
			}

			const addressee = document.querySelector('.addressee');

			// Prepend row with contact field
			if (document.body.contains(addressee)) {
				let trAdressee = document.createElement("tr");
				const cellAddressee = document.createElement("td");
				cellAddressee.innerHTML = document.querySelector('.addressee').innerHTML.replace(/(<br\s*[\/]?>|<\/p>)/gi, ", ").replace(/<\/?[^>]+(>|$)/g, "").replace(/,\s*$/, "");

				// Add the cells
				trAdressee.appendChild(cellAddressee);

				// Prepend the new rows
				table.insertBefore(trAdressee, table.firstChild);
			}

			// Remove inner html tags within <td>
			Array.from(table.querySelectorAll('td')).forEach((td) => {
				td.innerHTML = td.innerHTML.replace(/(<br\s*[\/]?>|<\/p>)/gi, ", ").replace(/<\/?[^>]+(>|$)/g, "").replace(/,\s*$/, "");
			});

			let wb = XLSX.utils.table_to_book(table, { sheet: title.replace(/\W/g, "") });

			XLSX.writeFile(wb, `${title}.${fileType}`);
		},
	},
});
