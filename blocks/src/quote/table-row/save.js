import { __, sprintf } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
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
	attributes: { index, locale, taxRate, amount },
}) {
	return (
		<tr>
			<th scope="row">{index && index}</th>
			<td>
				<InnerBlocks.Content />
			</td>
			<td>{amount && formatNumber(amount, locale)}</td>
			{taxRate && percentToDecimal(taxRate) * amount > 0 && (
				<td>
					<RawHTML>
						{sprintf(
							__('%1$s %2$s', 'billy'),
							formatNumber(
								percentToDecimal(taxRate) * amount,
								locale
							),
							'<small>(' + taxRate + ')</small>'
						)}
					</RawHTML>
				</td>
			)}
		</tr>
	);
}
