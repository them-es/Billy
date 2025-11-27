/**
 * Invoice Table (Outer): Deprecated
 * https://developer.wordpress.org/block-editor/developers/block-api/block-deprecation
 */

import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { RawHTML } from '@wordpress/element';

import { formatNumber, percentToDecimal } from '../../functions.js';

const deprecated = [
	// < v1.11.0 (202503) "DE"
	{
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
					'invoicetable-block alignwide' +
					(className ? ' ' + className : ''),
			});

			return (
				<div {...blockProps}>
					<table className="table wp-block-table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Beschreibung</th>
								<th scope="col">Betrag</th>
								{taxRates && taxRatesTotal > 0 && (
									<th scope="col">Steuer</th>
								)}
							</tr>
						</thead>
						<tbody>
							<InnerBlocks.Content />
						</tbody>
						<tfoot>
							{amountSubtotal > 0 && (
								<tr className="subtotal">
									<th colSpan="2">
										{amountTotal > amountSubtotal
											? 'Zwischensumme'
											: 'Gesamtsumme'}
									</th>
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
									<th colSpan="2">Steuer</th>
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
									<th colSpan="2">Gesamtsumme</th>
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
	},
	// < v1.11.0 (202503) "EN"
	{
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
					'invoicetable-block alignwide' +
					(className ? ' ' + className : ''),
			});

			return (
				<div {...blockProps}>
					<table className="table wp-block-table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Description</th>
								<th scope="col">Amount</th>
								{taxRates && taxRatesTotal > 0 && (
									<th scope="col">Tax</th>
								)}
							</tr>
						</thead>
						<tbody>
							<InnerBlocks.Content />
						</tbody>
						<tfoot>
							{amountSubtotal > 0 && (
								<tr className="subtotal">
									<th colSpan="2">
										{amountTotal > amountSubtotal
											? 'Subtotal'
											: 'Total'}
									</th>
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
									<th colSpan="2">Tax</th>
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
									<th colSpan="2">Total</th>
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
	},
	// < v1.11.0 (202503)
	{
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
					'invoicetable-block alignwide' +
					(className ? ' ' + className : ''),
			});

			return (
				<div {...blockProps}>
					<table className="table wp-block-table">
						<thead>
							<tr>
								<th scope="col">{__('#', 'billy')}</th>
								<th scope="col">
									{__('Description', 'billy')}
								</th>
								<th scope="col">{__('Amount', 'billy')}</th>
								{taxRates && taxRatesTotal > 0 && (
									<th scope="col">{__('Tax', 'billy')}</th>
								)}
							</tr>
						</thead>
						<tbody>
							<InnerBlocks.Content />
						</tbody>
						<tfoot>
							{amountSubtotal > 0 && (
								<tr className="subtotal">
									<th colSpan="2">
										{amountTotal > amountSubtotal
											? __('Subtotal', 'billy')
											: __('Total', 'billy')}
									</th>
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
									<th colSpan="2">{__('Tax', 'billy')}</th>
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
									<th colSpan="2">{__('Total', 'billy')}</th>
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
	},
	// < v1.5.1 (202210)
	{
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

			return (
				<div
					className={
						'invoicetable-block alignwide' +
						(className ? ' ' + className : '')
					}
				>
					<table className="table wp-block-table">
						<thead>
							<tr>
								<th scope="col">{__('#', 'billy')}</th>
								<th scope="col">
									{__('Description', 'billy')}
								</th>
								<th scope="col">{__('Amount', 'billy')}</th>
								{taxRates && taxRatesTotal > 0 && (
									<th scope="col">{__('Tax', 'billy')}</th>
								)}
							</tr>
						</thead>
						<tbody>
							<InnerBlocks.Content />
						</tbody>
						<tfoot>
							{amountSubtotal > 0 && (
								<tr className="subtotal">
									<td colSpan="2" className="align-right">
										{amountTotal > amountSubtotal
											? __('Subtotal', 'billy')
											: __('Total', 'billy')}
									</td>
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
									<td colSpan="2" className="align-right">
										{__('Tax', 'billy')}
									</td>
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
									<td colSpan="2" className="align-right">
										{__('Total', 'billy')}
									</td>
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
	},
	// < v1.3.0 (202102)
	{
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

			return (
				<div
					className={
						'invoicetable-block alignwide' +
						(className ? ' ' + className : '')
					}
				>
					<table className="table wp-block-table">
						<thead>
							<tr>
								<th scope="col">{__('#', 'billy')}</th>
								<th scope="col">
									{__('Description', 'billy')}
								</th>
								<th scope="col">{__('Amount', 'billy')}</th>
								{taxRates && taxRatesTotal > 0 && (
									<th scope="col">{__('Tax', 'billy')}</th>
								)}
							</tr>
						</thead>
						<tbody>
							<InnerBlocks.Content />
						</tbody>
						<tfoot>
							{amountSubtotal > 0 && (
								<tr className="subtotal">
									<td colSpan="2" align="right">
										{amountTotal > amountSubtotal
											? __('Subtotal', 'billy')
											: __('Total', 'billy')}
									</td>
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
								<tr className="taxrates">
									<td colSpan="2" align="right">
										{__('Tax', 'billy')}
									</td>
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
									<td colSpan="2" align="right">
										{__('Total', 'billy')}
									</td>
									<td>
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
	},
];

export default deprecated;
