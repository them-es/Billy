/**
 * Quote Table
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */

import { registerBlockType } from '@wordpress/blocks';
import { __, sprintf } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import { useEffect, RawHTML } from '@wordpress/element';

/**
 * Internal dependencies
 */

import { formatNumber, percentToDecimal } from '../../functions';

import deprecatedQuoteOuter from './deprecatedOuter';
import deprecatedQuoteInner from './deprecatedInner';

let updateTotals;

/**
 * 1. Outer Block
 */

registerBlockType('billy-blocks/quote-table', {
	apiVersion: 2,
	title: sprintf(
		__('%1$s: %2$s', 'billy'),
		__('Quote', 'billy'),
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
		amountSubtotal: {
			type: 'number',
			default: '',
		},
		amountTotal: {
			type: 'number',
			default: '',
		},
		taxRates: {
			type: 'string',
			default: '',
		},
		taxRatesTotal: {
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
		return {
			childBlocks: getBlocksByClientId(clientId)[0].innerBlocks,
		};
	})((props) => {
		const {
			className,
			childBlocks,
			attributes: {
				currency,
				locale,
				amountSubtotal,
				amountTotal,
				taxRates,
				taxRatesTotal,
			},
			setAttributes,
		} = props;
		const blockProps = useBlockProps({
			className: 'quotetable-block' + (className ? ' ' + className : ''),
		});
		//console.log(childBlocks);

		// Onload "once": Calculate values and update attributes
		updateTotals = () => {
			let amountSubtotalSum = 0,
				amountTotalSum = 0,
				taxRatesTotalSum = 0,
				taxRatesHolderOutput = [],
				taxRatesMergedOutput = [];

			setAttributes({
				currency: globalDataBilly.currency,
				locale: globalDataBilly.locale,
			});

			// Create values-array of child block attributes
			if (childBlocks && childBlocks.length > 0) {
				childBlocks.forEach((childBlock) => {
					const amount = Number(childBlock.attributes.amount);
					const taxRate = percentToDecimal(
						childBlock.attributes.taxRate
					);

					// 1. Sum of Subtotals
					amountSubtotalSum += amount;

					// 2. Sum of Totals
					amountTotalSum += amount + taxRate * amount;

					// 3. Sum of Taxrates
					taxRatesHolderOutput.push({
						taxRate: childBlock.attributes.taxRate,
						amount: taxRate * amount,
					});
				});

				if (taxRatesHolderOutput.length > 0) {
					// Sum up Tax amount
					taxRatesTotalSum = taxRatesHolderOutput.reduce(
						(res, value) => {
							return res + value.amount;
						},
						0
					);
					taxRatesTotalSum = Number(taxRatesTotalSum.toFixed(2));

					// Merge amounts having the same Taxrate
					taxRatesHolderOutput.reduce((res, value) => {
						if (!res[value.taxRate]) {
							res[value.taxRate] = {
								taxRate: value.taxRate,
								amount: 0,
							};
							taxRatesMergedOutput.push(res[value.taxRate]);
						}
						res[value.taxRate].amount += value.amount;
						return res;
					}, {});
				}

				setAttributes({
					taxRatesTotal: taxRatesTotalSum,
					taxRates: JSON.stringify(taxRatesMergedOutput),
					amountSubtotal: amountSubtotalSum,
					amountTotal: amountTotalSum,
				});
			}
		};
		useEffect(() => {
			updateTotals();
		}, [childBlocks]);

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
					template={[['billy-blocks/quote-tablerow']]}
					allowedBlocks={['billy-blocks/quote-tablerow']}
					renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
				/>

				{amountSubtotal > 0 && (
					<table className="totals">
						<tbody>
							{amountSubtotal > 0 && (
								<tr className="subtotal">
									<th style={{ width: '50%' }}>
										{amountTotal > amountSubtotal
											? __('Subtotal', 'billy')
											: __('Total', 'billy')}
									</th>
									<td>
										{sprintf(
											__('%1$s %2$s', 'billy'),
											currency,
											formatNumber(amountSubtotal, locale)
										)}
									</td>
								</tr>
							)}
							{taxRates && taxRatesTotal > 0 && (
								<tr className="taxRates">
									<th style={{ width: '50%' }}>
										{__('Tax', 'billy')}
									</th>
									<td>
										{
											// Sort by Taxrate
											JSON.parse(taxRates)
												.sort(
													(a, b) =>
														percentToDecimal(
															a.taxRate
														) -
														percentToDecimal(
															b.taxRate
														)
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
									<th style={{ width: '50%' }}>
										{__('Total', 'billy')}
									</th>
									<td>
										{sprintf(
											__('%1$s %2$s', 'billy'),
											currency,
											formatNumber(amountTotal, locale)
										)}
									</td>
								</tr>
							)}
						</tbody>
					</table>
				)}
			</div>
		);
	}),

	save: (props) => {
		const {
			className,
			attributes: {
				currency,
				locale,
				amountSubtotal,
				amountTotal,
				taxRates,
				taxRatesTotal,
			},
		} = props;
		const blockProps = useBlockProps.save({
			className:
				'quotetable-block alignwide' +
				(className ? ' ' + className : ''),
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
								<th colSpan="2" data-label={amountTotal > amountSubtotal
										? 'subtotal'
										: 'total'}></th>
								<td
									colSpan={
										taxRates && taxRatesTotal > 0
											? '2'
											: null
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
										taxRates && taxRatesTotal > 0
											? '2'
											: null
									}
								>
									{
										// Sort by Taxrate
										JSON.parse(taxRates)
											.sort(
												(a, b) =>
													percentToDecimal(
														a.taxRate
													) -
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
										taxRates && taxRatesTotal > 0
											? '2'
											: null
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
	},

	deprecated: deprecatedQuoteOuter,
});

/**
 * 2. Inner Block
 */

registerBlockType('billy-blocks/quote-tablerow', {
	apiVersion: 2,
	title: sprintf(
		__('%1$s: %2$s', 'billy'),
		__('Quote', 'billy'),
		__('Table Row', 'billy')
	),
	icon: 'menu-alt', // https://developer.wordpress.org/resource/dashicons
	category: 'billy-blocks', // Custom category: see index.php
	parent: ['billy-blocks/quote-table'], // Only allow in outer block
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

	getEditWrapperProps() {
		return { 'data-align': 'wide' };
	},

	edit: withSelect((select, { clientId }) => {
		const { getBlockRootClientId, getBlockIndex } =
			select('core/block-editor');

		return {
			i: getBlockIndex(clientId, getBlockRootClientId(clientId)) + 1,
		};
	})((props) => {
		const {
			i,
			attributes: {
				index,
				currency,
				locale,
				description, // < v1.2.0
				taxRate,
				amount,
				amountIncl,
				quantity,
				quantityRate,
			},
			setAttributes,
		} = props;
		const blockProps = useBlockProps();

		useEffect(() => {
			setAttributes({
				index: i,
				currency: globalDataBilly.currency,
				locale: globalDataBilly.locale,
			});

			if ('' === taxRate) {
				setAttributes({
					taxRate:
						0 === globalDataBilly.taxOptions.length
							? '0%'
							: globalDataBilly.taxOptions[0].value,
				});
			}
		}, [taxRate]);

		const updateAmountIncl = (val) => {
			setAttributes({ amountIncl: val > 0 ? Number(val) : '' });

			updateTotals();
		};

		const updateTaxRate = (val) => {
			setAttributes({ taxRate: val });

			updateAmountIncl(
				Number(amount) + Number(amount) * percentToDecimal(val)
			);
		};

		const updateAmount = (val) => {
			setAttributes({ amount: val > 0 ? Number(val) : '' });

			updateAmountIncl(
				Number(val) + Number(val) * percentToDecimal(taxRate)
			);
		};

		const updateQuantity = (val) => {
			setAttributes({ quantity: val > 0 ? Number(val) : '' });

			updateAmount(Number(val) * Number(quantityRate));
		};

		const updateQuantityRate = (val) => {
			setAttributes({ quantityRate: val > 0 ? Number(val) : '' });

			updateAmount(Number(quantity) * Number(val));
		};

		// Markup: Backend
		return (
			<div {...blockProps}>
				<InspectorControls>
					<PanelBody title={__('Quantity/Rate Calculator', 'billy')}>
						<TextControl
							type="number"
							label={__('Quantity', 'billy')}
							placeholder={__('0', 'billy')}
							value={quantity ?? ''}
							onChange={updateQuantity}
						/>

						<TextControl
							type="number"
							label={sprintf(
								__('%1$s in %2$s', 'billy'),
								__('Rate', 'billy'),
								currency
							)}
							placeholder={__('0', 'billy')}
							value={quantityRate ?? ''}
							onChange={updateQuantityRate}
						/>
					</PanelBody>
				</InspectorControls>

				<table>
					<tbody>
						<tr>
							<th className="index">{index && index}</th>
							<td style={{ width: '30vw', minWidth: '200px' }}>
								<InnerBlocks
									template={[
										[
											'core/paragraph',
											{
												content: description
													? description
													: '', // < v1.2.0
											},
										],
									]}
									allowedBlocks={[
										'core/block',
										'core/heading',
										'core/paragraph',
										'core/list',
										'core/html',
									]}
								/>
							</td>
							<td>
								<TextControl
									type="number"
									label={sprintf(
										__('%1$s in %2$s', 'billy'),
										__('Amount', 'billy'),
										currency
									)}
									className="amount"
									placeholder={__('0', 'billy')}
									value={amount ?? ''}
									onChange={updateAmount}
								/>
							</td>
							<td>
								<SelectControl
									className="taxrate"
									label={sprintf(
										__('%1$s in %2$s', 'billy'),
										__('Tax', 'billy'),
										'%'
									)}
									value={taxRate ?? ''}
									options={
										0 !== globalDataBilly.taxOptions.length
											? globalDataBilly.taxOptions
											: '0%' !== taxRate &&
											  0 ===
													globalDataBilly.taxOptions
														.length
											? [
													{
														label: taxRate,
														value: taxRate,
													},
													{
														label: '0%',
														value: '0%',
													},
											  ]
											: ''
									}
									onChange={updateTaxRate}
								/>
							</td>
							<td>
								<TextControl
									type="number"
									disabled="disabled"
									label={currency}
									className="amount-tax"
									placeholder={__('0', 'billy')}
									value={amountIncl ?? ''}
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}),

	save: (props) => {
		const {
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

	deprecated: deprecatedQuoteInner,
});
