/**
 * Accounting Table
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */

import { registerBlockType } from '@wordpress/blocks';
import { __, _n, sprintf } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	DatePicker, // https://developer.wordpress.org/block-editor/components/date-time
} from '@wordpress/components';
import { dispatch, withSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */

import { getQuarter, formatNumber } from '../../functions';

import deprecatedAccountingOuter from './deprecatedOuter';
import deprecatedAccountingInner from './deprecatedInner';

var updateTotals;

/**
 * 1. Outer Block
 */

registerBlockType('billy-blocks/accounting-table', {
	apiVersion: 2,
	title: sprintf(
		__('%1$s: %2$s', 'billy'),
		__('Accounting', 'billy'),
		__('Table', 'billy')
	),
	icon: 'menu-alt', // https://developer.wordpress.org/resource/dashicons
	category: 'billy-blocks', // Custom category: see index.php
	attributes: {
		currency: {
			type: 'string',
			default: '',
		},
		locale: {
			type: 'string',
			default: '',
		},
		amountTotalEarnings: {
			type: 'number',
			default: '',
		},
		amountTotalExpenses: {
			type: 'number',
			default: '',
		},
		amountTaxEarnings: {
			type: 'number',
			default: '',
		},
		amountTaxExpenses: {
			type: 'number',
			default: '',
		},
	},
	supports: {
		inserter: false,
		reusable: false,
		html: false,
	},

	getEditWrapperProps() {
		return { 'data-align': 'wide' };
	},

	edit: withSelect((select, { clientId }) => {
		const { getBlocksByClientId } = select('core/block-editor');

		// Get child blocks
		const getChildBlocks = getBlocksByClientId(clientId)[0].innerBlocks;

		// Sort array based on date attribute
		getChildBlocks.sort((a, b) => {
			return new Date(a.attributes.date) - new Date(b.attributes.date);
		});

		return {
			childBlocks: getChildBlocks,
		};
	})((props) => {
		const {
			className,
			childBlocks,
			attributes: {
				currency,
				locale,
				amountTotalEarnings,
				amountTotalExpenses,
				amountTaxEarnings,
				amountTaxExpenses,
			},
			setAttributes,
		} = props;
		const blockProps = useBlockProps({
			className:
				'accountingtable-block' + (className ? ' ' + className : ''),
		});
		//console.log(childBlocks);

		// Calculate values and update attributes
		updateTotals = () => {
			var amountEarningsSum = 0,
				amountExpensesSum = 0,
				amountTaxEarningsSum = 0,
				amountTaxExpensesSum = 0;

			setAttributes({ currency: globalDataBilly.currency });
			setAttributes({ locale: globalDataBilly.locale });

			if (childBlocks && childBlocks.length > 0) {
				childBlocks.forEach((childBlock) => {
					amountEarningsSum += Number(childBlock.attributes.earning);
					amountExpensesSum += Number(childBlock.attributes.expense);

					if (childBlock.attributes.earning) {
						amountTaxEarningsSum += Number(
							childBlock.attributes.tax
						);
					}
					if (childBlock.attributes.expense) {
						amountTaxExpensesSum += Number(
							childBlock.attributes.tax
						);
					}
				});
			}

			setAttributes({ amountTotalEarnings: amountEarningsSum });
			setAttributes({ amountTotalExpenses: amountExpensesSum });

			setAttributes({ amountTaxEarnings: amountTaxEarningsSum });
			setAttributes({ amountTaxExpenses: amountTaxExpensesSum });
		};
		useEffect(() => {
			updateTotals();
		});

		// Markup: Backend
		return (
			<div {...blockProps}>
				<InspectorControls>
					<PanelBody title={__('Actions', 'billy')}>
						<button
							id="updatetotals"
							className="components-button is-secondary is-button"
							onClick={updateTotals}
						>
							{__('Update Totals', 'billy')}
						</button>
					</PanelBody>
				</InspectorControls>

				<InnerBlocks
					templateLock={false}
					template={[
						[
							'billy-blocks/accounting-tablerow',
							{
								//placeholder: 'Enter content…',
							},
						],
					]}
					allowedBlocks={['billy-blocks/accounting-tablerow']}
				/>

				<table className="totals">
					<tbody>
						{amountTotalEarnings > 0 && (
							<tr className="earnings">
								<th style={{ width: '50%' }}>
									{__('Earnings', 'billy')}
								</th>
								<td>
									{sprintf(
										__('%1$s %2$s', 'billy'),
										currency,
										formatNumber(
											amountTotalEarnings,
											locale
										)
									)}
								</td>
							</tr>
						)}
						{amountTotalExpenses > 0 && (
							<tr className="expenses">
								<th style={{ width: '50%' }}>
									{__('Expenses', 'billy')}
								</th>
								<td>
									{sprintf(
										__('%1$s %2$s', 'billy'),
										currency,
										formatNumber(
											amountTotalExpenses,
											locale
										)
									)}
								</td>
							</tr>
						)}
						{(amountTotalEarnings > 0 ||
							amountTotalExpenses > 0) && (
							<tr className="profit">
								<th style={{ width: '50%' }}>
									{__('Profit', 'billy')}
								</th>
								<td style={{ borderTop: '2px solid' }}>
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
						<>
							<tr className="taxes-earnings">
								<th style={{ width: '50%' }}>
									{sprintf(
										__('Taxes (%s)', 'billy'),
										__('Earnings', 'billy')
									)}
								</th>
								<td>
									{sprintf(
										__('%1$s %2$s', 'billy'),
										currency,
										formatNumber(amountTaxEarnings, locale)
									)}
								</td>
							</tr>
							<tr className="taxes-expenses">
								<th style={{ width: '50%' }}>
									{sprintf(
										__('Taxes (%s)', 'billy'),
										__('Expenses', 'billy')
									)}
								</th>
								<td>
									{sprintf(
										__('%1$s %2$s', 'billy'),
										currency,
										formatNumber(amountTaxExpenses, locale)
									)}
								</td>
							</tr>
						</>
					</tbody>
				</table>
			</div>
		);
	}),

	save: (props) => {
		const {
			className,
			attributes: {
				currency,
				locale,
				amountTotalEarnings,
				amountTotalExpenses,
				amountTaxEarnings,
				amountTaxExpenses,
			},
		} = props;
		const blockProps = useBlockProps.save({
			className: 'alignwide' + (className ? ' ' + className : ''),
		});

		return (
			<div {...blockProps}>
				<table className="table wp-block-table">
					<thead>
						<tr>
							<th scope="col" className="sort" data-sort="index">
								{__('#', 'billy')}
							</th>
							<th scope="col" className="sort" data-sort="date">
								{__('Date', 'billy')}
							</th>
							<th
								scope="col"
								className="sort"
								data-sort="description"
							>
								{__('Description', 'billy')}
							</th>
							<th
								scope="col"
								className="sort"
								data-sort="reference"
							>
								{__('Reference', 'billy')}
							</th>
							<th
								scope="col"
								className="sort earnings"
								data-sort="earning"
							>
								{__('Earnings', 'billy')}
							</th>
							<th
								scope="col"
								className="sort expenses"
								data-sort="expense"
							>
								{__('Expenses', 'billy')}
							</th>
							{(amountTaxEarnings > 0 ||
								amountTaxExpenses > 0) && (
								<th
									scope="col"
									className="sort"
									data-sort="tax"
								>
									{__('Taxes', 'billy')}
								</th>
							)}
						</tr>
					</thead>
					<tbody className="list">
						<InnerBlocks.Content />
					</tbody>
					<tfoot>
						{(amountTotalEarnings > 0 ||
							amountTotalExpenses > 0) && (
							<tr>
								<th colSpan="4">
									{sprintf(
										__('%1$s / %2$s', 'billy'),
										__('Earnings', 'billy'),
										__('Expenses', 'billy')
									)}
								</th>
								<td className="sum earnings">
									{sprintf(
										__('%1$s %2$s', 'billy'),
										currency,
										formatNumber(
											amountTotalEarnings,
											locale
										)
									)}
								</td>
								<td className="sum expenses">
									{sprintf(
										__('%1$s %2$s', 'billy'),
										currency,
										formatNumber(
											amountTotalExpenses,
											locale
										)
									)}
								</td>
							</tr>
						)}
						{(amountTotalEarnings > 0 ||
							amountTotalExpenses > 0) && (
							<tr>
								<th colSpan="4">{__('Profit', 'billy')}</th>
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
								<th colSpan="4">
									{sprintf(
										__('%1$s (%2$s / %3$s)', 'billy'),
										__('Taxes', 'billy'),
										__('Earnings', 'billy'),
										__('Expenses', 'billy')
									)}
								</th>
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
	},

	deprecated: deprecatedAccountingOuter,
});

/**
 * 2. Inner Block
 */

registerBlockType('billy-blocks/accounting-tablerow', {
	apiVersion: 2,
	title: sprintf(
		__('%1$s: %2$s', 'billy'),
		__('Accounting', 'billy'),
		__('Table Row', 'billy')
	),
	icon: 'menu-alt', // https://developer.wordpress.org/resource/dashicons
	category: 'billy-blocks', // Custom category: see index.php
	parent: ['billy-blocks/accounting-table'], // Only allow in outer block
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

	getEditWrapperProps() {
		return { 'data-align': 'wide' };
	},

	edit: withSelect((select, { clientId }) => {
		const { getBlockRootClientId, getBlockIndex } =
			select('core/block-editor');

		return {
			clientId: clientId,
			rootClientId: getBlockRootClientId(clientId),
			i: getBlockIndex(clientId, getBlockRootClientId(clientId)) + 1,
		};
	})((props) => {
		const {
			clientId,
			rootClientId,
			i,
			attributes: {
				index,
				currency,
				locale,
				description, // < v1.2.0
				date,
				quarter,
				earning,
				expense,
				tax,
				reference,
				postUUID,
				postTitle,
				postLink,
				postType,
			},
			setAttributes,
		} = props;

		useEffect(() => {
			setAttributes({ index: i });
			setAttributes({ currency: globalDataBilly.currency });
			setAttributes({ locale: globalDataBilly.locale });

			if ('' === date) {
				setAttributes({
					date: new Date().toISOString().substring(0, 10),
				}); // Current date
				setAttributes({
					quarter: getQuarter(
						new Date().toISOString().substring(0, 10)
					),
				}); // Current date
			}
		});

		const reOrder = () => {
			// Reorder by date (move up/down): see "childBlocks.sort()"
			dispatch('core/block-editor').moveBlockToPosition(
				clientId,
				rootClientId,
				rootClientId,
				i
			);
		};

		const updateQuarter = (val) => {
			// Get quarter from datestring
			setAttributes({ quarter: Number(getQuarter(val)) });
		};

		const updateDate = (val) => {
			//console.log( val );
			setAttributes({ date: val });

			// Get quarter from datestring
			updateQuarter(val);

			reOrder();
		};

		const updateReference = (val) => {
			setAttributes({ reference: val });
		};

		const updateEarning = (val) => {
			setAttributes({ expense: '' }); // Clear value

			setAttributes({ earning: val > 0 ? Number(val) : '' });

			updateTotals();
		};

		const updateExpense = (val) => {
			setAttributes({ earning: '' }); // Clear value

			setAttributes({ expense: val > 0 ? Number(val) : '' });

			updateTotals();
		};

		const updateTax = (val) => {
			setAttributes({ tax: val > 0 ? Number(val) : '' });

			updateTotals();
		};

		// Markup: Backend
		return (
			<>
				<InspectorControls>
					{!postUUID && (
						<PanelBody title={__('Date', 'billy')}>
							<DatePicker
								currentDate={date}
								onChange={updateDate}
							/>
						</PanelBody>
					)}
					{postUUID && postLink && (
						<PanelBody
							title={sprintf(
								__('Reference: %s', 'billy'),
								postType
									? postType.charAt(0).toUpperCase() +
											postType.substring(1)
									: __('Post', 'billy')
							)}
						>
							<p>
								<a href={postLink}>
									{postTitle ? postTitle : postLink}
								</a>
							</p>
						</PanelBody>
					)}
				</InspectorControls>

				<table>
					<tbody>
						<tr>
							<th className="index">{index && index}</th>
							<td className="date">
								{date &&
									new Date(date)
										.toISOString()
										.substring(0, 10)}
								<sub>
									{quarter &&
										sprintf(__('Q%s', 'billy'), quarter)}
								</sub>
							</td>
							<td
								className="description"
								style={{ minWidth: '200px' }}
							>
								<InnerBlocks
									template={[
										[
											'core/paragraph',
											{
												placeholder: __(
													'Add content',
													'billy'
												),
												content: description
													? description
													: '', // < v1.2.0
											},
										],
									]}
									allowedBlocks={[
										'core/heading',
										'core/paragraph',
										'core/list',
										'core/html',
									]}
								/>
							</td>
							<td className="reference">
								<TextControl
									type="text"
									label={__('Reference', 'billy')}
									placeholder=""
									value={reference}
									onChange={updateReference}
								/>
							</td>
							<td className="amount earning">
								<TextControl
									type="number"
									label={sprintf(
										__('%1$s in %2$s', 'billy'),
										__('Earning', 'billy'),
										currency
									)}
									placeholder={__('0', 'billy')}
									value={earning}
									onChange={updateEarning}
								/>
							</td>
							<td className="amount expense">
								<TextControl
									type="number"
									label={sprintf(
										__('%1$s in %2$s', 'billy'),
										__('Expense', 'billy'),
										currency
									)}
									placeholder={__('0', 'billy')}
									value={expense}
									onChange={updateExpense}
								/>
							</td>
							<td className="amount tax">
								<TextControl
									type="number"
									label={sprintf(
										__('%1$s in %2$s', 'billy'),
										__('Tax', 'billy'),
										currency
									)}
									placeholder={__('0', 'billy')}
									value={tax}
									onChange={updateTax}
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</>
		);
	}),

	save: (props) => {
		const {
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
					{reference && postLink && (
						<a href={postLink}>{reference}</a>
					)}
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
	},

	deprecated: deprecatedAccountingInner,
});
