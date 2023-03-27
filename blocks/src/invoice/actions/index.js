/**
 * Invoice Actions
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */

import {
	registerBlockType,
} from '@wordpress/blocks';
import {
	__,
	_n,
	sprintf
} from '@wordpress/i18n';
import {
	withSelect,
} from '@wordpress/data';


registerBlockType( 'billy-blocks/invoice-actions', {
	title: sprintf( __( '%1$s: %2$s', 'billy' ), __( 'Invoice', 'billy' ), __( 'Actions', 'billy' ) ),
	icon: 'menu-alt', // https://developer.wordpress.org/resource/dashicons
	category: 'billy-blocks', // Custom category: see index.php
	supports: {
		inserter: false,
		reusable: false,
		html: false,
	},

	getEditWrapperProps() {
		return { 'data-align': 'wide' };
	},

	edit: withSelect( ( select ) => {
		return {
			postModifiedDate: select( 'core/editor' ).getEditedPostAttribute( 'modified' ),
		};
	} )( props => {
		const {
			postModifiedDate,
		} = props;

		// Markup: Backend
		return (
			<div className="components-placeholder" style={ { minHeight: 'auto' } }>
				<small>
					{
						sprintf( __( '%1$s: %2$s', 'billy' ), __( 'Last modified', 'billy' ), new Date( postModifiedDate ).toLocaleString() )
					}
				</small>
			</div>
		);
	} ),

	save: props => {
		return null;
	},
} );
