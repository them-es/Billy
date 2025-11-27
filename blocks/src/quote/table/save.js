import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { RawHTML } from '@wordpress/element';

import { formatNumber, percentToDecimal } from '../../functions.js';

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
		amountSubtotal,
		amountTotal,
		taxRates,
		taxRatesTotal,
	},
}) {
	const blockProps = useBlockProps.save({
		className: `quotetable-block alignwide${
			className ? ' ' + className : ''
		}`,
	});

	return (
		<div {...blockProps}>
			<table className="table wp-block-table">
				<thead>
					<tr>
						<th scope="col" data-label="title"></th>
						<th scope="col" data-label="description"></th>
						<th scope="col" data-label="amount"></th>
						{taxRates && taxRatesTotal > 0 && (
							<th scope="col" data-label="tax"></th>
						)}
					</tr>
				</thead>
				<tbody>
					<InnerBlocks.Content />
				</tbody>
				<tfoot>
					{amountSubtotal > 0 && (
						<tr className="subtotal">
							<th
								colSpan="2"
								data-label={
									amountTotal > amountSubtotal
										? 'subtotal'
										: 'total'
								}
							></th>
							<td
								colSpan={
									taxRates && taxRatesTotal > 0 ? '2' : null
								}
							>
								{sprintf(
									__('%1$s %2$s', 'billy'),
									currency,
									formatNumber(amountSubtotal, locale)
								)}
							</td>
						</tr>
					)}
					{taxRates && taxRatesTotal > 0 && (
						<tr className="taxrates">
							<th colSpan="2" data-label="tax"></th>
							<td
								colSpan={
									taxRates && taxRatesTotal > 0 ? '2' : null
								}
							>
								{
									// Sort by Taxrate
									JSON.parse(taxRates)
										.sort(
											(a, b) =>
												percentToDecimal(a.taxRate) -
												percentToDecimal(b.taxRate)
										)
										.map((total, i) => {
											if (total.amount > 0) {
												return (
													<RawHTML key={i}>
														{sprintf(
															__(
																'%1$s %2$s %3$s',
																'billy'
															),
															currency,
															formatNumber(
																total.amount,
																locale
															),
															'<small>(' +
																total.taxRate +
																')</small>' +
																'<br>'
														)}
													</RawHTML>
												);
											}
										})
								}
							</td>
						</tr>
					)}
					{amountTotal > amountSubtotal && (
						<tr className="total">
							<th colSpan="2" data-label="total"></th>
							<td
								colSpan={
									taxRates && taxRatesTotal > 0 ? '2' : null
								}
							>
								{sprintf(
									__('%1$s %2$s', 'billy'),
									currency,
									formatNumber(amountTotal, locale)
								)}
							</td>
						</tr>
					)}
				</tfoot>
			</table>
		</div>
	);
}
