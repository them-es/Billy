import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { formatNumber } from '../../functions.js';

/**
 * Save function.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({
	className,
	attributes: {
		currency,
		locale,
		amountTotalEarnings,
		amountTotalExpenses,
		amountTaxEarnings,
		amountTaxExpenses,
	},
}) {
	const blockProps = useBlockProps.save({
		className: `accountingtable-block alignwide${
			className ? ' ' + className : ''
		}`,
	});

	return (
		<div {...blockProps}>
			<table className="table wp-block-table">
				<thead>
					<tr>
						<th
							scope="col"
							className="sort"
							data-sort="index"
							data-label="title"
						></th>
						<th
							scope="col"
							className="sort"
							data-sort="date"
							data-label="date"
						></th>
						<th
							scope="col"
							className="sort"
							data-sort="description"
							data-label="description"
						></th>
						<th
							scope="col"
							className="sort"
							data-sort="reference"
							data-label="reference"
						></th>
						<th
							scope="col"
							className="sort earnings"
							data-sort="earning"
							data-label="earnings"
						></th>
						<th
							scope="col"
							className="sort expenses"
							data-sort="expense"
							data-label="expenses"
						></th>
						{(amountTaxEarnings > 0 || amountTaxExpenses > 0) && (
							<th
								scope="col"
								className="sort"
								data-sort="tax"
								data-label="taxes"
							></th>
						)}
					</tr>
				</thead>
				<tbody className="list">
					<InnerBlocks.Content />
				</tbody>
				<tfoot>
					{(amountTotalEarnings > 0 || amountTotalExpenses > 0) && (
						<tr>
							<th colSpan="4" data-label="earnings-expenses"></th>
							<td className="sum earnings">
								{sprintf(
									__('%1$s %2$s', 'billy'),
									currency,
									formatNumber(amountTotalEarnings, locale)
								)}
							</td>
							<td className="sum expenses">
								{sprintf(
									__('%1$s %2$s', 'billy'),
									currency,
									formatNumber(amountTotalExpenses, locale)
								)}
							</td>
						</tr>
					)}
					{(amountTotalEarnings > 0 || amountTotalExpenses > 0) && (
						<tr>
							<th colSpan="4" data-label="profit"></th>
							<td colSpan="2" className="profit">
								{sprintf(
									__('%1$s %2$s', 'billy'),
									currency,
									formatNumber(
										amountTotalEarnings -
											amountTotalExpenses,
										locale
									)
								)}
							</td>
						</tr>
					)}
					{(amountTaxEarnings > 0 || amountTaxExpenses > 0) && (
						<tr>
							<th
								colSpan="4"
								data-label="taxes-earnings-expenses"
							></th>
							<td className="sum tax-earnings">
								{sprintf(
									__('%1$s %2$s', 'billy'),
									currency,
									formatNumber(amountTaxEarnings, locale)
								)}
							</td>
							<td className="sum tax-expenses">
								{sprintf(
									__('%1$s %2$s', 'billy'),
									currency,
									formatNumber(amountTaxExpenses, locale)
								)}
							</td>
						</tr>
					)}
				</tfoot>
			</table>
		</div>
	);
}
