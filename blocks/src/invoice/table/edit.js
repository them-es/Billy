import { __, sprintf } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { useEffect, RawHTML } from '@wordpress/element';
import { createBlock } from '@wordpress/blocks';
import { useSelect, dispatch } from '@wordpress/data';
import { PanelBody } from '@wordpress/components';

import { formatNumber, percentToDecimal } from '../../functions.js';

let updateTotals;

/**
 * Editor styles.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
//import './editor.scss';

/**
 * Edit function.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function edit({
	clientId,
	className,
	attributes: {
		currency,
		locale,
		amountSubtotal,
		amountTotal,
		taxRates,
		taxRatesTotal,
	},
	setAttributes,
}) {
	const blockProps = useBlockProps({
		className: `invoicetable-block${className ? ' ' + className : ''}`,
	});

	const childBlocks = useSelect(
		(select) => {
			const { getBlock } = select('core/block-editor');
			const block = getBlock(clientId);
			return block ? block.innerBlocks : [];
		},
		[clientId]
	);
	//console.log('childBlocks', childBlocks);

	// Onload "once": Calculate values and update attributes
	updateTotals = () => {
		let amountSubtotalSum = 0;
		let amountTotalSum = 0;
		let taxRatesTotalSum = 0;
		const taxRatesHolderOutput = [];
		const taxRatesMergedOutput = [];

		// Set currency and locale attributes
		setAttributes({
			currency: globalDataBilly.currency,
			locale: globalDataBilly.locale,
		});

		// Calculate totals from child blocks
		if (childBlocks?.length) {
			childBlocks.forEach((childBlock) => {
				const amount = Number(childBlock.attributes.amount) || 0;
				const taxRate = percentToDecimal(childBlock.attributes.taxRate);

				// 1. Sum of subtotals
				amountSubtotalSum += amount;

				// 2. Sum of totals
				amountTotalSum += amount + taxRate * amount;

				// 3. Collect tax rates
				taxRatesHolderOutput.push({
					taxRate: childBlock.attributes.taxRate,
					amount: taxRate * amount,
				});
			});

			// Calculate total tax rates and merge amounts
			if (taxRatesHolderOutput?.length) {
				taxRatesTotalSum = taxRatesHolderOutput.reduce(
					(total, { amount }) => total + amount,
					0
				);
				taxRatesTotalSum = Number(taxRatesTotalSum.toFixed(2));

				// Merge amounts having the same tax rate
				taxRatesHolderOutput.forEach(({ taxRate, amount }) => {
					const existingRate = taxRatesMergedOutput.find(
						(rate) => rate.taxRate === taxRate
					);
					if (existingRate) {
						existingRate.amount += amount;
					} else {
						taxRatesMergedOutput.push({ taxRate, amount });
					}
				});
			}

			// Update attributes with calculated totals
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

	const DEFAULT_BLOCK = 'billy-blocks/invoice-tablerow';

	const addNewTableRow = () => {
		dispatch('core/block-editor').insertBlocks(
			[createBlock(DEFAULT_BLOCK)],
			childBlocks.length,
			clientId
		);
	};

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
				directInsert={true}
				template={[[DEFAULT_BLOCK]]}
				allowedBlocks={[DEFAULT_BLOCK]}
				defaultBlock={{ name: DEFAULT_BLOCK }}
				renderAppender={() => (
					<button
						className="components-button block-editor-button-block-appender"
						onClick={addNewTableRow}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24"
							aria-hidden="true"
							focusable="false"
						>
							<path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"></path>
						</svg>
					</button>
				)}
			/>

			{amountSubtotal > 0 && (
				<table className="totals">
					<tbody>
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
						{taxRates && taxRatesTotal > 0 && (
							<tr className="taxRates">
								<th style={{ width: '50%' }}>
									{__('Tax', 'billy')}
								</th>
								<td>
									{
										// Sort by tax rate
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
}
