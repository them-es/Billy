/**
 * Accounting Table (Inner): Deprecated
 * https://developer.wordpress.org/block-editor/developers/block-api/block-deprecation
 */

import { __, sprintf } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

import { formatNumber, percentToDecimal } from '../../functions.js';

const deprecated = [
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
			date: {
				type: 'string',
				default: '',
			},
			quarter: {
				type: 'number',
				default: '',
			},
			reference: {
				type: 'string',
				default: '',
			},
			earning: {
				type: 'number',
				default: '',
			},
			expense: {
				type: 'number',
				default: '',
			},
			tax: {
				type: 'number',
				default: '',
			},
			postUUID: {
				type: 'string',
				default: '',
			},
			postTitle: {
				type: 'string',
				default: '',
			},
			postLink: {
				type: 'string',
				default: '',
			},
			postType: {
				type: 'string',
				default: '',
			},
		},

		save: (props) => {
			const {
				className,
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
			} = props;

			return (
				<tr
					data-date={
						date && new Date(date).toISOString().substring(0, 10)
					}
					data-quarter={
						quarter && sprintf(__('Q%s', 'billy'), quarter)
					}
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
							date &&
							new Date(date).toISOString().substring(0, 10)
						}
					>
						{date && new Date(date).toISOString().substring(0, 10)}
						<sub>
							{quarter && sprintf(__('Q%s', 'billy'), quarter)}
						</sub>
					</td>
					<td className="description">
						<InnerBlocks.Content />
					</td>
					<td className="reference">
						{reference && !postLink && reference}
						{reference && postLink && (
							<a href={postLink}>{reference}</a>
						)}
					</td>
					<td
						className="amount earning"
						data-value={earning > 0 ? earning : null}
					>
						{earning &&
							earning > 0 &&
							formatNumber(earning, locale)}
					</td>
					<td
						className="amount expense"
						data-value={expense > 0 ? expense : null}
					>
						{expense &&
							expense > 0 &&
							formatNumber(expense, locale)}
					</td>
					{tax && tax > 0 && (
						<td className="amount tax" data-value={tax}>
							{formatNumber(tax, locale)}
						</td>
					)}
				</tr>
			);
		},
	},
	// < v1.6.0 (202303)
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
			date: {
				type: 'string',
				default: '',
			},
			quarter: {
				type: 'number',
				default: '',
			},
			reference: {
				type: 'string',
				default: '',
			},
			earning: {
				type: 'number',
				default: '',
			},
			expense: {
				type: 'number',
				default: '',
			},
			tax: {
				type: 'number',
				default: '',
			},
			postUUID: {
				type: 'string',
				default: '',
			},
			postTitle: {
				type: 'string',
				default: '',
			},
			postLink: {
				type: 'string',
				default: '',
			},
			postType: {
				type: 'string',
				default: '',
			},
		},

		save: (props) => {
			const {
				className,
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
			} = props;

			return (
				<tr
					data-date={
						date && new Date(date).toISOString().substring(0, 10)
					}
					data-quarter={
						quarter && sprintf(__('Q%s', 'billy'), quarter)
					}
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
							date &&
							new Date(date).toISOString().substring(0, 10)
						}
					>
						{date && new Date(date).toISOString().substring(0, 10)}
						<sub>
							{quarter && sprintf(__('Q%s', 'billy'), quarter)}
						</sub>
					</td>
					<td className="description">
						<InnerBlocks.Content />
					</td>
					<td className="reference">
						{reference && !postLink && reference}
						{reference && postLink && (
							<a href={postLink}>{reference}</a>
						)}
					</td>
					<td
						className="amount earning"
						data-value={earning > 0 ? earning : null}
					>
						{earning &&
							earning > 0 &&
							formatNumber(earning, locale)}
					</td>
					<td
						className="amount expense"
						data-value={expense > 0 ? expense : null}
					>
						{expense &&
							expense > 0 &&
							formatNumber(expense, locale)}
					</td>
					<td
						className="amount tax"
						data-value={tax > 0 ? tax : null}
					>
						{tax && tax > 0 && formatNumber(tax, locale)}
					</td>
				</tr>
			);
		},
	},
	// < v1.2.0 (20200824)
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
			date: {
				type: 'string',
				default: '',
			},
			quarter: {
				type: 'number',
				default: '',
			},
			reference: {
				type: 'string',
				default: '',
			},
			description: {
				type: 'string',
				default: '',
			},
			earning: {
				type: 'number',
				default: '',
			},
			expense: {
				type: 'number',
				default: '',
			},
			tax: {
				type: 'number',
				default: '',
			},
			postUUID: {
				type: 'string',
				default: '',
			},
			postTitle: {
				type: 'string',
				default: '',
			},
			postLink: {
				type: 'string',
				default: '',
			},
			postType: {
				type: 'string',
				default: '',
			},
		},

		save: (props) => {
			const {
				className,
				attributes: {
					index,
					locale,
					date,
					quarter,
					description,
					earning,
					expense,
					tax,
					reference,
					postLink,
				},
			} = props;

			return (
				<tr
					data-date={
						date && new Date(date).toISOString().substring(0, 10)
					}
					data-quarter={
						quarter && sprintf(__('Q%s', 'billy'), quarter)
					}
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
							date &&
							new Date(date).toISOString().substring(0, 10)
						}
					>
						{date && new Date(date).toISOString().substring(0, 10)}
						<sub>
							{quarter && sprintf(__('Q%s', 'billy'), quarter)}
						</sub>
					</td>
					<td className="description">
						{description && description}
					</td>
					<td className="reference">
						{reference && !postLink && reference}
						{reference && postLink && (
							<a href={postLink}>{reference}</a>
						)}
					</td>
					<td
						className="amount earning"
						data-value={earning > 0 ? earning : null}
					>
						{earning &&
							earning > 0 &&
							formatNumber(earning, locale)}
					</td>
					<td
						className="amount expense"
						data-value={expense > 0 ? expense : null}
					>
						{expense &&
							expense > 0 &&
							formatNumber(expense, locale)}
					</td>
					<td
						className="amount tax"
						data-value={tax > 0 ? tax : null}
					>
						{tax && tax > 0 && formatNumber(tax, locale)}
					</td>
				</tr>
			);
		},
	},
];

export default deprecated;
