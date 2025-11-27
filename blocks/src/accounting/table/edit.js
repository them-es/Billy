import { __, sprintf } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { createBlock } from '@wordpress/blocks';
import { useSelect, dispatch } from '@wordpress/data';
import { PanelBody } from '@wordpress/components';

import { formatNumber } from '../../functions.js';

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
		amountTotalEarnings,
		amountTotalExpenses,
		amountTaxEarnings,
		amountTaxExpenses,
	},
	setAttributes,
}) {
	const blockProps = useBlockProps({
		className: `accountingtable-block${className ? ' ' + className : ''}`,
	});

	const childBlocks = useSelect(
		(select) => {
			const { getBlock } = select('core/block-editor');
			const block = getBlock(clientId);
			return block ? block.innerBlocks : [];
		},
		[clientId]
	);
	//console.log(childBlocks);

	// Calculate values and update attributes
	updateTotals = () => {
		let earningsSum = 0;
		let expensesSum = 0;
		let taxEarningsSum = 0;
		let taxExpensesSum = 0;

		// Set currency and locale attributes
		setAttributes({
			currency: globalDataBilly.currency,
			locale: globalDataBilly.locale,
		});

		// Calculate totals from child blocks
		if (childBlocks?.length) {
			childBlocks.forEach((childBlock) => {
				const taxRate = Number(childBlock.attributes.tax) || 0;
				const earning = Number(childBlock.attributes.earning) || 0;
				const expense = Number(childBlock.attributes.expense) || 0;

				earningsSum += earning;
				expensesSum += expense;

				if (earning) {
					taxEarningsSum += taxRate;
				}
				if (expense) {
					taxExpensesSum += taxRate;
				}
			});
		}

		// Update attributes with calculated totals
		setAttributes({
			amountTotalEarnings: earningsSum,
			amountTotalExpenses: expensesSum,
			amountTaxEarnings: taxEarningsSum,
			amountTaxExpenses: taxExpensesSum,
		});
	};

	useEffect(() => {
		updateTotals();
	}, [childBlocks]);

	const DEFAULT_BLOCK = 'billy-blocks/accounting-tablerow';

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
									formatNumber(amountTotalEarnings, locale)
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
									formatNumber(amountTotalExpenses, locale)
								)}
							</td>
						</tr>
					)}
					{(amountTotalEarnings > 0 || amountTotalExpenses > 0) && (
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
}
