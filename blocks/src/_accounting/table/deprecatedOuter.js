/**
 * Accounting Table (Outer): Deprecated
 * https://developer.wordpress.org/block-editor/developers/block-api/block-deprecation
 */

/**
 * WordPress dependencies
 */

import {
	__,
	sprintf
} from '@wordpress/i18n';
import {
	InnerBlocks,
} from '@wordpress/blockEditor';


/**
 * Internal dependencies
 */

import {
	formatNumber,
	percentToDecimal,
} from '../../functions';


const deprecatedAccountingOuter = [
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
	
		save: props => {
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
	
			return (
				<div className={ 'alignwide' + ( className ? ' ' + className : '' ) }>
					<table className="table wp-block-table">
						<thead>
							<tr>
								<th scope="col" className="sort" data-sort="index">
									{ __( '#', 'billy' ) }
								</th>
								<th scope="col" className="sort" data-sort="date">
									{ __( 'Date', 'billy' ) }
								</th>
								<th scope="col" className="sort" data-sort="description">
									{ __( 'Description', 'billy' ) }
								</th>
								<th scope="col" className="sort" data-sort="reference">
									{ __( 'Reference', 'billy' ) }
								</th>
								<th scope="col" className="sort earnings" data-sort="earning">
									{ __( 'Earnings', 'billy' ) }
								</th>
								<th scope="col" className="sort expenses" data-sort="expense">
									{ __( 'Expenses', 'billy' ) }
								</th>
								<th scope="col" className="sort" data-sort="tax">
									{ __( 'Taxes', 'billy' ) }
								</th>
							</tr>
						</thead>
						<tbody className="list">
							<InnerBlocks.Content />
						</tbody>
						<tfoot>
							{
								( amountTotalEarnings > 0 || amountTotalExpenses > 0 ) &&
									(
										<tr>
											<td colSpan="5" className="alignright">
												{ sprintf( __( '%1$s / %2$s', 'billy' ), __( 'Earnings', 'billy' ), __( 'Expenses', 'billy' ) ) }
											</td>
											<td className="sum earnings">
												{
													sprintf( __( '%1$s %2$s', 'billy' ), currency, formatNumber( amountTotalEarnings, locale ) )
												}
											</td>
											<td className="sum expenses">
												{
													sprintf( __( '%1$s %2$s', 'billy' ), currency, formatNumber( amountTotalExpenses, locale ) )
												}
											</td>
										</tr>
									)
							}
							{
								( amountTotalEarnings > 0 || amountTotalExpenses > 0 ) &&
									(
										<tr>
											<td colSpan="5" className="alignright">
												{ __( 'Profit', 'billy' ) }
											</td>
											<td colSpan="2" className="profit">
												{
													sprintf( __( '%1$s %2$s', 'billy' ), currency, formatNumber( ( amountTotalEarnings - amountTotalExpenses ), locale ) )
												}
											</td>
										</tr>
									)
							}
							{
								( amountTaxEarnings > 0 || amountTaxExpenses > 0 ) &&
									(
										<tr>
											<td colSpan="5" className="alignright">
												{ sprintf( __( '%1$s (%2$s / %3$s)', 'billy' ), __( 'Taxes', 'billy' ) , __( 'Earnings', 'billy' ), __( 'Expenses', 'billy' ) ) }
											</td>
											<td className="sum tax-earnings">
												{
													sprintf( __( '%1$s %2$s', 'billy' ), currency, formatNumber( amountTaxEarnings, locale ) )
												}
											</td>
											<td className="sum tax-expenses">
												{
													sprintf( __( '%1$s %2$s', 'billy' ), currency, formatNumber( amountTaxExpenses, locale ) )
												}
											</td>
										</tr>
									)
							}
						</tfoot>
					</table>
				</div>
			);
		},
	},
	// < v1.3 (202102)
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
	
		save: props => {
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
	
			return (
				<div className={ 'alignwide' + ( className ? ' ' + className : '' ) }>
					<table className="table wp-block-table">
						<thead>
							<tr>
								<th scope="col" className="sort" data-sort="index">
									{ __( '#', 'billy' ) }
								</th>
								<th scope="col" className="sort" data-sort="date">
									{ __( 'Date', 'billy' ) }
								</th>
								<th scope="col" className="sort" data-sort="description">
									{ __( 'Description', 'billy' ) }
								</th>
								<th scope="col" className="sort" data-sort="reference">
									{ __( 'Reference', 'billy' ) }
								</th>
								<th scope="col" className="sort earnings" data-sort="earning">
									{ __( 'Earnings', 'billy' ) }
								</th>
								<th scope="col" className="sort expenses" data-sort="expense">
									{ __( 'Expenses', 'billy' ) }
								</th>
								<th scope="col" className="sort" data-sort="tax">
									{ __( 'Tax', 'billy' ) }
								</th>
							</tr>
						</thead>
						<tbody className="list">
							<InnerBlocks.Content />
						</tbody>
						<tfoot>
							{
								( amountTotalEarnings > 0 || amountTotalExpenses > 0 ) &&
									(
										<tr>
											<td colSpan="4" align="right">
												{ sprintf( __( '%1$s / %2$s', 'billy' ), __( 'Earnings', 'billy' ), __( 'Expenses', 'billy' ) ) }
											</td>
											<td className="sum earnings">
												{
													sprintf( __( '%1$s %2$s', 'billy' ), currency, formatNumber( amountTotalEarnings, locale ) )
												}
											</td>
											<td className="sum expenses">
												{
													sprintf( __( '%1$s %2$s', 'billy' ), currency, formatNumber( amountTotalExpenses, locale ) )
												}
											</td>
										</tr>
									)
							}
							{
								( amountTotalEarnings > 0 || amountTotalExpenses > 0 ) &&
									(
										<tr>
											<td colSpan="4" align="right">
												{ __( 'Profit', 'billy' ) }
											</td>
											<td colSpan="2" className="profit">
												{
													sprintf( __( '%1$s %2$s', 'billy' ), currency, formatNumber( ( amountTotalEarnings - amountTotalExpenses ), locale ) )
												}
											</td>
										</tr>
									)
							}
							{
								( amountTaxEarnings > 0 || amountTaxExpenses > 0 ) &&
									(
										<tr>
											<td colSpan="4" align="right">
												{ sprintf( __( '%1$s (%2$s / %3$s)', 'billy' ), __( 'Taxes', 'billy' ) , __( 'Earnings', 'billy' ), __( 'Expenses', 'billy' ) ) }
											</td>
											<td className="sum tax-earnings">
												{
													sprintf( __( '%1$s %2$s', 'billy' ), currency, formatNumber( amountTaxEarnings, locale ) )
												}
											</td>
											<td className="sum tax-expenses">
												{
													sprintf( __( '%1$s %2$s', 'billy' ), currency, formatNumber( amountTaxExpenses, locale ) )
												}
											</td>
										</tr>
									)
							}
						</tfoot>
					</table>
				</div>
			);
		},
	},
	// < v1.2.4 (202012)
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
	
		save: props => {
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
	
			return (
				<div className={ 'alignwide' + ( className ? ' ' + className : '' ) }>
					<table className="table wp-block-table">
						<thead>
							<tr>
								<th scope="col" className="sort" data-sort="index">
									{ __( '#', 'billy' ) }
								</th>
								<th scope="col" className="sort" data-sort="date">
									{ __( 'Date', 'billy' ) }
								</th>
								<th scope="col" className="sort" data-sort="description">
									{ __( 'Description', 'billy' ) }
								</th>
								<th scope="col" className="sort" data-sort="reference">
									{ __( 'Reference', 'billy' ) }
								</th>
								<th scope="col" className="sort earnings" data-sort="earning">
									{ __( 'Earning', 'billy' ) }
								</th>
								<th scope="col" className="sort expenses" data-sort="expense">
									{ __( 'Expense', 'billy' ) }
								</th>
								<th scope="col" className="sort" data-sort="tax">
									{ __( 'Tax', 'billy' ) }
								</th>
							</tr>
						</thead>
						<tbody className="list">
							<InnerBlocks.Content />
						</tbody>
						<tfoot>
							{
								( amountTotalEarnings > 0 || amountTotalExpenses > 0 ) &&
									(
										<tr>
											<td colSpan="4" align="right">
												{ sprintf( __( '%1$s / %2$s', 'billy' ), __( 'Earnings', 'billy' ), __( 'Expenses', 'billy' ) ) }
											</td>
											<td className="sum earnings">
												{
													sprintf( __( '%1$s %2$s', 'billy' ), currency, formatNumber( amountTotalEarnings, locale ) )
												}
											</td>
											<td className="sum expenses">
												{
													sprintf( __( '%1$s %2$s', 'billy' ), currency, formatNumber( amountTotalExpenses, locale ) )
												}
											</td>
										</tr>
									)
							}
							{
								( amountTotalEarnings > 0 || amountTotalExpenses > 0 ) &&
									(
										<tr>
											<td colSpan="4" align="right">
												{ __( 'Profit', 'billy' ) }
											</td>
											<td colSpan="2" className="profit">
												{
													sprintf( __( '%1$s %2$s', 'billy' ), currency, formatNumber( ( amountTotalEarnings - amountTotalExpenses ), locale ) )
												}
											</td>
										</tr>
									)
							}
							{
								( amountTaxEarnings > 0 || amountTaxExpenses > 0 ) &&
									(
										<tr>
											<td colSpan="4" align="right">
												{ sprintf( __( '%1$s (%2$s / %3$s)', 'billy' ), __( 'Taxes', 'billy' ) , __( 'Earnings', 'billy' ), __( 'Expenses', 'billy' ) ) }
											</td>
											<td className="sum tax-earnings">
												{
													sprintf( __( '%1$s %2$s', 'billy' ), currency, formatNumber( amountTaxEarnings, locale ) )
												}
											</td>
											<td className="sum tax-expenses">
												{
													sprintf( __( '%1$s %2$s', 'billy' ), currency, formatNumber( amountTaxExpenses, locale ) )
												}
											</td>
										</tr>
									)
							}
						</tfoot>
					</table>
				</div>
			);
		},
	}
];

export default deprecatedAccountingOuter;