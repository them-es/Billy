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
import { dispatch, useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

import { getQuarter } from '../../functions.js';

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
}) {
	const blockProps = useBlockProps();

	const blockData = useSelect(
		(select) => {
			const { getBlockRootClientId, getBlockIndex } =
				select('core/block-editor');

			return {
				clientId: clientId,
				rootClientId: getBlockRootClientId(clientId),
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

		if ('' === date) {
			setAttributes({
				date: new Date().toISOString().substring(0, 10),
				quarter: getQuarter(new Date().toISOString().substring(0, 10)),
			}); // Current date
		}
	}, [blockData, date]);

	const reOrder = () => {
		// Reorder by date (move up/down): see "childBlocks.sort()"
		dispatch('core/block-editor').moveBlockToPosition(
			blockData.clientId,
			blockData.rootClientId,
			blockData.rootClientId,
			blockData.i
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
		setAttributes({ expense: '', earning: val > 0 ? Number(val) : '' });

		// updateTotals(); // Deprecated since v2.0
	};

	const updateExpense = (val) => {
		setAttributes({ earning: '', expense: val > 0 ? Number(val) : '' });

		// updateTotals(); // Deprecated since v2.0
	};

	const updateTax = (val) => {
		setAttributes({ tax: val > 0 ? Number(val) : '' });

		// updateTotals(); // Deprecated since v2.0
	};

	// Markup: Backend
	return (
		<div {...blockProps}>
			<InspectorControls>
				{!postUUID && (
					<PanelBody title={__('Date', 'billy')}>
						<DatePicker currentDate={date} onChange={updateDate} />
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
								new Date(date).toISOString().substring(0, 10)}
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
						<td className="reference">
							<TextControl
								type="text"
								label={__('Reference', 'billy')}
								placeholder=""
								value={reference ?? ''}
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
								value={earning ?? ''}
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
								value={expense ?? ''}
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
								value={tax ?? ''}
								onChange={updateTax}
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
