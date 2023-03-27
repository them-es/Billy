/**
 * Quote Valid Until Date
 * https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type
 */

/**
 * WordPress dependencies
 */

import { registerBlockType } from '@wordpress/blocks';
import {
	__,
	sprintf
} from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';


registerBlockType( 'billy-blocks/quote-validuntildate', {
	title: sprintf( __( '%1$s: %2$s', 'billy' ), __( 'Quote', 'billy' ), __( 'Valid Until', 'billy' ) ),
	icon: 'calendar-alt', // https://developer.wordpress.org/resource/dashicons
	category: 'billy-blocks', // Custom category: see index.php
	supports: {
		inserter: false,
		reusable: false,
		html: false,
	},

	edit: props => {
		// Markup: Backend
		return (
			<ServerSideRender block="billy-blocks/quote-validuntildate" />
		);
	},

	save: props => {
		// Handled by PHP.
		return null;
	},
} );
