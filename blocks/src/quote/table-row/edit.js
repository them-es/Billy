import { __, _n, sprintf } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

import { percentToDecimal } from '../../functions.js';

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
}) {
	const blockProps = useBlockProps();

	const blockData = useSelect(
		(select) => {
			const { getBlockRootClientId, getBlockIndex } =
				select('core/block-editor');

			return {
				i: getBlockIndex(clientId, getBlockRootClientId(clientId)) + 1,
			};
		},
		[clientId]
	);

	useEffect(() => {
		setAttributes({
			index: blockData.i,
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
	}, [blockData, taxRate]);

	const updateAmountIncl = (val) => {
		setAttributes({ amountIncl: val > 0 ? Number(val) : '' });

		// updateTotals(); // Deprecated since v2.0
	};

	const updateTaxRate = (val) => {
		setAttributes({ taxRate: val });

		updateAmountIncl(
			Number(amount) + Number(amount) * percentToDecimal(val)
		);
	};

	const updateAmount = (val) => {
		setAttributes({ amount: val > 0 ? Number(val) : '' });

		updateAmountIncl(Number(val) + Number(val) * percentToDecimal(taxRate));
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
}
