import { __, sprintf } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

import { formatNumber } from '../../functions.js';

/**
 * Save function.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({
	attributes: {
		index,
		locale,
		date,
		quarter,
		earning,
		expense,
		tax,
		reference,
		postLink,
	},
}) {
	return (
		<tr
			data-date={date && new Date(date).toISOString().substring(0, 10)}
			data-quarter={quarter && sprintf(__('Q%s', 'billy'), quarter)}
			data-reference={reference && reference}
			data-earning={earning > 0 ? earning : null}
			data-expense={expense > 0 ? expense : null}
			data-tax={tax > 0 ? tax : null}
		>
			<th className="index" scope="row">
				{index && index}
			</th>
			<td
				className="date"
				data-value={
					date && new Date(date).toISOString().substring(0, 10)
				}
			>
				{date && new Date(date).toISOString().substring(0, 10)}
				<sub>{quarter && sprintf(__('Q%s', 'billy'), quarter)}</sub>
			</td>
			<td className="description">
				<InnerBlocks.Content />
			</td>
			<td className="reference">
				{reference && !postLink && reference}
				{reference && postLink && <a href={postLink}>{reference}</a>}
			</td>
			<td
				className="amount earning"
				data-value={earning > 0 ? earning : null}
			>
				{earning && earning > 0 && formatNumber(earning, locale)}
			</td>
			<td
				className="amount expense"
				data-value={expense > 0 ? expense : null}
			>
				{expense && expense > 0 && formatNumber(expense, locale)}
			</td>
			{tax && tax > 0 && (
				<td className="amount tax" data-value={tax}>
					{formatNumber(tax, locale)}
				</td>
			)}
		</tr>
	);
}
