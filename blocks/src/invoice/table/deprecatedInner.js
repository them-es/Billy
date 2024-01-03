/**
 * Invoice Table (Inner): Deprecated
 * https://developer.wordpress.org/block-editor/developers/block-api/block-deprecation
 */

/**
 * WordPress dependencies
 */

import { __, sprintf } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import { RawHTML } from '@wordpress/element';

/**
 * Internal dependencies
 */

import { formatNumber, percentToDecimal } from '../../functions';

const deprecatedInvoiceInner = [
	// < v1.7.0 (202312)
	{
		attributes: {
			index: {
				type: 'number',
				default: '0',
			},
			currency: {
				type: 'string',
				default: '',
			},
			locale: {
				type: 'string',
				default: '',
			},
			description: {
				type: 'string',
				default: '',
			},
			taxRate: {
				type: 'string',
				default: '',
			},
			amount: {
				type: 'number',
				default: '',
			},
			amountIncl: {
				type: 'number',
				default: '',
			},
			quantity: {
				type: 'number',
				default: '',
			},
			quantityRate: {
				type: 'number',
				default: '',
			},
		},

		save: (props) => {
			const {
				className,
				attributes: { index, locale, taxRate, amount },
			} = props;

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
		},
	},
	// < v1.2.0 (202008)
	{
		attributes: {
			index: {
				type: 'number',
				default: '0',
			},
			currency: {
				type: 'string',
				default: '',
			},
			locale: {
				type: 'string',
				default: '',
			},
			description: {
				type: 'string',
				default: '',
			},
			taxRate: {
				type: 'string',
				default: '',
			},
			amount: {
				type: 'number',
				default: '',
			},
			amountIncl: {
				type: 'number',
				default: '',
			},
			quantity: {
				type: 'number',
				default: '',
			},
			quantityRate: {
				type: 'number',
				default: '',
			},
		},

		save: (props) => {
			const {
				className,
				attributes: { index, locale, description, taxRate, amount },
			} = props;

			return (
				<tr>
					<th scope="row">{index && index}</th>
					<td>{description && <RawHTML>{description}</RawHTML>}</td>
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
		},
	},
];

export default deprecatedInvoiceInner;
